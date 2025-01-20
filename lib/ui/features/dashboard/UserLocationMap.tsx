import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import React from 'react';

export default function UserLocationMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          User Location
          <div className='flex gap-4 text-sm'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-rose-500' />
              <span>High User</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-rose-200' />
              <span>Low User</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[300px]'>
          {/* <USAMap customize={mapColors} /> */}
        </div>
      </CardContent>
    </Card>
  );
}
