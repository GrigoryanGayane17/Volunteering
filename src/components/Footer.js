import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

function Footer(props) {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        message: "",
        checkbox: false,
    });

    const [errors, setErrors] = useState({
        email: "",
        name: "",
        phone: "",
        message: "",
        checkbox: "",
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[+]?(\d{1,4})?[-.\s]?(\(?\d{1,3}\)?)[-\.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const messageRegex = /^.{1,500}$/;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleCheckboxChange = (e) => {
        const {checked} = e.target;
        setFormData({...formData, checkbox: checked});
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = "Please enter a valid email.";
        }

        if (!formData.name || !nameRegex.test(formData.name)) {
            formErrors.name = "Name should contain only letters and spaces.";
        }

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            formErrors.phone = "Please enter a valid phone number.";
        }

        if (!formData.message || !messageRegex.test(formData.message)) {
            formErrors.message = "Message should be between 1 and 500 characters.";
        }

        if (!formData.checkbox) {
            formErrors.checkbox = "You must agree to the terms.";
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fill out the form correctly.");
        }
    };
    return (
        <div className={'footer-body'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div style={{padding: '30px'}} className={'col-lg-6 col-md-6 col-sm-12 section8-div1'}>
                        <h1 data-aos="fade-up" className={'footer-contact-us'}>{t('footer.sectionName')}</h1>
                        <div style={{fontSize: '20px'}}>
                            <div className={'footer-inputs-div1'}>
                                <div style={{width: '100%'}}>
                                    <p style={{marginBottom: '0'}}>{t('footer.form.email')}</p>
                                    <input
                                        className={'section8-input1'}
                                        placeholder={t('footer.form.emailPlaceholder')}
                                        type={'text'}
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div style={{width: '100%'}}>
                                    <p style={{marginBottom: '0'}}>{t('footer.form.name')}</p>
                                    <input
                                        className={'footer-input1'}
                                        placeholder={t('footer.form.namePlaceholder')}
                                        type={'text'}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                            </div>
                            <div style={{margin: '20px'}}>
                                <p style={{marginBottom: '0'}}>{t('footer.form.phone')}</p>
                                <input
                                    className={'footer-input2'}
                                    placeholder={t('footer.form.phonePlaceholder')}
                                    type={'text'}
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <div className="text-danger">{errors.phone}</div>}
                            </div>

                            <div style={{margin: '20px'}}>
                                <p style={{marginBottom: '0'}}>{t('footer.form.message')}</p>
                                <textarea
                                    className={'footer-input2 textArea'}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <div className="text-danger">{errors.message}</div>}
                            </div>
                            <div>
                                <input
                                    type={'checkbox'}
                                    name="checkbox"
                                    checked={formData.checkbox}
                                    onChange={handleCheckboxChange}
                                />
                                <span style={{marginLeft: '20px', fontSize: '20px'}}>
                {t('footer.form.checkbox')}
                    </span>
                                {errors.checkbox && <div className="text-danger">{errors.checkbox}</div>}
                            </div>
                            <button className={'footer-btn'} onClick={handleSubmit}>
                                {t('footer.form.button')}
                            </button>
                        </div>
                    </div>


                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 30px'}}
                         className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div>
                            <div data-aos="fade-up" style={{display: 'flex', justifyContent: 'center'}}>
                                <img className={'footer-icon'}
                                     src={'https://cdn-icons-png.freepik.com/512/12643/12643041.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                            </div>
                            <h1 data-aos="fade-up" className={'footer-numbers'}>
                                <a href={'tel:091992691'}>
                                    <svg className={'footer-icons'} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 -960 960 960"
                                         fill="#1f2544">
                                        <path
                                            d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                    </svg>
                                    1 (234) 567-891</a>
                            </h1>
                            <h1 data-aos="fade-up" className={'footer-numbers'}>
                                <a href={'https://maps.app.goo.gl/hhumu2ycQwhD79bt6'}>
                                    <svg className={'footer-icons'} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 -960 960 960"
                                         fill="#1f2544">
                                        <path
                                            d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/>
                                    </svg>
                                    Hanrapetutyan 37</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;