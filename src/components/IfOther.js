import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IfOther = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        password: "",
        country: "",
        question: "",
        skills: ""
    });

    const [errors, setErrors] = useState({});

    const regexPatterns = {
        name: /^[A-Za-z\s]{2,50}$/,
        age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
        phone: /^\+?[0-9]{7,15}$/,
        email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        country: /^[A-Za-z\s]{2,50}$/,
        question: /^[A-Za-z0-9\s.,?!'-]{5,200}$/,
        skills: /^[A-Za-z\s,]{2,100}$/
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!regexPatterns[key].test(formData[key])) {
                newErrors[key] = `Invalid ${key}`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("You successfully applied! We will send you an Email.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "600px" }}>
                <Card.Body>
                    <div className="d-flex justify-content-end">
                        <button style={{border:'none',fontSize:'40px',background:'transparent'}} onClick={() => navigate("/apply")}>
                            &times;
                        </button>
                    </div>
                    <h2 className="text-center my-4">{t("ifOther.h1")}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" name="name" placeholder={t("ifOther.Name")} value={formData.name} onChange={handleChange} />
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" name="age" placeholder={t("ifOther.Age")} value={formData.age} onChange={handleChange} />
                                    {errors.age && <small className="text-danger">{errors.age}</small>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" name="phone" placeholder={t("ifOther.Phone")} value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="email" name="email" placeholder={t("ifOther.Email")} value={formData.email} onChange={handleChange} />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="password" name="password" placeholder="Password of email" value={formData.password} onChange={handleChange} />
                                    {errors.password && <small className="text-danger">{errors.password}</small>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" name="country" placeholder={t("ifOther.Country")} value={formData.country} onChange={handleChange} />
                                    {errors.country && <small className="text-danger">{errors.country}</small>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Control type="text" name="question" placeholder={t("ifOther.Question")} value={formData.question} onChange={handleChange} />
                                    {errors.question && <small className="text-danger">{errors.question}</small>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="skills" placeholder={t("ifOther.Skills")} value={formData.skills} onChange={handleChange} />
                            {errors.skills && <small className="text-danger">{errors.skills}</small>}
                        </Form.Group>
                        <div className="d-grid">
                            <button
                                className={'apply-button'}
                            >
                                {t("ifOther.button")}
                            </button>                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default IfOther;
