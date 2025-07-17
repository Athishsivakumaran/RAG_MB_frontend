export interface FileMeta {
  id: string;
  name: string;
  size: number;
  type: string;
  previewUrl?: string;
  progress?: number;
  error?: string;
} 