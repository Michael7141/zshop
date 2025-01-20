'use client';

import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type DayName =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

interface TimeSlot {
  from: string;
  to: string;
}

interface Day {
  name: DayName;
  label: string;
  isActive: boolean;
  times: TimeSlot[];
}

interface StoreAvailabilityProps {
  value: Array<{
    day: DayName;
    isOpen: boolean;
    from: string;
    to: string;
  }>;
  onChange: (
    days: Array<{
      day: DayName;
      isOpen: boolean;
      from: string;
      to: string;
    }>
  ) => void;
}

export function StoreAvailability({ value, onChange }: StoreAvailabilityProps) {
  const days: Day[] = [
    { name: 'monday', label: 'Monday', isActive: false, times: [] },
    { name: 'tuesday', label: 'Tuesday', isActive: false, times: [] },
    { name: 'wednesday', label: 'Wednesday', isActive: false, times: [] },
    { name: 'thursday', label: 'Thursday', isActive: false, times: [] },
    { name: 'friday', label: 'Friday', isActive: false, times: [] },
    { name: 'saturday', label: 'Saturday', isActive: false, times: [] },
    { name: 'sunday', label: 'Sunday', isActive: false, times: [] },
  ].map((day) => {
    const dayValue = value.find((v) => v.day === day.name);
    return {
      ...day,
      isActive: dayValue?.isOpen || false,
      times:
        dayValue?.from && dayValue?.to
          ? [{ from: dayValue.from, to: dayValue.to }]
          : [],
    };
  });

  const toggleDay = (index: number) => {
    const newDays = [...days];
    newDays[index].isActive = !newDays[index].isActive;
    if (newDays[index].isActive && newDays[index].times.length === 0) {
      newDays[index].times.push({ from: '', to: '' });
    }
    updateForm(newDays);
  };

  const updateTime = (
    dayIndex: number,
    field: 'from' | 'to',
    value: string
  ) => {
    const newDays = [...days];
    if (newDays[dayIndex].times.length === 0) {
      newDays[dayIndex].times.push({ from: '', to: '' });
    }
    newDays[dayIndex].times[0][field] = value;
    updateForm(newDays);
  };

  const updateForm = (updatedDays: Day[]) => {
    onChange(
      updatedDays.map((day) => ({
        day: day.name,
        isOpen: day.isActive,
        from: day.times[0]?.from || '',
        to: day.times[0]?.to || '',
      }))
    );
  };

  return (
    <div className='space-y-4'>
      {days.map((day, dayIndex) => (
        <div key={day.name} className='flex items-center space-x-4'>
          <button
            type='button'
            onClick={() => toggleDay(dayIndex)}
            className={cn(
              'relative w-32 px-4 py-2 text-left rounded-full border transition-colors',
              day.isActive
                ? 'border-[#AD002D] bg-[#AD002D]/5'
                : 'border-gray-200 bg-white'
            )}
          >
            <div className='flex items-center gap-2'>
              <div
                className={cn(
                  'w-4 h-4 rounded-full border-2 transition-colors',
                  day.isActive
                    ? 'border-[#AD002D] bg-[#AD002D]'
                    : 'border-gray-300 bg-white'
                )}
              />
              <span className='text-sm font-medium'>{day.label}</span>
            </div>
          </button>

          <div className='flex items-center flex-1'>
            <div className='w-8 h-[2px] bg-gray-200' />
            <div className='flex items-center gap-2 ml-2'>
              <Input
                type='time'
                value={day.times[0]?.from || ''}
                onChange={(e) => updateTime(dayIndex, 'from', e.target.value)}
                className={cn(
                  'w-32 transition-colors',
                  day.isActive
                    ? 'border-[#AD002D] focus:border-[#AD002D] focus:ring-[#AD002D]'
                    : 'border-gray-200 bg-gray-50'
                )}
                disabled={!day.isActive}
                placeholder='From*'
              />
              <Input
                type='time'
                value={day.times[0]?.to || ''}
                onChange={(e) => updateTime(dayIndex, 'to', e.target.value)}
                className={cn(
                  'w-32 transition-colors',
                  day.isActive
                    ? 'border-[#AD002D] focus:border-[#AD002D] focus:ring-[#AD002D]'
                    : 'border-gray-200 bg-gray-50'
                )}
                disabled={!day.isActive}
                placeholder='To*'
              />
              {day.isActive && (
                <Button
                  type='button'
                  size='icon'
                  className='h-8 w-8 rounded-full bg-[#AD002D] hover:bg-[#AD002D]/90'
                >
                  <Plus className='h-4 w-4 text-white' />
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
