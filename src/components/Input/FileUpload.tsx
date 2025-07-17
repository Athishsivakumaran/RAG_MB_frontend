import React from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes: string[];
  maxFileSize: number;
  maxFiles: number;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFilesSelected, acceptedTypes, maxFileSize, maxFiles }) => {
  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [`.${type}`]: [] }), {}),
    maxSize: maxFileSize,
    maxFiles,
    onDrop: (acceptedFiles) => {
      onFilesSelected(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-200 bg-gray-100 hover:bg-gray-200'}`}
      title="Upload files">
      <input {...getInputProps()} />
      <span className="text-xl text-gray-500 font-bold">+</span>
    </div>
  );
}; 