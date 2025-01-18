'use client';
import { useState } from 'react';
import React from 'react';
import { OwnerInfoForm } from './OwnerInfoForm';
import { StoreInfoForm } from './StoreInfoForm';
import { MoreInfoForm } from './MoreInfoForm';
import { BusinessFormData } from '../types/types';
import ProgressSteps from './ProgressSteps';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<BusinessFormData>>({});

  const handleNext = (stepData: Partial<BusinessFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (finalData: Partial<BusinessFormData>) => {
    const completeFormData = { ...formData, ...finalData };
    console.log('Final form data:', completeFormData);
    // Handle form submission
  };

  return (
    <div className='w-full max-w-7xl mx-auto p-6'>
      <ProgressSteps currentStep={currentStep} />

      {currentStep === 1 && (
        <OwnerInfoForm onNext={handleNext} defaultValues={formData} />
      )}

      {currentStep === 2 && (
        <StoreInfoForm
          onNext={handleNext}
          onBack={handleBack}
          defaultValues={formData}
        />
      )}

      {currentStep === 3 && (
        <MoreInfoForm
          onSubmit={handleSubmit}
          onBack={handleBack}
          defaultValues={formData}
        />
      )}
    </div>
  );
}
