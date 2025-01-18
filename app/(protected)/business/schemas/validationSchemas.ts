import * as z from 'zod';

export const ownerSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  gender: z.string().min(1, 'Gender is required'),
  birthdate: z.string().min(1, 'Gender is required'),
  //   birthdate: z.date({
  //     required_error: 'Please select a date',
  //   }),
  image: z.any().optional(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const storeSchema = z.object({
  storeName: z.string().min(2, 'Store name is required'),
  serviceType: z.string().min(1, 'Service type is required'),
  businessSpeciality: z.string().min(1, 'Business speciality is required'),
  hasBranches: z.boolean().default(false),
  logo: z.any().optional(),
  coverImage: z.any().optional(),
});

export const moreInfoSchema = z.object({
  availability: z.array(
    z.object({
      day: z.string(),
      from: z.string(),
      to: z.string(),
      isOpen: z.boolean(),
    })
  ),
  documents: z.object({
    license: z.any().optional(),
    id: z.any().optional(),
    certifications: z.array(z.any()).optional(),
    other: z.array(z.any()).optional(),
  }),
  tags: z.array(z.string()),
});
