import React from 'react';
import type { ToolMode } from '../../types/tool';

interface ToolSelectorProps {
  selected: ToolMode;
  onChange: (tool: ToolMode) => void;
}

const TOOLS: { label: string; value: ToolMode }[] = [
  { label: 'Knowledge Base', value: 'knowledge' },
  { label: 'Internet', value: 'internet' },
  { label: 'Hybrid', value: 'hybrid' },
];

export const ToolSelector: React.FC<ToolSelectorProps> = ({ selected, onChange }) => (
  <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
    {TOOLS.map(tool => (
      <button
        key={tool.value}
        className={`px-4 py-1 rounded-lg font-medium transition-colors text-sm ${selected === tool.value ? 'bg-primary-500 text-white shadow' : 'text-gray-700 hover:bg-gray-200'}`}
        onClick={() => onChange(tool.value)}
        aria-pressed={selected === tool.value}
      >
        {tool.label}
      </button>
    ))}
  </div>
); 