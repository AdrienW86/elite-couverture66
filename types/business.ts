export interface ServiceCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactResponse = { message: string };
