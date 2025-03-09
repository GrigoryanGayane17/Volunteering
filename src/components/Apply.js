
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Apply = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (selectedOption) {
            navigate(`/${selectedOption}`);
        } else {
            alert("Please select an option");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center  vh-100">
            <Card className="shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>

                <button
                    style={{border:'none',background:'transparent'}}
                    variant="primary"
                    className="position-absolute top-0 end-0 m-2 fs-1 :hover-border-gray-200"
                    onClick={() => navigate('/project')}
                >
                    &times;
                </button>
                <Card.Body>
                    <h2 className="text-center mb-4">{t("apply.h1")}</h2>
                    <Form>
                        <Form.Group className="mb-3 d-flex justify-content-center">
                            <div className="d-flex align-items-center gap-2 m-4">
                                <Form.Check
                                    type="radio"
                                    id="worker"
                                    name="role"
                                    value="worker"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    checked={selectedOption === "worker"}
                                />
                                <Form.Label htmlFor="worker" className="mb-0 fs-4">{t("apply.Worker")}</Form.Label>
                            </div>

                            <div className="d-flex align-items-center gap-2 m-4">
                                <Form.Check
                                    type="radio"
                                    id="student"
                                    name="role"
                                    value="student"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    checked={selectedOption === "student"}
                                />
                                <Form.Label htmlFor="student" className="mb-0 fs-4">{t("apply.Student")}</Form.Label>
                            </div>

                            <div className="d-flex align-items-center gap-2 m-4">
                                <Form.Check
                                    type="radio"
                                    id="other"
                                    name="role"
                                    value="other"
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    checked={selectedOption === "other"}
                                />
                                <Form.Label htmlFor="other" className="mb-0 fs-4">{t("apply.Other")}</Form.Label>
                            </div>
                        </Form.Group>


                        <div className="d-grid">
                            <button className={'apply-button'} variant="primary" onClick={handleButtonClick}>
                                {t("apply.button")}
                            </button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Apply;



