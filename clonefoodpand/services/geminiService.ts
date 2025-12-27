"use client";

export class GeminiService {
  constructor() {
    console.log('GeminiService is disabled');
  }

  async chat(message: string, history: { role: string; parts: string }[] = []) {
    console.log('Chat called with:', message);
    return "AI features are temporarily disabled during migration to Next.js.";
  }

  async analyzeImage(prompt: string, base64Image: string) {
    console.log('Image analysis called for:', prompt.substring(0, 50) + '...');
    return "Image analysis is currently unavailable. Please check back later.";
  }

  async generateImage(prompt: string) {
    console.log('Image generation called for:', prompt.substring(0, 50) + '...');
    // Return a placeholder image or empty string
    return "";
  }

  getLiveSession(callbacks: any) {
    console.log('Live session requested');
    // Return a mock session object
    return {
      send: () => console.log('Mock: Audio sent'),
      close: () => console.log('Mock: Session closed'),
      onmessage: null,
      onerror: null
    };
  }
}

export const gemini = new GeminiService();