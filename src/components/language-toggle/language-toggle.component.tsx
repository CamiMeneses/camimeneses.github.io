import "./language-toggle.style.scss";
import { useTranslation } from "i18n";

const LanguageToggle = () => {
  const { t, toggleLanguage } = useTranslation();

  return (
    <button className="language-toggle-fixed" onClick={toggleLanguage}>
      {t.language.switchTo}
    </button>
  );
};

export default LanguageToggle;
