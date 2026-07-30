import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "pt" : "en";
    
    // Change language state
    i18n.changeLanguage(nextLang);
    document.documentElement.lang = nextLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-9 items-center justify-center rounded-lg border border-input bg-background px-3 text-sm font-medium hover:bg-slate-100 transition-colors"
      aria-label="Mudar idioma"
    >
      {i18n.language === "en" ? "PT" : "EN"}
    </button>
  );
}
