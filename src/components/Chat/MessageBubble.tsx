import React from 'react';
import type { ChatMessage } from '../../types/chat';
import { formatTimestamp } from '../../utils/formatters';
// import ReactMarkdown from 'react-markdown'; // Uncomment if using markdown rendering

interface MessageBubbleProps {
  message: ChatMessage;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.type === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-[70%] rounded-xl px-4 py-2 shadow-md relative ${isUser ? 'bg-primary-500 text-white rounded-br-sm' : 'bg-white text-gray-900 rounded-bl-sm border border-gray-200'}`}>
        {/* <ReactMarkdown>{message.content}</ReactMarkdown> */}
        <div className="whitespace-pre-line break-words">{message.content}</div>
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
          <span>{formatTimestamp(message.timestamp)}</span>
          <button className="hover:text-primary-500" title="Copy" onClick={() => navigator.clipboard.writeText(message.content)}>
            ⧉
          </button>
        </div>
      </div>
    </div>
  );
}; 