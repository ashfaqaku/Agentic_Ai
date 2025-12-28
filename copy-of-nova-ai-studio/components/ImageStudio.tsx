'use client';
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    setGeneratedImage(null);
    try {
      const imgUrl = await gemini.generateImage(prompt);
      setGeneratedImage(imgUrl);
    } catch (err) {
      console.error(err);
      alert("Generation failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-8">
        <h3 className="text-3xl font-black text-gray-800">Image Generation</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Describe what you want to see..." className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5" onKeyDown={(e) => e.key === 'Enter' && handleGenerate()} />
          <button onClick={handleGenerate} disabled={!prompt.trim() || isGenerating} className="btn-panda disabled:opacity-50 px-10 py-5 rounded-2xl font-black text-lg">{isGenerating ? 'Drawing...' : 'Generate'}</button>
        </div>
      </div>
      <div className="bg-white rounded-3xl aspect-square max-w-2xl mx-auto flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-white">
        {generatedImage ? <img src={generatedImage} className="w-full h-full object-cover" alt="Generated" /> : <p className="text-gray-400 font-bold">{isGenerating ? 'Mixing colors...' : 'Enter a description.'}</p>}
      </div>
    </div>
  );
};

export default ImageStudio;