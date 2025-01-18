import React from 'react';
import FormInfo from './FormInfo';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

export default function FormContainer({
  title,
  description,
  className,
  children,
  onSubmit,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn('flex flex-col md:flex-row gap-6', className)}
    >
      <FormInfo title={title} description={description} />
      <div className='flex flex-col gap-4 w-full'>{children}</div>
    </form>
  );
}
