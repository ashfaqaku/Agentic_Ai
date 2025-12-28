// src/components/NewPage.jsx
import React from 'react';
import { AppTab } from '../types/types';

interface NewPageProps {
  onNavigate: (tab: AppTab) => void;
}

const NewPage: React.FC<NewPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-6 md:px-[10%] bg-gradient-to-r from-panda/10 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Your New Page Title
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            This is your new page description.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 md:px-[10%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Section Title</h2>
          {/* Add your content here */}
        </div>
      </section>
    </div>
  );
};

export default NewPage;