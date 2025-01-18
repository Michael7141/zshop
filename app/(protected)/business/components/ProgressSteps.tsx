import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps = ({ currentStep }: ProgressStepsProps) => {
  const steps = [
    {
      number: 1,
      title: 'Owner Info.',
      subtitle: 'About the owner info',
    },
    {
      number: 2,
      title: 'Store info.',
      subtitle: 'About the Store',
    },
    {
      number: 3,
      title: 'More info.',
      subtitle: 'More information',
    },
  ];

  const StepCircle = ({
    step,
    currentStep,
  }: {
    step: number;
    currentStep: number;
  }) => {
    if (currentStep > step) {
      return (
        <div className='w-8 h-8 rounded-full bg-success flex items-center justify-center'>
          <Check className='h-5 w-5 text-white stroke-[3]' />
        </div>
      );
    }

    if (currentStep === step) {
      return (
        <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium'>
          {step}
        </div>
      );
    }

    return (
      <div className='w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-medium'>
        {step}
      </div>
    );
  };

  const ConnectingLine = ({ isActive }: { isActive: boolean }) => (
    <div className='flex-1 h-[2px] mx-4'>
      <div
        className={cn(
          'h-full transition-all duration-300',
          isActive ? 'bg-success' : 'bg-gray-200'
        )}
      />
    </div>
  );

  return (
    <div className='w-full flex items-center justify-between px-6 py-4'>
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className='flex items-center gap-3'>
            <StepCircle step={step.number} currentStep={currentStep} />
            <div className='flex flex-col'>
              <span
                className={cn(
                  'text-sm font-medium',
                  currentStep === step.number
                    ? 'text-gray-900'
                    : 'text-gray-600'
                )}
              >
                {step.title}
              </span>
              <span className='text-xs text-gray-500'>{step.subtitle}</span>
            </div>
          </div>
          {index < steps.length - 1 && (
            <ConnectingLine isActive={currentStep > step.number} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressSteps;
