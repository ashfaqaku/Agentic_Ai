'use client';
import React, { useState, useRef } from 'react';
// import { gemini } from '../services/geminiService';
import { LiveServerMessage } from '@google/genai';

const LiveLab: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active'>('idle');
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sessionRef = useRef<any>(null);

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  };

  const encode = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
    return buffer;
  };

  const createBlob = (data: Float32Array) => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) int16[i] = data[i] * 32768;
    return { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' };
  };

  const stopSession = () => {
    setIsActive(false);
    setStatus('idle');
    setTranscription(prev => [...prev, "[SESSION ENDED]"]);
  };

  const startSession = async () => {
    setStatus('connecting');
    try {
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const sessionPromise = gemini.getLiveSession({
        onopen: () => {
          setStatus('active');
          setIsActive(true);
          const source = inputCtx.createMediaStreamSource(stream);
          const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
          scriptProcessor.onaudioprocess = (e: any) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const pcmBlob = createBlob(inputData);
            sessionPromise.then(s => s.sendRealtimeInput({ media: pcmBlob }));
          };
          source.connect(scriptProcessor);
          scriptProcessor.connect(inputCtx.destination);
        },
        onmessage: async (message: LiveServerMessage) => {
          if (message.serverContent?.outputTranscription) setTranscription(prev => [...prev, `Panda: ${message.serverContent!.outputTranscription!.text}`]);
          if (message.serverContent?.inputTranscription) setTranscription(prev => [...prev, `You: ${message.serverContent!.inputTranscription!.text}`]);
          const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
          if (base64Audio) {
            const outputNode = outputCtx.createGain();
            outputNode.connect(outputCtx.destination);
            nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
            const buffer = await decodeAudioData(decode(base64Audio), outputCtx, 24000, 1);
            const sourceNode = outputCtx.createBufferSource();
            sourceNode.buffer = buffer;
            sourceNode.connect(outputNode);
            sourceNode.start(nextStartTimeRef.current);
            nextStartTimeRef.current += buffer.duration;
          }
        },
        onerror: (e: any) => console.error(e),
        onclose: () => stopSession(),
      });
      sessionRef.current = sessionPromise;
    } catch (err) {
      console.error(err);
      setStatus('idle');
      alert("Microphone access denied.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col h-full space-y-8">
      <div className="bg-white p-16 rounded-[4rem] text-center space-y-10 relative overflow-hidden shadow-2xl border border-gray-100">
        <div className="w-40 h-40 mx-auto relative">
           <div className={`w-full h-full rounded-full border-8 border-gray-50 flex items-center justify-center bg-white shadow-xl ${isActive ? 'scale-110 border-panda/20' : ''}`}>
              <div className={`w-24 h-24 rounded-full bg-panda flex items-center justify-center text-white text-4xl shadow-lg shadow-panda/40 ${isActive ? 'animate-pulse' : ''}`}>
                 <i className="fas fa-microphone"></i>
              </div>
           </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-black text-gray-800">{status === 'active' ? 'Loud and Clear' : status === 'connecting' ? 'Connecting...' : 'Voice Lab'}</h3>
        </div>
        <div className="flex justify-center gap-6">
          {!isActive && status === 'idle' ? <button onClick={startSession} className="btn-panda px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-panda/40">Start Chat</button> : <button onClick={stopSession} className="bg-white border-4 border-gray-100 text-gray-400 hover:text-red-500 px-12 py-5 rounded-full font-black text-xl transition-all">Hang Up</button>}
        </div>
      </div>
      <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg min-h-[300px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {transcription.map((line, i) => <div key={i} className={`text-lg ${line.startsWith('You:') ? 'text-panda font-black' : 'text-gray-800'}`}>{line}</div>)}
        </div>
      </div>
    </div>
  );
};

export default LiveLab;
