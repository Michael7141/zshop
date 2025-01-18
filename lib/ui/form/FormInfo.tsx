import { CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface Props {
  title: string;
  description: string;
}

export default function FormInfo({ title, description }: Props) {
  return (
    <CardHeader className='px-6 pt-6 pb-0 w-full md:w-1/3'>
      <CardTitle className='text-2xl !text-warning font-semibold'>
        {title}.
      </CardTitle>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </CardHeader>
  );
}
