import React, { FormEvent } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

import { signOut } from 'next-auth/react';

export default function SignoutButton() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signOut();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className='flex w-full items-center'>
        <Icon icon='mdi:logout' className='mr-3 h-4 w-4' />
        Sign out
      </button>
    </form>
  );
}
