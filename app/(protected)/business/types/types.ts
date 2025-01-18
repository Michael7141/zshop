export type BusinessFormData = {
  // Owner Info
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  birthdate: string;
  image?: File;
  password: string;

  // Store Info
  storeName: string;
  serviceType: string;
  businessSpeciality: string;
  hasBranches: boolean;
  logo?: File;
  coverImage?: File;

  // More Info
  availability: {
    day: string;
    from: string;
    to: string;
    isOpen: boolean;
  }[];
  documents: {
    license?: File;
    id?: File;
    certifications?: File[];
    other?: File[];
  };
  tags: string[];
};
