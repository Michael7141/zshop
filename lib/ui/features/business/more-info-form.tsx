import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { MoreInfoFormValues } from '@/lib/schemas/business-form';
import FormInfo from '../../form/FormInfo';

interface MoreInfoFormProps {
  form: UseFormReturn<MoreInfoFormValues>;
  onSubmit: (data: MoreInfoFormValues) => void;
  onBack: () => void;
}

export function MoreInfoForm({ form, onSubmit, onBack }: MoreInfoFormProps) {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ] as const;

  const handleSubmit = (data: MoreInfoFormValues) => {
    // Filter out closed days and empty time slots
    const filteredAvailability = data.availability.filter(
      (day) => day.isOpen && day.from && day.to
    );

    // Update the form data with filtered availability
    const updatedData = {
      ...data,
      availability: filteredAvailability,
    };

    onSubmit(updatedData);
  };

  return (
    <div className='flex w-full flex-1'>
      <FormInfo
        title='Additional Information'
        description='Add more business information from here'
      />
      <div className='md:w-2/3 w-full p-6'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-4'
          >
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Store Availability</h3>
              {days.map((day, index) => (
                <div key={day} className='flex items-center gap-4'>
                  <FormField
                    control={form.control}
                    name={`availability.${index}.isOpen`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              if (!checked) {
                                form.setValue(`availability.${index}.from`, '');
                                form.setValue(`availability.${index}.to`, '');
                              }
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className='grid grid-cols-3 gap-4 flex-1'>
                    <span className='capitalize'>{day}</span>
                    <FormField
                      control={form.control}
                      name={`availability.${index}.from`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type='time'
                              {...field}
                              disabled={
                                !form.watch(`availability.${index}.isOpen`)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`availability.${index}.to`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type='time'
                              {...field}
                              disabled={
                                !form.watch(`availability.${index}.isOpen`)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
            <FormField
              control={form.control}
              name='tags'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter tags (comma-separated)'
                      {...field}
                      onChange={(e) => {
                        const tags = e.target.value
                          .split(',')
                          .map((tag) => tag.trim())
                          .filter(Boolean);
                        field.onChange(tags);
                      }}
                      value={field.value?.join(', ')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-between'>
              <Button type='button' variant='outline' onClick={onBack}>
                Back
              </Button>
              <Button type='submit'>Register Business</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
