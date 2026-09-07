export interface MedicineStockItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  dosage?: string;
  composition?: string;
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: "Available" | "Limited Stock" | "Out of Stock";
  requiresPrescription: boolean;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Storefront" | "Shelves" | "Equipment" | "Products" | "Interior";
  imageUrl: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  quantity: string;
  hasPrescription: "Yes" | "No";
  preferredTime: string;
  notes: string;
}
