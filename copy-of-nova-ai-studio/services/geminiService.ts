
import { GoogleGenAI, GenerateContentResponse, Type, Modality } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Fix: Always use process.env.API_KEY directly for initialization
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async chat(message: string, history: { role: string; parts: string }[] = []) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts }] })), { parts: [{ text: message }] }],
      config: {
        systemInstruction: "You are Nova, an advanced AI assistant. You are helpful, concise, and professional.",
        temperature: 0.7,
      },
    });
    // Fix: Access .text property directly
    return response.text;
  }

  async analyzeImage(prompt: string, base64Image: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: 'image/png',
              data: base64Image.split(',')[1],
            },
          },
        ],
      },
    });
    // Fix: Access .text property directly
    return response.text;
  }

  async generateImage(prompt: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    // Fix: Iterate through all parts to find the image part
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data returned from model");
  }

  getLiveSession(callbacks: any) {
    return this.ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      callbacks,
      config: {
        // Fix: Use Modality.AUDIO and enable transcription for real-time feedback
        responseModalities: [Modality.AUDIO],
        outputAudioTranscription: {},
        inputAudioTranscription: {},
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
        },
        systemInstruction: 'You are a friendly companion having a real-time conversation. Be expressive and concise.',
      },
    });
  }
}

export const gemini = new GeminiService();
