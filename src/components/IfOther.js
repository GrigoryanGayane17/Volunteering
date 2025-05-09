import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Container, Card, Form, Button, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./Countries";

const IfOther = () => {
    const {t} = useTranslation();
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
        name: /^[\p{L}\s]{2,50}$/u, // accepts any language letters + space
        age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/, // unchanged
        phone: /^\+?[0-9]{7,15}$/, // unchanged
        email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, // unchanged
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // unchanged
        country: /^[\p{L}\s]{2,50}$/u,
        question: /^[\p{L}\d\s.,?!'"-]{5,200}$/u,
        skills: /^[\p{L}\s,]{2,100}$/u
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
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
            <Card className="shadow-lg p-4 w-100" style={{maxWidth: "600px"}}>
                <Card.Body>
                    <div className="d-flex justify-content-end">
                        <button style={{border: 'none', fontSize: '40px', background: 'transparent'}}
                                onClick={() => navigate("/apply")}>
                            &times;
                        </button>
                    </div>
                    <h2 className="text-center my-4">{t("ifOther.h1")}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Control type="text" name="name" placeholder={t("ifOther.Name")}
                                                  value={formData.name} onChange={handleChange}/>
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Control type="text" name="age" placeholder={t("ifOther.Age")}
                                                  value={formData.age} onChange={handleChange}/>
                                    {errors.age && <small className="text-danger">{errors.age}</small>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Control type="email" name="email" placeholder={t("ifOther.Email")}
                                                  value={formData.email} onChange={handleChange}/>
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Countries
                                    className="form-control"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                                {errors.country && <small className="text-danger">{errors.country}</small>}
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'mb-3'} md={12}>
                                <Form.Group>
                                    <Form.Control type="text" name="phone" placeholder={t("ifOther.Phone")}
                                                  value={formData.phone} onChange={handleChange}/>
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={12}>
                                <Form.Group>
                                    <Form.Control type="text" name="question" placeholder={t("ifOther.Question")}
                                                  value={formData.question} onChange={handleChange}/>
                                    {errors.question && <small className="text-danger">{errors.question}</small>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group lassName="mb-3">
                            <Form.Control  type="text" name="skills" placeholder={t("ifOther.Skills")}
                                          value={formData.skills} onChange={handleChange}/>
                            {errors.skills && <small className="text-danger">{errors.skills}</small>}
                        </Form.Group>
                        <div className="d-grid mt-4">
                            <button
                                className={'apply-button'}
                            >
                                {t("ifOther.button")}
                            </button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default IfOther;
