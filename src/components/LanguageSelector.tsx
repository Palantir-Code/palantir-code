import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-muted/50 p-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
            i18n.language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
