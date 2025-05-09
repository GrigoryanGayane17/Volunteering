import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const Countries = ({ className, name = "country", value, onChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                const sorted = data
                    .map((c) => c.name.common)
                    .sort((a, b) => a.localeCompare(b));
                setCountries(sorted);
            })
            .catch((err) => console.error('Failed to fetch countries:', err));
    }, []);

    return (
        <Form.Group>
            <Form.Select
                name={name}
                value={value}
                onChange={onChange}
                className={className}
                aria-label="Select country"
                style={{color:'gray'}}
            >
                <option value="">Select your country</option>
                {countries.map((country, idx) => (
                    <option key={idx} value={country}>
                        {country}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

export default Countries;
