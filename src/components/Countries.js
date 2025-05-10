import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const Countries = ({ className, name = "country", value, onChange }) => {
    const [countries, setCountries] = useState([]);
    const {t,i18n} = useTranslation();

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                const lang = i18n.language; // Get selected language
                console.log(lang)
                const translated = data.map((country) => {
                    const name =
                        lang === 'am'
                            ? country.translations?.hye?.common
                            : lang === 'ru'
                                ? country.translations?.rus?.common
                                : country.name.common;
                    return { value: country.name.common, label: name || country.name.common };
                });

                const sorted = translated.sort((a, b) => a.label.localeCompare(b.label));
                setCountries(sorted);
            })
            .catch((err) => console.error('Failed to fetch countries:', err));
    }, [i18n.language]);


    return (
        <Form.Select
            name={name}
            value={value}
            onChange={onChange}
            className={className}
            aria-label="Select country"
            style={{ color: 'gray' }}
        >
            <option value="">{t("ifOther.Country")}</option>
            {countries.map((country, idx) => (
                <option key={idx} value={country.value}>
                    {country.label}
                </option>
            ))}
        </Form.Select>

    );
};

export default Countries;
