'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import {
  ownerFormSchema,
  storeFormSchema,
  moreInfoFormSchema,
  type OwnerFormValues,
  type StoreFormValues,
  type MoreInfoFormValues,
} from '@/lib/schemas/business-form';
import ProgressSteps from './components/ProgressSteps';
import { OwnerInfoForm } from '@/lib/ui/features/business/owner-info-form';
import { MoreInfoForm } from '@/lib/ui/features/business/more-info-form';
import { StoreInfoForm } from '@/lib/ui/features/business/store-info-form';

export default function BusinessForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const ownerForm = useForm<OwnerFormValues>({
    resolver: zodResolver(ownerFormSchema),
  });

  const storeForm = useForm<StoreFormValues>({
    resolver: zodResolver(storeFormSchema),
  });

  const moreInfoForm = useForm<MoreInfoFormValues>({
    resolver: zodResolver(moreInfoFormSchema),
  });

  const onSubmit = async (
    ownerData: OwnerFormValues,
    storeData: StoreFormValues,
    moreInfoData: MoreInfoFormValues
  ) => {
    // Handle form submission
    console.log({ ownerData, storeData, moreInfoData });
  };

  return (
    <div>
      <Card>
        <CardContent className='p-6 space-y-6'>
          <ProgressSteps currentStep={currentStep} />
          {currentStep === 1 && (
            <OwnerInfoForm
              form={ownerForm}
              onNext={(data) => {
                console.log('Owner data:', data);
                setCurrentStep(2);
              }}
            />
          )}

          {currentStep === 2 && (
            <StoreInfoForm
              form={storeForm}
              onBackAction={() => setCurrentStep(1)}
              onNextAction={(data) => {
                console.log('Store data:', data);
                setCurrentStep(3);
              }}
            />
          )}

          {currentStep === 3 && (
            <MoreInfoForm
              form={moreInfoForm}
              onBack={() => setCurrentStep(2)}
              onSubmit={(data) => {
                console.log('More info data:', data);
                onSubmit(ownerForm.getValues(), storeForm.getValues(), data);
              }}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
