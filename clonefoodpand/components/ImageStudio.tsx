
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
      alert("Generation failed. Try a different prompt.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-8">
        <div className="space-y-2">
          <h3 className="text-3xl font-black text-gray-800">Image Generation</h3>
          <p className="text-gray-500">Transform your imagination into visuals with the speed of light.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to see..."
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-gray-800 focus:outline-none focus:border-panda transition-all pr-12"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="btn-panda disabled:opacity-50 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-panda/20 whitespace-nowrap"
          >
            {isGenerating ? 'Drawing...' : 'Generate'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl aspect-square max-w-2xl mx-auto flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-white group">
        {generatedImage ? (
          <>
            <img src={generatedImage} className="w-full h-full object-cover animate-in zoom-in-95 duration-700" alt="Generated" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <a 
                href={generatedImage} 
                download="panda-ai-image.png"
                className="bg-white text-panda px-8 py-3 rounded-full font-black flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <i className="fas fa-download"></i> Save HD
              </a>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6 p-12">
            <div className={`w-24 h-24 rounded-full border-4 border-dashed border-gray-100 mx-auto flex items-center justify-center ${isGenerating ? 'animate-spin border-panda' : ''}`}>
               <span className="text-4xl">🎨</span>
            </div>
            <p className="text-gray-400 font-bold max-w-xs mx-auto">
              {isGenerating ? 'Mixing colors and textures for you...' : 'Enter a description and watch the magic happen.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageStudio;
