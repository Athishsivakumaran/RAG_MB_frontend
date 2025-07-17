import { useState } from 'react';
import type { ToolMode } from '../types/tool';

export function useToolSelection(initial: ToolMode = 'knowledge') {
  const [selectedTool, setSelectedTool] = useState<ToolMode>(initial);
  return { selectedTool, setSelectedTool };
} 