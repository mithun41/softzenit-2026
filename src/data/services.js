import { coreEngineeringServices } from "./services/core-engineering";
import { aiServices } from "./services/ai-solutions";
import { erpGeneralServices } from "./services/erp-general";
import { erpHealthEducationServices } from "./services/erp-health-education";
import { infrastructureMarketingServices } from "./services/infrastructure-marketing";

// Combine all 30 services into a single array
export const allServices = [
  ...coreEngineeringServices,
  ...aiServices,
  ...erpGeneralServices,
  ...erpHealthEducationServices,
  ...infrastructureMarketingServices
];

// Helper to get a single service by slug
export const getServiceBySlug = (slug) => {
  return allServices.find(service => service.slug === slug);
};

// Helper to get categories for filtering on the main services page
export const getServiceCategories = () => {
  const categories = new Set(allServices.map(s => s.category));
  return Array.from(categories);
};
