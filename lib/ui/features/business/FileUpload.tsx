import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileIcon, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  maxSize?: number;
  accept?: string;
  onChange: (files: File[]) => void;
  value?: File[];
  multiple?: boolean;
  className?: string;
}

export function FileUpload({
  maxSize = 50,
  accept,
  onChange,
  value = [],
  multiple = false,
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      handleFiles(files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(
      (file) => file.size <= maxSize * 1024 * 1024
    );
    onChange(multiple ? [...value, ...validFiles] : validFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = value.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  return (
    <div className={className}>
      <div
        className={cn(
          'flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer p-6',
          dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <svg
            className='w-8 h-8 mb-4 text-gray-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 16'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
            />
          </svg>
          <p className='mb-2 text-sm text-gray-500'>
            <span className='font-semibold'>Click to upload</span> or drag and
            drop
          </p>
          <p className='text-xs text-gray-500'>Max file size: {maxSize}MB</p>
        </div>
        <input
          type='file'
          className='hidden'
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
      </div>

      {value.length > 0 && (
        <div className='mt-4 space-y-2'>
          {value.map((file, index) => (
            <div
              key={index}
              className='flex items-center justify-between p-2 bg-gray-50 rounded-lg'
            >
              <div className='flex items-center space-x-2'>
                <FileIcon className='w-4 h-4 text-gray-500' />
                <span className='text-sm text-gray-700'>{file.name}</span>
                <span className='text-xs text-gray-500'>
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => removeFile(index)}
                className='text-gray-500 hover:text-red-500'
              >
                <X className='w-4 h-4' />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
