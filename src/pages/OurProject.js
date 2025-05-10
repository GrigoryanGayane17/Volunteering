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
        const images = volunteeringProjects[ind]?.images || [];
        if (images.length === 0) return;
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const images = volunteeringProjects[ind]?.images || [];
        if (images.length === 0) return;
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
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
                            <div onClick={() => prevSlide(ind)}
                                 className={'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'}>
                                <BsChevronCompactLeft size={30}/>
                            </div>
                            <div onClick={() => nextSlide(ind)}
                                 className={'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'}>
                                <BsChevronCompactRight size={30}/>
                            </div>

                            {volunteeringProjects[ind]?.images?.length > 0 &&
                            volunteeringProjects[ind].images[currentIndex]?.link ? (
                                <div
                                    style={{
                                        backgroundImage: `url(${volunteeringProjects[ind].images[currentIndex].link})`,
                                    }}
                                    className="w-full h-[300px] rounded-2xl bg-center bg-cover duration-500"
                                />
                            ) : (
                                <div
                                    className="w-full h-[300px] bg-gray-300 rounded-2xl flex justify-center items-center">
                                    <p>No Image Found</p>
                                </div>
                            )}


                        </div>
                        <h4 className="mt-3 flex">
                           <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                     width="24px"
                                     fill="#000">
                                <path
                                    d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/>
                            </svg>
                           </span>
                            <span>
                                : {volunteeringProjects[ind]?.location}
                            </span>
                        </h4>
                        <h5 className={'flex'}><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                       width="24px" fill="#000"><path
                            d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg></span>
                            <span>: {volunteeringProjects[ind]?.age_requirement}</span>
                        </h5>
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

