import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import '../assets/css/ourTeam.css'
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";


function OurTeam(props) {

    const {t} = useTranslation();
    const [showButton, setShowButton] = useState(false);
    const usersJson = t("team.section4", {returnObjects: true}) || [];

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


    return (<div>
        <Header/>

        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 team-section1'}>
                    <img data-aos="fade-down" className={'team-section1-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/full-shot-people-sitting-chairs8967.jpg'}/>
                    <div data-aos="fade-up" className={'team-section1-absolute-div1'}></div>
                    <div data-aos="fade-up" className={'team-section1-absolute-div2'}>
                        <div>
                            <h1 className={'team-section1-absolute-div1-h1'}>{t('team.section1.sectionName')}</h1>
                            <p style={{fontSize: '20px', lineHeight: '25px'}}>{t('team.section1.mainText')}</p>
                            <button className={'team-section1-btn'}>{t('team.section1.button')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div style={{padding: '100px 0 0 0 '}} className={'row'}>
                <div style={{padding: '50px 0 0 0'}} className={'col-12'}>
                    <h1 data-aos="fade-up" style={{
                        fontSize: '50px',
                        fontWeight: '800',
                        textAlign: 'center'
                    }}>{t('team.section2.sectionName')}</h1>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div style={{padding: '50px 0'}} className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} className={'col-12'}>
                    <div data-aos="fade-up" style={{
                        backgroundColor: '#1f2645'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'white'}}>{t('team.section2.divs.div1.divName')}</h3>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '40px',
                            color: 'white'
                        }}>{t('team.section2.divs.div1.divText')}</p>
                    </div>

                    <div data-aos="fade-down" style={{
                        backgroundColor: '#D1E5F6FF'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'black'}}>{t('team.section2.divs.div2.divName')}</h3>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '40px',
                            color: 'black'
                        }}>{t('team.section2.divs.div2.divText')}</p>
                    </div>

                    <div data-aos="fade-up" style={{
                        backgroundColor: '#1f2645'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'white'}}>{t('team.section2.divs.div3.divName')}</h3>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '40px',
                            color: 'white'
                        }}>{t('team.section2.divs.div3.divText')}</p>
                    </div>

                    <div data-aos="fade-down" style={{
                        backgroundColor: '#D1E5F6FF'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'black'}}>{t('team.section2.divs.div4.divName')}</h3>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '40px',
                            color: 'black'
                        }}>{t('team.section2.divs.div4.divText')}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div className={'row'}>
                <div style={{padding: '0 20px 80px 20px'}} className={'col-12'}>
                    <h1 data-aos="fade-up" style={{
                        fontSize: '40px',
                        fontWeight: '800',
                        textAlign: 'center'
                    }}>{t('team.section3.sectionName')}</h1>
                </div>
            </div>
        </div>


        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        {usersJson.map((item) => (
                            <div data-aos="fade-up" style={{margin: '30px'}} key={item.id}>

                                <div style={{
                                    backgroundColor: '#D1E5F6FF',
                                    width: '250px',
                                    height: '250px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <img style={{
                                        width: '238px',
                                        height: '238px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }} src={item.image}/>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div style={{width: '200px'}}>
                                        <h4 style={{
                                            textAlign: 'center',
                                            fontWeight: '800',
                                            marginTop: '20px'
                                        }}>{item.name}</h4>
                                        <p style={{
                                            textAlign: 'center',
                                            marginTop: '20px',
                                            fontSize: '20px'
                                        }}>{item.skill}</p>
                                    </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width: '19px', height: '19px', cursor: 'pointer', margin: '10px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/1077/1077092.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                    <img style={{width: '19px', height: '19px', cursor: 'pointer', margin: '10px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/717/717392.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                    <img style={{width: '19px', height: '19px', cursor: 'pointer', margin: '10px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/3800/3800046.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                </div>

                            </div>))}
                    </div>
                </div>
            </div>
        </div>

        <Footer/>

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
    </div>);
}

export default OurTeam;