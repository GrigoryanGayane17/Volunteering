import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Modal, Container, Row, Col, Card, ListGroup} from "react-bootstrap";
import Header from "../components/Header";
import '../assets/css/projects.css'
import Footer from "../components/Footer";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";


const OurProject = () => {
    const {t} = useTranslation();
    const [moreInfo, setMoreInfo] = useState(false);
    const [ind, setIndex] = useState(0);
    const [text, setText] = useState('')
    const [showButton, setShowButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)

    const volunteeringProjects = t("volunteering_projects", {returnObjects: true}) || [];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    })


    const scrollBack = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    const handleMoreInfo = (i) => {
        setMoreInfo(true);
        setIndex(i);
    };

    const handleClose = () => setMoreInfo(false);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? volunteeringProjects[ind]?.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    return (
        <div>
            <Header/>
            <Container className="py-5">
                <h1 data-aos="fade-up" className="projects-big-text text-center">{t(`volunteeringH1`)}</h1>
                <Row className="g-4">
                    {volunteeringProjects.map((item, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="shadow-sm">
                                <Card.Img style={{height: '350px', objectFit: 'cover'}} variant="top"
                                          src={item.main_image}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {(() => {
                                            const desc = item.main_description;
                                            if (desc.length > 130) {
                                                const trimmed = desc.slice(0, desc.slice(0, 131).lastIndexOf(" "));
                                                return (
                                                    <>
                                                        {trimmed}
                                                        <span onClick={() => handleMoreInfo(index)} style={{
                                                            color: "gray",
                                                            cursor: "pointer"
                                                        }}>...Read More</span>
                                                    </>
                                                );
                                            } else {
                                                return desc;
                                            }
                                        })()}
                                    </Card.Text>
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
                        <div className={'w-full relative group'}>
                            <div onClick={()=>prevSlide(ind)}
                                className={'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'}>
                                <BsChevronCompactLeft size={30}/>
                            </div>
                            <div
                                className={'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'}>
                                <BsChevronCompactRight size={30}/>
                            </div>
                            <div>
                                <div
                                    style={{backgroundImage: `url(${volunteeringProjects[ind]?.images[currentIndex].link})`}}
                                    className={'w-full h-[300px] rounded-2xl bg-center bg-cover duration-500'}
                                    key={ind}>
                                </div>

                            </div>


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

                {showButton && (
                    <button onClick={() => scrollBack()}
                            style={{
                                position: "fixed",
                                bottom: "20px",
                                right: "20px",
                                padding: "10px",
                                backgroundColor: "#1f2544",
                                color: "white",
                                border: '2px solid #f2f2f2',
                                borderRadius: '10px'
                            }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                             fill="#f2f2f2">
                            <path
                                d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
                        </svg>
                    </button>
                )}
            </Container>
            <Footer/>
        </div>

    );
};

export default OurProject;

