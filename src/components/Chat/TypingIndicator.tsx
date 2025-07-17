import React from 'react';

export const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-2 px-4 py-2">
    <span className="text-primary-500 font-medium">AI is typing</span>
    <span className="flex gap-1">
      <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
      <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
      <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
    </span>
  </div>
); 