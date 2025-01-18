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
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';
import type { StoreFormValues } from '@/lib/schemas/business-form';
import { Checkbox } from '@/components/ui/checkbox';
import FormContainer from '../../form/FormContainer';
import FormInfo from '../../form/FormInfo';

interface StoreInfoFormProps {
  form: UseFormReturn<StoreFormValues>;
  onBackAction: () => void;
  onNextAction: (data: StoreFormValues) => void;
}

export function StoreInfoForm({
  form,
  onBackAction,
  onNextAction,
}: StoreInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const hasBranches = watch('hasBranches');
  const branches = watch('branches') || [];

  const addBranch = () => {
    setValue('branches', [
      ...(branches || []),
      {
        name: '',
        country: '',
        city: '',
        addressLine1: '',
        addressLine2: '',
        phoneNumber: '',
        email: '',
        manager: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          gender: 'male',
          birthdate: '',
          image: null,
        },
      },
    ]);
  };

  const removeBranch = (index: number) => {
    setValue(
      'branches',
      branches.filter((_, i) => i !== index)
    );
  };

  return (
    <FormContainer
      onSubmit={handleSubmit(onNextAction)}
      title='Business Information.'
      description=' Add the Business information from here'
    >
      <div className='grid gap-6'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Store Name</label>
          <Input placeholder='Enter Store Name' {...register('storeName')} />
          {errors.storeName && (
            <p className='text-sm text-red-500'>{errors.storeName.message}</p>
          )}
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Service Type</label>
            <Select
              onValueChange={(value) => setValue('serviceType', value)}
              value={watch('serviceType')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select Service Type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='restaurant'>Restaurant</SelectItem>
                <SelectItem value='cafe'>Cafe</SelectItem>
                <SelectItem value='fastfood'>Fast Food</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className='text-sm text-red-500'>
                {errors.serviceType.message}
              </p>
            )}
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Business Speciality</label>
            <Select
              onValueChange={(value) => setValue('businessSpeciality', value)}
              value={watch('businessSpeciality')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select Business Speciality' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ethiopian'>Ethiopian</SelectItem>
                <SelectItem value='italian'>Italian</SelectItem>
                <SelectItem value='chinese'>Chinese</SelectItem>
              </SelectContent>
            </Select>
            {errors.businessSpeciality && (
              <p className='text-sm text-red-500'>
                {errors.businessSpeciality.message}
              </p>
            )}
          </div>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Upload Logo</label>
          <FileUpload
            label='Upload Logo'
            onChange={(files) => setValue('logo', files[0])}
            value={watch('logo') ? [watch('logo')] : []}
          />
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Upload Cover Image</label>
          <FileUpload
            label='Upload Cover Image'
            onChange={(files) => setValue('coverImage', files[0])}
            value={watch('coverImage') ? [watch('coverImage')] : []}
          />
        </div>

        <div className='flex items-center space-x-2'>
          <Checkbox
            id='hasBranches'
            checked={hasBranches}
            onCheckedChange={(checked) =>
              setValue('hasBranches', checked as boolean)
            }
          />
          <label
            htmlFor='hasBranches'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Store has Branches
          </label>
        </div>

        {hasBranches && (
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-medium'>Branches</h3>
              <Button
                type='button'
                onClick={addBranch}
                className='bg-[#AD002D] hover:bg-[#AD002D]/90'
              >
                Add More Branch
              </Button>
            </div>

            {branches.map((branch, index) => (
              <Card key={index}>
                <CardContent className='p-6'>
                  <div className='flex justify-between items-start mb-6'>
                    <h4 className='text-lg font-medium'>Branch {index + 1}</h4>
                    <Button
                      type='button'
                      variant='ghost'
                      size='sm'
                      onClick={() => removeBranch(index)}
                    >
                      <X className='h-4 w-4' />
                    </Button>
                  </div>

                  <div className='grid gap-6'>
                    <Input
                      placeholder='Enter Branch Name'
                      {...register(`branches.${index}.name`)}
                    />

                    <div className='grid grid-cols-2 gap-6'>
                      <Select
                        onValueChange={(value) =>
                          setValue(`branches.${index}.country`, value)
                        }
                        value={watch(`branches.${index}.country`)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select Country' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='ethiopia'>Ethiopia</SelectItem>
                          <SelectItem value='kenya'>Kenya</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select
                        onValueChange={(value) =>
                          setValue(`branches.${index}.city`, value)
                        }
                        value={watch(`branches.${index}.city`)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select City' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='addis-ababa'>
                            Addis Ababa
                          </SelectItem>
                          <SelectItem value='nairobi'>Nairobi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                      <Input
                        placeholder='Address Line 1'
                        {...register(`branches.${index}.addressLine1`)}
                      />
                      <Input
                        placeholder='Address Line 2'
                        {...register(`branches.${index}.addressLine2`)}
                      />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                      <Input
                        placeholder='Phone Number'
                        {...register(`branches.${index}.phoneNumber`)}
                      />
                      <Input
                        placeholder='Email'
                        type='email'
                        {...register(`branches.${index}.email`)}
                      />
                    </div>

                    <div className='space-y-4'>
                      <h5 className='font-medium'>Store Manager Info</h5>
                      <div className='grid grid-cols-2 gap-6'>
                        <Input
                          placeholder='First Name'
                          {...register(`branches.${index}.manager.firstName`)}
                        />
                        <Input
                          placeholder='Last Name'
                          {...register(`branches.${index}.manager.lastName`)}
                        />
                      </div>

                      <div className='grid grid-cols-2 gap-6'>
                        <Input
                          placeholder='Phone Number'
                          {...register(`branches.${index}.manager.phoneNumber`)}
                        />
                        <Input
                          placeholder='Email'
                          type='email'
                          {...register(`branches.${index}.manager.email`)}
                        />
                      </div>

                      <div className='grid grid-cols-2 gap-6'>
                        <Select
                          onValueChange={(value) =>
                            setValue(
                              `branches.${index}.manager.gender`,
                              value as 'male' | 'female' | 'other'
                            )
                          }
                          value={watch(`branches.${index}.manager.gender`)}
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

                        <Input
                          type='date'
                          {...register(`branches.${index}.manager.birthdate`)}
                        />
                      </div>

                      <div className='space-y-2'>
                        <label className='text-sm font-medium'>
                          Upload Manager Image
                        </label>
                        <FileUpload
                          label='Upload Image'
                          onChange={(files) =>
                            setValue(
                              `branches.${index}.manager.image`,
                              files[0]
                            )
                          }
                          value={
                            watch(`branches.${index}.manager.image`)
                              ? [watch(`branches.${index}.manager.image`)]
                              : []
                          }
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className='flex justify-end space-x-4'>
        <Button type='button' variant='outline' onClick={onBackAction}>
          Back
        </Button>
        <Button type='submit' className='bg-[#AD002D] hover:bg-[#AD002D]/90'>
          Continue
        </Button>
      </div>
    </FormContainer>
  );
}
