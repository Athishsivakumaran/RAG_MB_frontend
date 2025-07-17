import React, { useRef } from 'react';
import { FileUpload } from './FileUpload';
import { ToolDropdown } from './ToolDropdown';
import type { ToolMode } from '../../types/tool';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  selectedTool: ToolMode;
  onToolChange: (tool: ToolMode) => void;
}

export const InputArea: React.FC<InputAreaProps> = ({ value, onChange, onSubmit, isLoading, selectedTool, onToolChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full bg-gradient-to-t from-gray-100 via-white to-white border-t border-gray-200 px-0 py-4">
      <div className="max-w-2xl mx-auto flex items-end gap-2 rounded-2xl shadow-lg bg-white px-4 py-2">
        {/* FileUpload */}
        <FileUpload
          onFilesSelected={() => {}}
          acceptedTypes={["pdf", "docx", "txt", "csv", "json"]}
          maxFileSize={10485760}
          maxFiles={5}
        />
        {/* ToolDropdown */}
        <ToolDropdown selected={selectedTool} onChange={onToolChange} />
        {/* Textarea */}
        <textarea
          ref={textareaRef}
          className="flex-1 resize-none border-none outline-none bg-transparent px-3 py-2 text-base min-h-[40px] max-h-40 focus:ring-0"
          rows={1}
          placeholder={`Message (${selectedTool})...`}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        {/* Send button */}
        <button
          className="p-2 rounded-lg bg-primary-500 text-white font-bold text-xl shadow hover:bg-primary-600 transition disabled:opacity-50"
          onClick={onSubmit}
          disabled={isLoading || !value.trim()}
          aria-label="Send message"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}; 