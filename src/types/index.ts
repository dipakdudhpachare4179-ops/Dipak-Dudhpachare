export type PropertyType = 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'Penthouse';

export interface Property {
  id: string;
  title: string;
  location: string;
  area: string;
  type: PropertyType;
  configuration: string;
  price: string;
  priceNumeric: number; // In lakhs for sorting/filtering
  carpetArea: string;
  isDemo?: boolean;
  featured?: boolean;
  image: string;
  gallery: string[];
  highlights: string[];
  description: string;
  reraNumber?: string;
  possessionDate: string;
  amenities: string[];
  connectivity: {
    landmark: string;
    distance: string;
  }[];
}

export interface LocationGuide {
  id: string;
  name: string;
  tagline: string;
  image: string;
  summary: string;
  existingInfrastructure: string[];
  underDevelopment: string[];
  keyPropertyTypes: string[];
  priceRange: string;
  connectivityHighlights: string[];
  idealFor: string;
  advisorTake: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
  checklist?: string[];
  warningNote?: string;
}

export interface VideoContent {
  id: string;
  title: string;
  topic: string;
  duration: string;
  views: string;
  hook: string;
  summary: string;
  thumbnail: string;
  instagramUrl: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  location: string;
  propertyPurchased: string;
  quote: string;
  verifiedYear: string;
}

export interface ConsultationLead {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  preferredLocation: string;
  budgetRange: string;
  message: string;
  createdAt: string;
}
