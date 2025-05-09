import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./Countries";

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
    const nameRegex = /^[\p{L}\s]+$/u;
    const ageRegex = /^(1[89]|[2-9][0-9]|1[0-1][0-9]|120)$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const countryRegex = /^[\p{L}\s]+$/u;
    const companyRegex = /^[\p{L}\d\s]+$/u;
    const professionRegex = /^[\p{L}\s]+$/u;
    const skillsRegex = /^[\p{L}\d\s,]+$/u;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name || !nameRegex.test(formData.name)) {
            newErrors.name = " Name is required ";
        }

        if (!formData.age || !ageRegex.test(formData.age)) {
            newErrors.age = "Invalid Age";
        }

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid Phone";
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Invalid Email ";
        }

        if (!formData.password || !passwordRegex.test(formData.password)) {
            newErrors.password = "Invalid Password ";
        }

        if (!formData.country || !countryRegex.test(formData.country)) {
            newErrors.country = "Invalid Country ";
        }

        if (!formData.workCompany || !companyRegex.test(formData.workCompany)) {
            newErrors.workCompany = "Invalid Work Company ";
        }

        if (!formData.profession || !professionRegex.test(formData.profession)) {
            newErrors.profession = "Invalid Profession ";
        }

        if (!formData.skills || !skillsRegex.test(formData.skills)) {
            newErrors.skills = "Skills are required ";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       const isValid = validateForm();
        if (isValid) {
            alert("You successfully applied! We will send you an Email.");
        } else {
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
                                <Countries
                                    className="form-control"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                                {errors.country && <small className="text-danger">{errors.country}</small>}
                            </Col>
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
                        </Row>
                        <Row className="mb-3">
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
                            <Col md={6}>
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
                            </Col>
                        </Row>
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
