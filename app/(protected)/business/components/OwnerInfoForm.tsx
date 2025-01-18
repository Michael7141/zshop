'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ownerSchema } from '../schemas/validationSchemas';
import { BusinessFormData } from '../types/types';
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

interface OwnerInfoFormProps {
  onNext: (data: Partial<BusinessFormData>) => void;
  defaultValues?: Partial<BusinessFormData>;
}

export const OwnerInfoForm = ({
  onNext,
  defaultValues,
}: OwnerInfoFormProps) => {
  const form = useForm({
    resolver: zodResolver(ownerSchema),
    defaultValues: defaultValues || {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      gender: '',
      password: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className='space-y-6'>
        <div className='grid grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter First Name' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter Last Name' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Phone Number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Gender' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='male'>Male</SelectItem>
                    <SelectItem value='female'>Female</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='birthdate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Date</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter BirthDate' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter Password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Add other owner form fields similarly */}
        <div className='flex justify-end'>
          <Button type='submit'>Next</Button>
        </div>
      </form>
    </Form>
  );
};
