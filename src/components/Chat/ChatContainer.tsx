import React from 'react';
import type { ChatMessage } from '../../types/chat';
import { MessageList } from './MessageList';
import { TypingIndicator } from './TypingIndicator';

interface ChatContainerProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isTyping }) => {
  return (
    <div className="flex-1 overflow-y-auto px-0 py-0 bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col justify-end max-w-2xl mx-auto w-full px-2 sm:px-0 py-6">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-24 text-lg select-none">
            <div className="font-semibold text-xl mb-2 text-gray-700">Start your conversation or upload a file to begin.</div>
          </div>
        ) : (
          <MessageList messages={messages} />
        )}
        {isTyping && <TypingIndicator />}
      </div>
    </div>
  );
}; 