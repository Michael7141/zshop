'use client';

import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { FileUpload } from './file-upload';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import type { MoreInfoFormValues } from '@/lib/schemas/business-form';
import { StoreAvailability } from './store-availiablity';
import FormContainer from '../../form/FormContainer';

interface MoreInfoFormProps {
  form: UseFormReturn<MoreInfoFormValues>;
  onBack: () => void;
  onSubmit: (data: MoreInfoFormValues) => void;
}

const DOCUMENT_TYPES = [
  { id: 'license', label: 'Licence' },
  { id: 'id', label: 'ID' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'other', label: 'Other Documents' },
] as const;

const INITIAL_DAYS = [
  { day: 'monday' as const, isOpen: false, from: '', to: '' },
  { day: 'tuesday' as const, isOpen: false, from: '', to: '' },
  { day: 'wednesday' as const, isOpen: false, from: '', to: '' },
  { day: 'thursday' as const, isOpen: false, from: '', to: '' },
  { day: 'friday' as const, isOpen: false, from: '', to: '' },
  { day: 'saturday' as const, isOpen: false, from: '', to: '' },
  { day: 'sunday' as const, isOpen: false, from: '', to: '' },
];

export function MoreInfoForm({ form, onBack, onSubmit }: MoreInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const tags = watch('tags') || [];
  const availability = watch('availability') || INITIAL_DAYS;

  const handleTagAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value) {
      event.preventDefault();
      const newTag = event.currentTarget.value;
      if (!tags.includes(newTag)) {
        setValue('tags', [...tags, newTag]);
      }
      event.currentTarget.value = '';
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      'tags',
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
      <FormContainer
        onSubmit={handleSubmit(onSubmit)}
        title='More Information'
        description='Add the More Business information from here'
      >
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-medium mb-4'>Store Availability</h3>
            <StoreAvailability
              value={availability}
              onChange={(days) => setValue('availability', days)}
            />
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Upload Documents</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {DOCUMENT_TYPES.map((docType) => (
                <div key={docType.id} className='space-y-2'>
                  <label className='text-sm font-medium'>{docType.label}</label>
                  <FileUpload
                    label={`Upload ${docType.label}`}
                    onChange={(files) =>
                      setValue(`documents.${docType.id}`, files)
                    }
                    value={watch(`documents.${docType.id}`) || []}
                    multiple
                    accept='.pdf,.doc,.docx'
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Related Tags</h3>
            <div className='space-y-4'>
              <Input placeholder='Enter Tag' onKeyDown={handleTagAdd} />
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <Badge key={tag} variant='secondary' className='px-3 py-1'>
                    {tag}
                    <Button
                      type='button'
                      variant='ghost'
                      size='sm'
                      className='h-4 w-4 p-0 ml-2'
                      onClick={() => removeTag(tag)}
                    >
                      <X className='h-3 w-3' />
                    </Button>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end space-x-4'>
          <Button type='button' variant='outline' onClick={onBack}>
            Back
          </Button>
          <Button type='submit' className='bg-[#AD002D] hover:bg-[#AD002D]/90'>
            Register Business
          </Button>
        </div>
      </FormContainer>
    </form>
  );
}
