import React from 'react';

export const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-3 px-4 py-2">
    <span className="font-semibold text-primary-500 text-base flex items-center gap-2">
      <span className="inline-block">drilling</span>
      <span className="relative w-8 h-8 flex items-center justify-center">
        {/* Drill bit with more realistic drill shape */}
        <span className="block w-3 h-6 bg-primary-500 rounded-b-full shadow-drill animate-drill-spin relative">
          <span className="absolute left-1/2 -translate-x-1/2 top-0 w-2 h-2 bg-gray-300 rounded-full animate-drill-tip" />
        </span>
        {/* Debris animation */}
        <span className="absolute left-7 top-5 w-2 h-2 rounded-full bg-gray-400 animate-drill-debris" />
      </span>
    </span>
    <style>{`
      @keyframes drill-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .animate-drill-spin {
        animation: drill-spin 0.5s linear infinite;
      }
      @keyframes drill-tip {
        0%, 100% { opacity: 0; }
        30% { opacity: 1; }
        60% { opacity: 0.7; }
      }
      .animate-drill-tip {
        animation: drill-tip 1s linear infinite;
      }
      @keyframes drill-debris {
        0% { opacity: 0; transform: translateY(0); }
        20% { opacity: 1; transform: translateY(4px); }
        100% { opacity: 0; transform: translateY(16px); }
      }
      .animate-drill-debris {
        animation: drill-debris 1.1s linear infinite;
      }
      .shadow-drill {
        box-shadow: 0 2px 8px 0 #2563eb44;
      }
    `}</style>
  </div>
);