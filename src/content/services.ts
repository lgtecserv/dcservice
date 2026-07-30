import { useTranslation } from "react-i18next";
import { services as ptServices, type Service as PTService } from "./services.pt";
import { services as enServices } from "./services.en";

export type Service = PTService;

export const useServices = () => {
  const { i18n } = useTranslation();
  return (i18n.language === "en" ? enServices : ptServices) as Service[];
};

export const getService = (slug: string) => {
  return ptServices.find((s) => s.slug === slug);
};

export const services = ptServices;
