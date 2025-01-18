import React from 'react';
import { Check } from 'lucide-react';

interface Props {
  currentStep: number;
}

export default function ProgressSteps({ currentStep }: Props) {
  return (
    <div className='relative flex items-center justify-between w-full mb-8'>
      {/* Step 1 */}
      <div className='flex items-center gap-2'>
        {currentStep > 1 ? (
          <div className='w-8 h-8 rounded-full bg-[#00AD06] flex items-center justify-center'>
            <Check className='h-5 w-5 text-white bg-[#00AD06]' />
          </div>
        ) : (
          <div className='w-8 h-8 rounded-full bg-[#00AD06] text-white flex items-center justify-center'>
            1
          </div>
        )}
        <div className='flex flex-col'>
          <span className='text-sm font-medium'>Owner Info.</span>
          <span className='text-xs text-gray-500'>About the owner info</span>
        </div>
      </div>

      {/* Connector Line 1 */}
      <div className='flex-1 h-[2px] bg-gray-200 mx-4'>
        {currentStep > 1 && (
          <div className='h-full bg-primary' style={{ width: '100%' }} />
        )}
      </div>

      {/* Step 2 */}
      <div className='flex items-center gap-2'>
        {currentStep > 2 ? (
          <div className='w-8 h-8 rounded-full bg-foreground flex items-center justify-center'>
            <Check className='h-5 w-5 text-white' />
          </div>
        ) : currentStep === 2 ? (
          <div className='w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center'>
            2
          </div>
        ) : (
          <div className='w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center'>
            2
          </div>
        )}
        <div className='flex flex-col'>
          <span className='text-sm font-medium'>Store info.</span>
          <span className='text-xs text-gray-500'>About the Store</span>
        </div>
      </div>

      {/* Connector Line 2 */}
      <div className='flex-1 h-[2px] bg-gray-200 mx-4'>
        {currentStep > 2 && (
          <div className='h-full bg-green-500' style={{ width: '100%' }} />
        )}
      </div>

      {/* Step 3 */}
      <div className='flex items-center gap-2'>
        {currentStep > 3 ? (
          <div className='w-8 h-8 rounded-full bg-green-500 flex items-center justify-center'>
            <Check className='h-5 w-5 text-white' />
          </div>
        ) : currentStep === 3 ? (
          <div className='w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center'>
            3
          </div>
        ) : (
          <div className='w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center'>
            3
          </div>
        )}
        <div className='flex flex-col'>
          <span className='text-sm font-medium'>More info.</span>
          <span className='text-xs text-gray-500'>More information</span>
        </div>
      </div>
    </div>
    // <div className='flex justify-between mb-8'>
    //   {[1, 2, 3].map((num) => (
    //     <div
    //       key={num}
    //       className={`flex items-center gap-2 ${
    //         currentStep >= num ? 'text-success' : 'text-success'
    //       }`}
    //     >
    //       <div
    //         className={`rounded-full w-8 h-8 flex items-center justify-center border-2
    //           ${
    //             currentStep >= num
    //               ? 'border-success bg-primary text-white'
    //               : 'border-success'
    //           }`}
    //       >
    //         {num}
    //       </div>
    //       {/* Connector Line 1 */}
    //       <div className='flex-1 h-[2px] bg-success mx-4'>
    //         {currentStep > num && (
    //           <div className='h-full bg-success' style={{ width: '100%' }} />
    //         )}
    //       </div>
    //       <div className='ml-2'>
    //         {num === 1 && 'Owner Info'}
    //         {num === 2 && 'Store Info'}
    //         {num === 3 && 'More Info'}
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
