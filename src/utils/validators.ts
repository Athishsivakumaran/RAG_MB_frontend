export function validateFile(file: File, acceptedTypes: string[], maxFileSize: number): string | null {
  if (!acceptedTypes.includes(file.type) && !acceptedTypes.some(type => file.name.endsWith(type))) {
    return 'Unsupported file type.';
  }
  if (file.size > maxFileSize) {
    return 'File size exceeds the limit.';
  }
  return null;
} 