import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es.json";
import pt from "./pt.json";

//Configuracion
i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    pt: { translation: pt },
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
