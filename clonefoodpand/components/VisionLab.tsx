
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const VisionLab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('Describe this image in detail.');
  const [result, setResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyze = async () => {
    if (!image || isAnalyzing) return;
    setIsAnalyzing(true);
    setResult(null);

    try {
      const response = await gemini.analyzeImage(prompt, image);
      setResult(response || "No analysis generated.");
    } catch (err) {
      console.error(err);
      setResult("Error analyzing image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-8">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
          <h3 className="text-2xl font-black text-gray-800">Visual Input</h3>
          <div 
            className="aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden group"
          >
            {image ? (
              <>
                <img src={image} className="w-full h-full object-cover" alt="Upload" />
                <button 
                  onClick={() => setImage(null)}
                  className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <i className="fas fa-times"></i>
                </button>
              </>
            ) : (
              <label className="cursor-pointer flex flex-col items-center gap-4 p-12">
                <div className="w-16 h-16 rounded-full bg-panda/10 flex items-center justify-center text-panda">
                  <i className="fas fa-plus text-2xl"></i>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">Click to upload image</p>
                  <p className="text-xs text-gray-400">PNG, JPG or WebP</p>
                </div>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            )}
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
          <h3 className="text-2xl font-black text-gray-800">What should I look for?</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 text-gray-800 text-sm focus:outline-none focus:border-panda min-h-[120px]"
            placeholder="e.g. List all the objects you see..."
          />
          <button
            onClick={analyze}
            disabled={!image || isAnalyzing}
            className="w-full btn-panda disabled:opacity-50 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-panda/20"
          >
            {isAnalyzing ? 'Processing...' : 'Analyze Image'}
          </button>
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col min-h-[500px]">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-gray-800">Nova's Report</h3>
          {isAnalyzing && <i className="fas fa-circle-notch fa-spin text-panda"></i>}
        </div>
        <div className="flex-1 text-gray-600 text-base leading-relaxed overflow-y-auto whitespace-pre-wrap">
          {result || (isAnalyzing ? 'Examining every pixel...' : 'Upload an image and click analyze to see results.')}
        </div>
      </div>
    </div>
  );
};

export default VisionLab;
