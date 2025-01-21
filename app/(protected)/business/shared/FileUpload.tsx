import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  label: string;
  accept?: string;
  maxSize?: number;
}

export const FileUpload = ({
  onFileSelect,
  accept = 'image/*',
  maxSize = 5,
}: FileUploadProps) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.size <= maxSize * 1024 * 1024) {
      onFileSelect(file);
    }
  };

  return (
    <div
      className='border-2 border-dashed border-gray-200 rounded-lg p-8 text-center'
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className='flex justify-center mb-4'>
        <Upload className='h-8 w-8 text-gray-400' />
      </div>
      <p className='text-gray-500'>Drop or Select file</p>
      <input
        type='file'
        className='hidden'
        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
        accept={accept}
      />
    </div>
  );
};
