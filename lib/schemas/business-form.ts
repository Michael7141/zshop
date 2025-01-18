import * as z from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const timeRegex = new RegExp(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);

export const ownerFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().regex(phoneRegex, 'Invalid phone number'),
  gender: z.enum(['male', 'female', 'other']),
  birthdate: z.string().min(1, 'Birthdate is required'),
  image: z.any().optional(),
});

export const storeFormSchema = z.object({
  storeName: z.string().min(2, 'Store name must be at least 2 characters'),
  serviceType: z.string().min(1, 'Service type is required'),
  businessSpeciality: z.string().min(1, 'Business speciality is required'),
  logo: z.any().optional(),
  coverImage: z.any().optional(),
  hasBranches: z.boolean().default(false),
  branches: z
    .array(
      z.object({
        name: z.string().min(2, 'Branch name must be at least 2 characters'),
        country: z.string().min(1, 'Country is required'),
        city: z.string().min(1, 'City is required'),
        addressLine1: z.string().min(1, 'Address line 1 is required'),
        addressLine2: z.string().optional(),
        phoneNumber: z.string().regex(phoneRegex, 'Invalid phone number'),
        email: z.string().email('Invalid email address'),
        manager: z.object({
          firstName: z
            .string()
            .min(2, 'First name must be at least 2 characters'),
          lastName: z
            .string()
            .min(2, 'Last name must be at least 2 characters'),
          phoneNumber: z.string().regex(phoneRegex, 'Invalid phone number'),
          email: z.string().email('Invalid email address'),
          gender: z.enum(['male', 'female', 'other']),
          birthdate: z.string().min(1, 'Birthdate is required'),
          image: z.any().optional(),
        }),
      })
    )
    .optional(),
});

export const moreInfoFormSchema = z.object({
  availability: z.array(
    z.object({
      day: z.enum([
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ]),
      isOpen: z.boolean(),
      from: z.string().regex(timeRegex, 'Invalid time format'),
      to: z.string().regex(timeRegex, 'Invalid time format'),
    })
  ),
  documents: z.object({
    license: z.array(z.any()),
    id: z.array(z.any()),
    certifications: z.array(z.any()),
    other: z.array(z.any()),
  }),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

export type OwnerFormValues = z.infer<typeof ownerFormSchema>;
export type StoreFormValues = z.infer<typeof storeFormSchema>;
export type MoreInfoFormValues = z.infer<typeof moreInfoFormSchema>;
