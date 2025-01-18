'use client';

import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileUpload } from './file-upload';
import { Calendar } from 'lucide-react';
import type { OwnerFormValues } from '@/lib/schemas/business-form';
import FormInfo from '../../form/FormInfo';
import FormContainer from '../../form/FormContainer';

interface OwnerInfoFormProps {
  form: UseFormReturn<OwnerFormValues>;
  onNext: (data: OwnerFormValues) => void;
}

export function OwnerInfoForm({ form, onNext }: OwnerInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;

  return (
    <FormContainer
      onSubmit={handleSubmit(onNext)}
      title='Business Information.'
      description=' Add the Business information from here'
    >
      <div className='flex flex-col gap-4 w-full'>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              First Name
            </label>
            <Input placeholder='Enter First Name' {...register('firstName')} />
            {errors.firstName && (
              <p className='text-sm text-red-500'>{errors.firstName.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Last Name
            </label>
            <Input placeholder='Enter Last Name' {...register('lastName')} />
            {errors.lastName && (
              <p className='text-sm text-red-500'>{errors.lastName.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Phone Number
            </label>
            <Input
              placeholder='Enter Phone Number'
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && (
              <p className='text-sm text-red-500'>
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Email
            </label>
            <Input
              placeholder='Enter Email'
              type='email'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Gender
            </label>
            <Select
              onValueChange={(value) =>
                setValue('gender', value as 'male' | 'female' | 'other')
              }
              value={watch('gender')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select Gender' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='male'>Male</SelectItem>
                <SelectItem value='female'>Female</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className='text-sm text-red-500'>{errors.gender.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Birthdate
            </label>
            <div className='relative'>
              <Input type='date' {...register('birthdate')} />
              <Calendar className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
            </div>
            {errors.birthdate && (
              <p className='text-sm text-red-500'>{errors.birthdate.message}</p>
            )}
          </div>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
            Upload Image
          </label>
          <FileUpload
            label='Upload Image'
            className='p-5'
            onChange={(files) => setValue('image', files[0])}
            value={watch('image') ? [watch('image')] : []}
          />
          {errors.image && <p className='text-sm text-red-500'>Error</p>}
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
            Password
          </label>
          <div className='relative'>
            <Input
              type='text'
              value='Firstname@ZemenShop2024'
              className='pr-10'
              readOnly
            />
            <Button
              type='button'
              variant='ghost'
              size='icon'
              className='absolute right-0 top-0 h-full px-3 hover:bg-transparent'
              onClick={() =>
                navigator.clipboard.writeText('Firstname@ZemenShop2024')
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-gray-400'
              >
                <rect width='8' height='4' x='8' y='2' rx='1' ry='1' />
                <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
              </svg>
            </Button>
          </div>
        </div>

        <div className='flex justify-end'>
          <Button type='submit' className='bg-[#AD002D] hover:bg-[#AD002D]/90'>
            Continue
          </Button>
        </div>
      </div>
    </FormContainer>
  );
}
