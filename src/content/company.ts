import { useTranslation } from "react-i18next";
import * as pt from "./company.pt";
import * as en from "./company.en";

export const useCompany = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? en.company : pt.company;
};

export const useStats = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? en.stats : pt.stats;
};

export const usePillars = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? en.pillars : pt.pillars;
};

export const useProcessSteps = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? en.processSteps : pt.processSteps;
};

export const useTestimonials = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? en.testimonials : pt.testimonials;
};

export const useFaqs = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? en.faqs : pt.faqs;
};
