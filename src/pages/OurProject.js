import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {Modal, Button, Container, Row, Col, Card, ListGroup} from "react-bootstrap";
import Header from "../components/Header";
import '../assets/css/projects.css'


const OurProject = () => {
    const {t} = useTranslation();
    const [moreInfo, setMoreInfo] = useState(false);
    const [ind, setIndex] = useState(0);
    const volunteeringProjects = t("volunteering_projects", { returnObjects: true }) || [];
    console.log(volunteeringProjects)


    const handleMoreInfo = (i) => {
        setMoreInfo(true);
        setIndex(i);
    };

    const handleClose = () => setMoreInfo(false);
    let settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div>
            <Header/>
            <Container className="py-5">
                <h1 className="projects-big-text text-center">Our Opportunities</h1>
                <Row className="g-4">
                    {volunteeringProjects.map((item, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="shadow-sm">
                                <Card.Img style={{height: '350px', objectFit: 'cover'}} variant="top"
                                          src={item.main_image}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.main_description}</Card.Text>
                                    <button className={'apply-button'} onClick={() => handleMoreInfo(index)}>
                                        {t(`volunteering_projects.${index}.button1`)}
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Modal
                    show={moreInfo}
                    onHide={handleClose}
                    centered
                    dialogClassName="custom-modal"
                ><Modal.Header closeButton>
                    <Modal.Title>{volunteeringProjects[ind]?.title}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div className={'slider-container2'}>

                            <Slider style={{width: "100%", maxWidth: "800px", margin: "0 auto"}} {...settings}>
                                {volunteeringProjects[ind]?.images.map((image, i) => (
                                    <div key={i}
                                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <img src={image} className="project-images" alt={`Project ${i}`}
                                             style={{maxWidth: "100%", height: "auto", borderRadius: "10px"}}/>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                        <h4 className="mt-3">Location: {volunteeringProjects[ind]?.location}</h4>
                        <h5>Age Requirement: {volunteeringProjects[ind]?.age_requirement}</h5>
                        <h5 className="mt-3">Requirements:</h5>
                        <ListGroup>
                            {volunteeringProjects[ind]?.requirements.map((req, i) => (
                                <ListGroup.Item key={i}>{t(req)}</ListGroup.Item>
                            ))}
                        </ListGroup>
                        <h5 className="mt-3">Points:</h5>
                        <ListGroup>
                            {volunteeringProjects[ind]?.points.map((point, i) => (
                                <ListGroup.Item key={i}>{t(point)}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/apply" style={{textDecoration: 'none'}} className={'apply-button'}>
                            {t(`volunteering_projects.${ind}.button2`)}
                        </Link>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>

    );
};

export default OurProject;

