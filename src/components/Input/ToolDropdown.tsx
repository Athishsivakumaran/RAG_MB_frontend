import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen, Globe, Layers, Check, SlidersHorizontal } from 'lucide-react';
import type { ToolMode } from '../../types/tool';

const TOOL_OPTIONS: { label: string; value: ToolMode; icon: React.ReactNode }[] = [
  { label: 'Knowledge Base', value: 'knowledge', icon: <BookOpen className="w-4 h-4 mr-2" /> },
  { label: 'Internet', value: 'internet', icon: <Globe className="w-4 h-4 mr-2" /> },
  { label: 'Hybrid', value: 'hybrid', icon: <Layers className="w-4 h-4 mr-2" /> },
];

interface ToolDropdownProps {
  selected: ToolMode;
  onChange: (tool: ToolMode) => void;
}

export const ToolDropdown: React.FC<ToolDropdownProps> = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium shadow border border-gray-200 focus:outline-none"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <SlidersHorizontal className="w-5 h-5" />
P        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 animate-fade-in">
          {TOOL_OPTIONS.map(option => (
            <button
              key={option.value}
              className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700 ${selected === option.value ? 'bg-primary-50 font-semibold' : ''}`}
              onClick={() => { onChange(option.value); setOpen(false); }}
              role="option"
              aria-selected={selected === option.value}
            >
              {option.icon}
              {option.label}
              {selected === option.value && <Check className="w-4 h-4 ml-auto text-primary-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 