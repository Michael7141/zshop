'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { moreInfoSchema } from '../schemas/validationSchemas';
import type { BusinessFormData } from '../types/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Form } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

interface MoreInfoFormProps {
  onSubmit: (data: Partial<BusinessFormData>) => void;
  onBack: () => void;
  defaultValues?: Partial<BusinessFormData>;
}

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const MoreInfoForm = ({
  onSubmit,
  onBack,
  defaultValues,
}: MoreInfoFormProps) => {
  const form = useForm({
    resolver: zodResolver(moreInfoSchema),
    defaultValues: defaultValues || {
      availability: [
        { day: 'Monday', from: '', to: '', isOpen: false },
        // ... other days
      ],
      documents: {},
      tags: [],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-4'>
          {days.map((day, index) => (
            <div key={day} className='flex items-center gap-4'>
              <Checkbox
                defaultChecked={!!form.watch(`availability.${index}.isOpen`)}
                id={`day-${day}`}
                checked={!!form.watch(`availability.${index}.isOpen`)}
                onCheckedChange={(checked) => {
                  form.setValue(
                    `availability.${index}.isOpen`,
                    Boolean(checked)
                  );
                }}
              />
              <div className='grid grid-cols-3 gap-4 flex-1'>
                <span>{day}</span>
                <Input
                  type='time'
                  {...form.register(`availability.${index}.from`)}
                />
                <Input
                  type='time'
                  {...form.register(`availability.${index}.to`)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between'>
          <Button type='button' variant='outline' onClick={onBack}>
            Back
          </Button>
          <Button type='submit'>Register Business</Button>
        </div>
      </form>
    </Form>
  );
};
