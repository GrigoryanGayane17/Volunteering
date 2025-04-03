import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IfWorker = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Form data state
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        password: "",
        country: "",
        workCompany: "",
        profession: "",
        skills: "",
    });

    // Error state
    const [errors, setErrors] = useState({});

    // Regex Patterns for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const ageRegex = /^(1[89]|[2-9][0-9]|1[0-1][0-9]|120)$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const countryRegex = /^[A-Za-z\s]+$/;
    const companyRegex = /^[A-Za-z0-9\s]+$/;
    const professionRegex = /^[A-Za-z\s]+$/;
    const skillsRegex = /^[A-Za-z0-9\s,]+$/;

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate the form inputs
    const validateForm = () => {
        const newErrors = {};

        // Validate name
        if (!formData.name || !nameRegex.test(formData.name)) {
            newErrors.name = " Name is required ";
        }

        // Validate age
        if (!formData.age || !ageRegex.test(formData.age)) {
            newErrors.age = "Invalid Age";
        }

        // Validate phone
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid Phone";
        }

        // Validate email
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Invalid Email ";
        }

        // Validate password
        if (!formData.password || !passwordRegex.test(formData.password)) {
            newErrors.password = "Invalid Password ";
        }

        // Validate country
        if (!formData.country || !countryRegex.test(formData.country)) {
            newErrors.country = "Invalid Country ";
        }

        // Validate work company
        if (!formData.workCompany || !companyRegex.test(formData.workCompany)) {
            newErrors.workCompany = "Invalid Work Company ";
        }

        // Validate profession
        if (!formData.profession || !professionRegex.test(formData.profession)) {
            newErrors.profession = "Invalid Profession ";
        }

        // Validate skills
        if (!formData.skills || !skillsRegex.test(formData.skills)) {
            newErrors.skills = "Skills are required ";
        }

        // If there are errors, set them to state and return false
        setErrors(newErrors);

        // Return true only if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate before submission
        const isValid = validateForm();

        // If the form is valid, show success message
        if (isValid) {
            alert("You successfully applied! We will send you an Email.");
        } else {
            // If there are errors, prevent form submission and show error message
            alert("Please fill out the form correctly.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "600px" }}>
                <Card.Body>
                    <div className="d-flex justify-content-end">
                        <button
                            style={{ border: 'none', fontSize: '40px', background: 'transparent' }}
                            onClick={() => navigate("/apply")}
                        >
                            &times;
                        </button>
                    </div>
                    <h2 className="text-center my-4">{t("ifWorker.h1")}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.Name")}
                                    />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.Age")}
                                    />
                                    {errors.age && <div className="text-danger">{errors.age}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.Phone")}
                                    />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.Email")}
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.EmailPassword")}
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.Country")}
                                    />
                                    {errors.country && <div className="text-danger">{errors.country}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="workCompany"
                                        value={formData.workCompany}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.WorkCompany")}
                                    />
                                    {errors.workCompany && <div className="text-danger">{errors.workCompany}</div>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="profession"
                                        value={formData.profession}
                                        onChange={handleChange}
                                        placeholder={t("ifWorker.Profession")}
                                    />
                                    {errors.profession && <div className="text-danger">{errors.profession}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="skills"
                                required
                                value={formData.skills}
                                onChange={handleChange}
                                placeholder={t("ifWorker.Skills")}
                            />
                            {errors.skills && <div className="text-danger">{errors.skills}</div>}
                        </Form.Group>
                        <div className="d-grid">

                            <button
                                className={'apply-button'}
                            >
                                {t("ifWorker.button")}
                            </button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default IfWorker;
