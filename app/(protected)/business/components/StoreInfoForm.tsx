'use client';
import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { storeSchema } from '../schemas/validationSchemas';
import type { BusinessFormData } from '../types/types';

import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import ProgressSteps from '@/lib/ui/features/business/progress-steps';
import FormInfo from '@/lib/ui/form/FormInfo';

interface StoreInfoFormProps {
  onNext: (data: Partial<BusinessFormData>) => void;
  onBack: () => void;
  defaultValues?: Partial<BusinessFormData>;
}

export const StoreInfoForm = ({
  onNext,
  onBack,
  defaultValues,
}: StoreInfoFormProps) => {
  const form = useForm({
    resolver: zodResolver(storeSchema),
    defaultValues: defaultValues || {
      storeName: '',
      serviceType: '',
      businessSpeciality: '',
      hasBranches: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className='space-y-6'>
        <FormField
          control={form.control}
          name='storeName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter Store Name' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='serviceType'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter Service Type' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='businessSpeciality'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Speciality</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter Business Speciality' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Add other store form fields */}
        <div className='flex justify-between'>
          <Button type='button' variant='outline' onClick={onBack}>
            Back
          </Button>
          <Button type='submit'>Next</Button>
        </div>
      </form>
    </Form>
  );
};
