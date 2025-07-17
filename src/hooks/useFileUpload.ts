import { useState } from 'react';
import type { FileMeta } from '../types/file';

export function useFileUpload() {
  const [files, setFiles] = useState<FileMeta[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (newFiles: FileMeta[]) => setFiles((prev) => [...prev, ...newFiles]);
  const removeFile = (id: string) => setFiles((prev) => prev.filter(f => f.id !== id));
  const clearFiles = () => setFiles([]);

  return { files, addFiles, removeFile, clearFiles, error, setError };
} 