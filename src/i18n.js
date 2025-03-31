
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend) // Use the HTTP backend to load translations
    .use(initReactI18next) // Use the React bindings for i18next
    .init({
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language in case of an issue
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        backend: {
            loadPath: '/Volunteering/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
