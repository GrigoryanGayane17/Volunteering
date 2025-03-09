// import React, {use, useState} from 'react';
// import Header from "../components/Header";
// import {useTranslation} from "react-i18next";
// import i18next from "i18next";
// import '../assets/css/projects.css'
// import Slider from "react-slick";
// import Apply from "../components/Apply";
// import {Link} from "react-router-dom";


// function OurProject(props) {
//     const {t, i18n} = useTranslation();
//     const [moreInfo, setMoreInfo] = useState(false)
//     const [ind, setIndex] = useState(0)
//     const [apply, setApply] = useState(false)
//     const volunteeringProjects = i18next.t('volunteering_projects', {returnObjects: true});
//
//     const handleMoreInfo = (i) => {
//         setMoreInfo(!moreInfo)
//         setIndex(i)
//     }
//
//
//     let settings = {
//         dots: false,
//         fade: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         waitForAnimate: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//
//     if (moreInfo) {
//         document.body.classList.add('active-modal')
//     } else {
//         document.body.classList.remove('active-modal')
//     }
//
//
//     return (
//         <div style={{position: 'relative'}}>
//             <Header/>
//             <div className={'container'}>
//                 <div className={'row'}>
//                     <div style={{padding: '50px'}} className={'col-12'}>
//                         <h2 style={{textAlign: 'center', fontSize: '45px', fontWeight: '900'}}>OUR OPPORTUNITIES!</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className={'container'}>
//                 <div className={'row'}>
//                     <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} className={'col-12'}>
//                         {volunteeringProjects.map((item, index) => (
//                             <div key={index} className={'project-item'}>
//                                 <img className={'project-image'}
//                                      src={item.main_image}/>
//                                 <div style={{padding: '20px'}}>
//                                     <h2 style={{
//                                         fontWeight: '700',
//                                         color: '#323b65'
//                                     }}>{t(`volunteering_projects.${index}.title`)}</h2>
//                                     <p style={{fontWeight: '500'}}>{t(`volunteering_projects.${index}.main_description`)}</p>
//                                     <button onClick={() => handleMoreInfo(index)} className={'more-btn'}> {t(`volunteering_projects.${index}.button1`)}
//                                     </button>
//                                 </div>
//                                 {moreInfo && ind === index ?
//                                     <div className={'container'}>
//                                         <div className={'row'}>
//                                             <div className={'col-12'}>
//                                                 <div className={'more-info-window'}>
//                                                     <div className={'more-info-div'}>
//                                                         <div style={{display: 'flex', justifyContent: 'right'}}>
//                                                             <svg onClick={handleMoreInfo}
//                                                                  xmlns="http://www.w3.org/2000/svg"
//                                                                  height="24px"
//                                                                  viewBox="0 -960 960 960" width="24px" fill="#000000">
//                                                                 <path
//                                                                     d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
//                                                             </svg>
//                                                         </div>
//                                                         <h1 style={{
//                                                             fontWeight: '800',
//                                                             textAlign: 'center',
//                                                             fontSize: '60px',
//                                                             color: '#323b65'
//                                                         }}>{t(`volunteering_projects.${index}.title`)}</h1>
//                                                         <div style={{display: 'flex', justifyContent: 'center'}}>
//                                                             <div>
//                                                                 <Slider style={{
//                                                                     minWidth: '400px',
//                                                                     maxWidth: '900px',
//                                                                     margin: '30px',
//                                                                     overflow: 'hidden',
//                                                                     position: 'relative',
//                                                                     borderRadius: '50px'
//                                                                 }} {...settings}>
//                                                                     {item.images.map((image) => (<img style={{
//                                                                         width: '300px',
//                                                                         height: '500px',
//                                                                         margin: '30px',
//                                                                         backgroundPosition: 'center',
//                                                                         backgroundSize: 'cover'
//                                                                     }} src={image}/>))}
//                                                                 </Slider>
//                                                                 <h1 style={{
//                                                                     color: '#323b65',
//                                                                     fontSize: '45px'
//                                                                 }}>{item.stars}</h1>
//                                                             </div>
//
//                                                         </div>
//                                                         <div style={{
//                                                             display: 'flex',
//                                                             justifyContent: 'center',
//                                                             alignItems: 'center',
//                                                             flexWrap: 'wrap',
//                                                         }}>
//                                                             <div>
//                                                                 <div style={{
//                                                                     display: 'flex',
//                                                                     flexWrap: 'wrap',
//                                                                     alignItems:'center',
//                                                                     marginBottom: '20px',
//                                                                     minWidth: '350px',
//                                                                     maxWidth: '500px'
//                                                                 }}>
//                                                                     <h2 style={{
//                                                                         display: 'inline-block',
//                                                                         color: '#323b65',
//                                                                         fontSize: '45px'
//                                                                     }}>
//                                                                         <svg xmlns="http://www.w3.org/2000/svg"
//                                                                              height="50px"
//                                                                              viewBox="0 -960 960 960" width="50px"
//                                                                              fill="#323b65">
//                                                                             <path
//                                                                                 d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
//                                                                         </svg>
//                                                                         :
//                                                                     </h2>
//                                                                     <h2 style={{
//                                                                         display: 'inline-block',
//                                                                         fontSize: '30px',
//                                                                         color: '#3d3c3c'
//                                                                     }}> {t(`volunteering_projects.${index}.location`)}</h2>
//                                                                 </div>
//                                                                 <div style={{
//                                                                     display: 'flex',
//                                                                     flexWrap: 'wrap',
//                                                                     marginBottom: '20px',
//                                                                     alignItems: 'center'
//                                                                 }}>
//                                                                     <h2 style={{
//                                                                         display: 'inline-block',
//                                                                         fontSize: '45px',
//                                                                         color: '#323b65'
//                                                                     }}>Age :</h2>
//                                                                     <h2 style={{
//                                                                         display: 'inline-block',
//                                                                         fontSize: '45px', color: '#3d3c3c'
//                                                                     }}>{item.age_requirement}</h2>
//                                                                 </div>
//
//
//                                                                 <div style={{display: 'inline-block'}}>
//                                                                     <h2 style={{
//                                                                         color: '#323b65',
//                                                                         fontSize: '45px'
//                                                                     }}>Requirements</h2>
//                                                                     <div style={{display: 'inline-block',  minWidth:'350px',
//                                                                         maxWidth:'550px'}}>
//                                                                         {item.requirements.map((item) => (<h4>
//
//                                                                             <li style={{color: '#3d3c3c'}}>{t(`${item}`)}</li>
//                                                                         </h4>))}
//                                                                     </div>
//                                                                 </div>
//
//                                                                 <br/>
//                                                                 <div style={{display: 'inline-block'}}>
//                                                                     <h2 style={{
//                                                                         color: '#323b65',
//                                                                         fontSize: '45px'
//                                                                     }}>Points</h2>
//                                                                     <div style={{display: 'inline-block',  minWidth:'350px',
//                                                                         maxWidth:'500px'}}>
//                                                                         {item.points.map((item) => (<h4>
//
//                                                                             <li style={{color: '#3d3c3c'}}>{t(`${item}`)}</li>
//
//                                                                         </h4>))}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div style={{marginLeft:'50px'}}>
//                                                                 <h2 style={{
//                                                                     textAlign: 'center',
//                                                                     fontSize: '50px',
//                                                                     fontWeight: '800',
//                                                                     color: '#323b65'
//                                                                 }}>Description</h2>
//                                                                 <p style={{
//                                                                     fontSize: '25px',
//                                                                     fontWeight: '800',
//                                                                     minWidth:'400px',
//                                                                     maxWidth:'700px',
//                                                                     lineHeight: '45px',
//                                                                     color: '#3D3C3CFF'
//                                                                 }}>{t(`volunteering_projects.${index}.description`)}</p>
//                                                             </div>
//                                                         </div>
//
//                                                         <div style={{
//                                                             display: 'flex',
//                                                             justifyContent: 'center',
//                                                             alignItems: 'center'
//                                                         }}>
//                                                             <button className={'apply-button'}>
//                                                                 <Link style={{textDecoration: 'none', color: 'white'}}
//                                                                       to={'/apply'}>{t(`volunteering_projects.${index}.button2`)}</Link>
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     : null}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>);
// }
//
// export default OurProject;


