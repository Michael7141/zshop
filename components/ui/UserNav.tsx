'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Button } from './button';
import { Avatar, AvatarFallback } from './avatar';
import SignoutButton from './SignoutButton';

// import SignoutButton from "./SignoutButton";

export function UserNav() {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant='default'
                className='relative h-9 w-9 rounded-full'
              >
                <Avatar className='h-9 w-9 bg-primary'>
                  {/* <AvatarImage src={user?.profile?.picture?.url} alt='Avatar' /> */}
                  <AvatarFallback className='bg-transparent text-white'>
                    {/* {user?.profile?.firstName.charAt(0).toLocaleUpperCase()} */}
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='bottom'>Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent
        className='w-64 bg-white text-dark-800'
        align='end'
        forceMount
      >
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-row items-center gap-3'>
            <Avatar className='h-12 w-12 border border-dark-200 bg-primary'>
              {/* <AvatarImage src={user?.profile?.picture?.url} alt='Avatar' /> */}
              <AvatarFallback className='bg-transparent text-dark-lighter'>
                {/* {user?.profile?.firstName.charAt(0).toLocaleUpperCase()} */}
                JD
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-bold leading-none text-primary'>
                Admin
              </p>
              <p className='text-xs leading-none text-dark-300'>Super</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:cursor-pointer' asChild>
            <Link href={``} className='flex items-center'>
              <Icon icon='line-md:account' className='mr-3 h-4 w-4' />
              Personal settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='hover:cursor-pointer' asChild>
          <div className='ml-0 w-full'>
            <SignoutButton />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
