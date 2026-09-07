export interface SiteConfig {
  businessName: string;
  legalName: string;
  category: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsapp: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  geo: {
    lat: number;
    lng: number;
    mapsEmbedUrl: string;
    mapsDirectionsUrl: string;
  };
  workingHours: {
    weekdays: string;
    sunday: string;
    emergency: string;
  };
  establishedYear: number;
  drugLicenseNo: string;
  gstNo: string;
  socials: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
    googleBusiness?: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const BUSINESS_CONFIG: SiteConfig = {
  businessName: "Galaxy Medical",
  legalName: "Galaxy Medical Store & Healthcare Supplies",
  category: "Retail Pharmacy & Medical Equipment",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  phone: "+919097503446",
  displayPhone: "+91 90975 03446",
  whatsappNumber: "9097503446",
  displayWhatsapp: "+91 90975 03446",
  email: "contact@galaxymedical.in",
  address: {
    street: "Old GT Road",
    landmark: "Near Ramesh Chowk / Overbridge",
    city: "Aurangabad",
    state: "Bihar",
    pincode: "824101",
    full: "Old GT Rd, Aurangabad, Bihar 824101",
  },
  geo: {
    lat: 24.7538,
    lng: 84.3736,
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14500.512683050965!2d84.3638!3d24.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cdb2c659e9849%3A0x6b44a4b4ee9542a!2sOld%20GT%20Rd%2C%20Aurangabad%2C%20Bihar%20824101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Galaxy+Medical+Old+GT+Rd+Aurangabad+Bihar+824101",
  },
  workingHours: {
    weekdays: "8:00 AM - 10:00 PM (Monday to Saturday)",
    sunday: "8:30 AM - 9:30 PM (Sunday)",
    emergency: "24x7 WhatsApp Emergency Medicine Request",
  },
  establishedYear: 2012,
  drugLicenseNo: "BR-AUR-104928/20B/21B",
  gstNo: "10ABUPG9081K1Z3",
  socials: {
    whatsapp: "https://wa.me/919097503446",
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=Galaxy+Medical+Old+GT+Rd+Aurangabad+Bihar+824101",
    facebook: "https://facebook.com/galaxymedicalaurangabad",
    instagram: "https://instagram.com/galaxymedical_aurangabad",
  },
  pwa: {
    enabled: true,
    appName: "Galaxy Medical Pharmacy",
    shortName: "Galaxy Med",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone",
  },
};

export const SITE_CONFIG = BUSINESS_CONFIG;