import React, {useState} from "react";
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
    const volunteeringProjects = t("volunteering_projects", {returnObjects: true});

    const handleMoreInfo = (i) => {
        setMoreInfo(true);
        setIndex(i);
    };

    const handleClose = () => setMoreInfo(false);

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Header/>
            <Container className="py-5">
                <h1 style={{fontSize:'50px',fontWeight:'800'}} className="text-center  mb-4">Our Opportunities</h1>
                <Row className="g-4">
                    {volunteeringProjects.map((item, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="shadow-sm">
                                <Card.Img style={{height:'350px',objectFit:'cover'}} variant="top" src={item.main_image}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.main_description}</Card.Text>
                                    <button className={'apply-button'}  onClick={() => handleMoreInfo(index)}>
                                        {t(`volunteering_projects.${index}.button1`)}
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Modal show={moreInfo} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{volunteeringProjects[ind]?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Slider {...settings}>
                            {volunteeringProjects[ind]?.images.map((image, i) => (
                                <img  style={{borderRadius:'50px'}} key={i} src={image} className="w-100" alt="Project"/>
                            ))}
                        </Slider>
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
                        <Link to="/apply" style={{textDecoration:'none'}} className={'apply-button'} >
                            {t(`volunteering_projects.${ind}.button2`)}
                        </Link>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>

    );
};

export default OurProject;

