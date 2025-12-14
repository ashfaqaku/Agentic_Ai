'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Trash2, Copy, Check, Sparkles, Cpu } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export default function Home() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant powered by Llama 3.3 on a Rust backend. How can I help you today? 🤖",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:8081/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage, 
          platform: 'web'
        }),
      });
      
      if (!response.ok) throw new Error('Failed to get response');
      
      const data = await response.json();
      
      // Parse the AI response
      const aiResponse = data.reply.split('🤖 AI Agent Response:')[1]?.split('📱 Platform:')[0]?.trim() || data.reply;
      
      // Add AI response
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newAiMessage]);
      
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `❌ Error: ${error instanceof Error ? error.message : 'Failed to connect to AI agent'}`,
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      text: "Chat cleared! I'm ready to help you with anything. ✨",
      sender: 'assistant',
      timestamp: new Date()
    }]);
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-800/50 bg-gray-900/30 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl shadow-purple-500/30">
                    <Bot className="h-7 w-7" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Rust AI Assistant
                    </span>
                  </h1>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Cpu className="h-4 w-4" />
                    <span>Powered by Llama 3.3 + Rust</span>
                    <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                    <span className="text-green-400 flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                      Connected
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.open('http://localhost:8081', '_blank')}
                  className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-300 border border-gray-700/50"
                >
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>View Rust API</span>
                </button>
                
                <button
                  onClick={clearChat}
                  className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/30 hover:to-red-600/30 text-red-300 rounded-xl transition-all duration-300 border border-red-500/20 hover:border-red-500/30"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="font-medium">Clear Chat</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Stats Bar */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total Messages</p>
                    <p className="text-2xl font-bold text-white">{messages.length}</p>
                  </div>
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Bot className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">AI Model</p>
                    <p className="text-lg font-bold text-white truncate">Llama 3.3 70B</p>
                  </div>
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Cpu className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-2xl font-bold text-green-400">~1s</p>
                  </div>
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Sparkles className="h-5 w-5 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden mb-8">
            <div className="h-[500px] overflow-y-auto p-4 md:p-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-6 animate-fadeIn ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="flex items-start space-x-3 max-w-3xl mx-auto">
                    {message.sender === 'assistant' && (
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
                          <Bot className="h-5 w-5" />
                        </div>
                      </div>
                    )}
                    
                    <div className={`flex-1 ${message.sender === 'user' ? 'order-first' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-300">
                            {message.sender === 'user' ? (
                              <div className="flex items-center">
                                <div className="p-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mr-2">
                                  <User className="h-3.5 w-3.5" />
                                </div>
                                <span className="text-blue-300">You</span>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="p-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-2">
                                  <Bot className="h-3.5 w-3.5" />
                                </div>
                                <span className="text-purple-300">AI Assistant</span>
                              </div>
                            )}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}                          </span>
                          <button
                            onClick={() => copyToClipboard(message.text, message.id)}
                            className="p-1.5 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:scale-105"
                            title="Copy to clipboard"
                          >
                            {copiedId === message.id ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div
                        className={`rounded-2xl p-4 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20'
                            : 'bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30'
                        }`}
                      >
                        <div className="prose prose-invert max-w-none">
                          <div className="whitespace-pre-wrap text-gray-200">
                            {message.text}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {message.sender === 'user' && (
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                          <User className="h-5 w-5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-2xl p-4">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-2 w-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 md:p-6 shadow-2xl">
            <div className="flex space-x-4">
              <div className="flex-1">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything about programming, AI, or technology..."
                  rows={3}
                  className="w-full px-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none transition-all duration-300"
                  disabled={loading}
                />
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <kbd className="px-2 py-1 bg-gray-800/50 rounded text-xs">Enter</kbd>
                    <span>to send</span>
                    <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                    <kbd className="px-2 py-1 bg-gray-800/50 rounded text-xs">Shift + Enter</kbd>
                    <span>for new line</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {input.length}/2000 characters
                  </div>
                </div>
              </div>
              
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="self-end px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50 shadow-lg shadow-purple-500/25"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Built with ❤️ using Next.js, Rust, and Groq AI</p>
            <p className="mt-1">Connected to: <code className="px-2 py-1 bg-gray-800/50 rounded">http://localhost:8081/api/chat</code></p>
          </div>
        </main>
      </div>

      {/* Add Tailwind animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}