import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IfStudent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "600px" }}>
                <Card.Body>
                    <div className="d-flex justify-content-end">
                        <button style={{border:'none',fontSize:'40px',background:'transparent'}} onClick={() => navigate("/apply")}>
                            &times;
                        </button>
                    </div>
                    <h2 className="text-center my-4">{t("ifStudent.h1")}</h2>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder={t("ifStudent.Name")} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder={t("ifStudent.Age")} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder={t("ifStudent.Phone")} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="email" placeholder={t("ifStudent.Email")} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="password" placeholder={t("ifStudent.EmailPassword")} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder={t("ifStudent.Country")} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder={t("ifStudent.University/School")} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder={t("ifStudent.class/Course")} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder={t("ifStudent.Skills")} />
                        </Form.Group>
                        <div className="d-grid">
                            <button
                                className={'apply-button'}
                                onClick={() => alert("You successfully applied! We will send you an Email.")}
                            >
                                {t("ifStudent.button")}
                            </button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default IfStudent;
