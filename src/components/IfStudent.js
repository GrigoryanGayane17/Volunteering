import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./Countries";

const IfStudent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        password: "",
        country: "",
        university: "",
        classCourse: "",
        skills: "",
    });

    const [errors, setErrors] = useState({});

    const nameRegex = /^[\p{L}\s]+$/u;
    const ageRegex = /^(1[89]|[2-9][0-9]|1[0-1][0-9]|120)$/; // age 18–120
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 phone number format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const countryRegex = /^[\p{L}\s]+$/u;
    const universityRegex = /^[\p{L}\d\s]+$/u;
    const classCourseRegex = /^[\p{L}\s]+$/u;
    const skillsRegex = /^[\p{L}\d\s,]+$/u;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name || !nameRegex.test(formData.name)) {
            newErrors.name = "Name is required";
        }

        if (!formData.age || !ageRegex.test(formData.age)) {
            newErrors.age = "Invalid Age";
        }

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid Phone";
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Invalid Email";
        }

        if (!formData.password || !passwordRegex.test(formData.password)) {
            newErrors.password = "Invalid Password";
        }

        if (!formData.country || !countryRegex.test(formData.country)) {
            newErrors.country = "Invalid Country";
        }

        if (!formData.university || !universityRegex.test(formData.university)) {
            newErrors.university = "Invalid University/School";
        }

        if (!formData.classCourse || !classCourseRegex.test(formData.classCourse)) {
            newErrors.classCourse = "Invalid Course/Class";
        }

        if (!formData.skills || !skillsRegex.test(formData.skills)) {
            newErrors.skills = "Skills are required";
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
                    <h2 className="text-center my-4">{t("ifStudent.h1")}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t("ifStudent.Name")}
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
                                        placeholder={t("ifStudent.Age")}
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
                                        placeholder={t("ifStudent.Phone")}
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
                                        placeholder={t("ifStudent.Email")}
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
                                        name="university"
                                        value={formData.university}
                                        onChange={handleChange}
                                        placeholder={t("ifStudent.University/School")}
                                    />
                                    {errors.university && <div className="text-danger">{errors.university}</div>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="classCourse"
                                        value={formData.classCourse}
                                        onChange={handleChange}
                                        placeholder={t("ifStudent.class/Course")}
                                    />
                                    {errors.classCourse && <div className="text-danger">{errors.classCourse}</div>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="skills"
                                        value={formData.skills}
                                        onChange={handleChange}
                                        placeholder={t("ifStudent.Skills")}
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

export default IfStudent;
