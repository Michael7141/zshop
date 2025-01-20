import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  name: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label='Progress'>
      <ol role='list' className='flex items-center justify-between'>
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={cn(
              stepIdx !== steps.length - 1 ? 'w-full' : '',
              'relative'
            )}
          >
            {step.id < currentStep ? (
              <div className='group flex items-center'>
                <span className='flex items-center justify-center w-10 h-10 bg-green-600 rounded-full'>
                  <Check className='w-6 h-6 text-white' aria-hidden='true' />
                </span>
                <span className='ml-4 text-sm font-medium text-gray-900'>
                  {step.name}
                </span>
              </div>
            ) : step.id === currentStep ? (
              <div className='flex items-center' aria-current='step'>
                <span className='flex items-center justify-center w-10 h-10 border-2 border-[#AD002D] rounded-full'>
                  <span className='text-[#AD002D]'>{step.id}</span>
                </span>
                <span className='ml-4 text-sm font-medium text-[#AD002D]'>
                  {step.name}
                </span>
              </div>
            ) : (
              <div className='group flex items-center'>
                <span className='flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full'>
                  <span className='text-gray-500'>{step.id}</span>
                </span>
                <span className='ml-4 text-sm font-medium text-gray-500'>
                  {step.name}
                </span>
              </div>
            )}

            {stepIdx !== steps.length - 1 && (
              <div
                className={cn(
                  'absolute top-5 w-full',
                  step.id < currentStep
                    ? 'border-t-2 border-green-600'
                    : 'border-t-2 border-gray-300'
                )}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
