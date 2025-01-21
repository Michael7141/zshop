'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserForm() {
  return (
    <Card className='rounded-xl shadow-sm flex flex-col md:flex-row gap-6 w-full'>
      <CardHeader className='px-6 pt-6 pb-0 w-full md:w-1/3'>
        <CardTitle className='text-2xl font-semibold'>Add new User</CardTitle>
        <p className='text-sm text-muted-foreground'>
          Add your User Information from here
        </p>
      </CardHeader>
      <CardContent className='p-6 w-full md:w-2/3'>
        <form className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                First Name
              </label>
              <Input placeholder='Enter First Name' />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Last Name
              </label>
              <Input placeholder='Enter Last Name' />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Phone Number
              </label>
              <Input placeholder='Enter Phone Number' />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Email
              </label>
              <Input placeholder='Enter Email' />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Gender
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select Gender' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Birthdate
              </label>
              <div className='relative'>
                <Input placeholder='Select Birthdate' />
                <Calendar className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Upload Image
            </label>
            <div className='border-2 border-dashed rounded-lg p-8 text-center'>
              <div className='mx-auto flex flex-col items-center justify-center'>
                <svg
                  className='mx-auto h-12 w-12 text-gray-400'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label className='relative cursor-pointer rounded-md bg-white font-medium text-primary hover:text-primary/90'>
                    <span>Drop or Select file</span>
                    <input type='file' className='sr-only' />
                  </label>
                </div>
              </div>
            </div>
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

          <div className='flex justify-end space-x-4'>
            <Button variant='outline'>Cancel</Button>
            <Button className='bg-[#AD002D] hover:bg-[#AD002D]/90'>
              Add User
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
