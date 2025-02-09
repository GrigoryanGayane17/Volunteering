import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";
import Slider from 'react-slick'


function Home(props) {
    const [wordInfo1, setWordInfo1] = useState('sensitive')
    const [wordInfo2, setWordInfo2] = useState('info1')
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch to the selected language
    };

    let settings1 = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1230, settings: {
                slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true
            }
        }, {
            breakpoint: 980, settings: {
                slidesToShow: 2, slidesToScroll: 1, initialSlide: 2
            }
        }, {
            breakpoint: 770, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        }]
    };


    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [{
            breakpoint: 1230, settings: {
                slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true
            }
        }, {
            breakpoint: 980, settings: {
                slidesToShow: 2, slidesToScroll: 1, initialSlide: 2
            }
        }, {
            breakpoint: 770, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        }]
    };

    const ChangeInfo1 = (key) => {
        setWordInfo1(key)
    }

    const ChangeInfo2 = (key) => {
        setWordInfo2(key)
    }


    return (
        <div>
            <Header/>

            <div className={'container'}>
                <div className={'row'}>
                    <div style={{
                        padding: '100px 50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '300'
                    }} className={'col-lg-5 col-md-12 col-sm-12'}>
                        <div>
                            <h1 style={{
                                fontSize: '60px', fontWeight: '800', color: '#1f2645'
                            }}>{t('home.section1.sectionName')}</h1>
                            <p style={{fontSize: "20px", marginTop: '25px'}}>
                                {t('home.section1.mainText')}</p>
                            <button className={'home-section1-btn'}>{t('home.section1.link')}</button>
                        </div>

                    </div>
                    <div style={{
                        padding: '100px 50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: '200'
                    }} className={'col-lg-7 col-md-12 col-sm-12'}>
                        <img className={'home-section1-img'}
                             src={'https://img.freepik.com/free-photo/thats-how-you-make-it-group-young-people-casual-clothes-working-modern-office_146671-16485.jpg?t=st=1738668267~exp=1738671867~hmac=7af66c15cb0b61c1ac2b8e98f15b72835c3b209ea1c5f7a01154b855039afe00&w=996'}/>
                        <div className={'home-section1-absolute-div1'}></div>
                        <div className={'home-section1-absolute-div2'}></div>
                    </div>
                </div>
            </div>

            <div className={'container-fluid home-section2'}>
                <div className={'row'}>
                    <div style={{padding: '100px 30px'}} className={'col-12'}>
                        <h1 style={{
                            fontWeight: '800', fontSize: '60px', textAlign: 'center'
                        }}>{t('home.section2.sectionName')}</h1>
                    </div>
                </div>
                <div className={'row'}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        padding: '50px 30px'
                    }}
                         className={'col-12'}>

                        <div className="slider-container1">
                            <Slider {...settings1}>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => ChangeInfo1('sensitive')} tabIndex={'0'}
                                         className={'home-section2-div'}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img className={'home-section2-div-img'}
                                                 style={{width: '70px', height: '70px'}}
                                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/ec0be216.png'}/>
                                        </div>
                                        <h2 style={{
                                            textAlign: 'center', marginTop: '30px', color: '#1f2543'
                                        }}>{t('home.section2.square_divs.text_1')}</h2>
                                    </div>
                                </div>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => ChangeInfo1('children')} tabIndex={'0'}
                                         className={'home-section2-div'}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img className={'home-section2-div-img'}
                                                 style={{width: '70px', height: '70px'}}
                                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/245a2f13.png'}/>
                                        </div>
                                        <h2 style={{
                                            textAlign: 'center', marginTop: '30px', color: '#1f2543'
                                        }}>{t('home.section2.square_divs.text_2')}</h2>
                                    </div>
                                </div>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => ChangeInfo1('sociable')} tabIndex={'0'}
                                         className={'home-section2-div'}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img className={'home-section2-div-img'}
                                                 style={{width: '70px', height: '70px'}}
                                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/96972e44.png'}/>
                                        </div>
                                        <h2 style={{
                                            textAlign: 'center', marginTop: '30px', color: '#1f2543'
                                        }}>{t('home.section2.square_divs.text_3')}</h2>
                                    </div>
                                </div>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => ChangeInfo1('teamsFamilies')} tabIndex={'0'}
                                         className={'home-section2-div'}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img className={'home-section2-div-img'}
                                                 style={{width: '70px', height: '70px'}}
                                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/0ae08100.png'}/>
                                        </div>
                                        <h2 style={{
                                            textAlign: 'center', marginTop: '30px', color: '#1f2543'
                                        }}>{t('home.section2.square_divs.text_4')}</h2>
                                    </div>
                                </div>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => ChangeInfo1('lively')} tabIndex={'0'}
                                         className={'home-section2-div'}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img className={'home-section2-div-img'}
                                                 style={{width: '70px', height: '70px'}}
                                                 src={'https://cdn-icons-png.freepik.com/512/17353/17353667.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                        </div>
                                        <h2 style={{
                                            textAlign: 'center', marginTop: '30px', color: '#1f2543'
                                        }}>{t('home.section2.square_divs.text_5')}</h2>
                                    </div>
                                </div>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => ChangeInfo1('accountable')} tabIndex={'0'}
                                         className={'home-section2-div'}>
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <img className={'home-section2-div-img'}
                                                 style={{width: '70px', height: '70px'}}
                                                 src={'https://cdn-icons-png.freepik.com/512/17492/17492491.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                        </div>
                                        <h2 style={{
                                            textAlign: 'center', marginTop: '30px', color: '#1f2543'
                                        }}>{t('home.section2.square_divs.text_6')}</h2>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div style={{padding: '50px 50px'}} className={'col-lg-6 col-md-12 col-sm-12'}>
                        <h1 style={{
                            color: 'white', fontSize: '50px', fontWeight: '800', marginBottom: '15px'
                        }}>{t(`home.section3.${wordInfo1}.sectionName`)}</h1>
                        <p style={{color: 'white', fontSize: '20px'}}>{t(`home.section3.${wordInfo1}.under_text`)}</p>
                        <div>
                            <p style={{
                                color: 'white', fontSize: '25px'
                            }}>✔ {t(`home.section3.${wordInfo1}.correct_texts_col1.text_1`)}</p>
                            <p style={{
                                color: 'white', fontSize: '25px'
                            }}>✔ {t(`home.section3.${wordInfo1}.correct_texts_col1.text_2`)}</p>
                        </div>
                    </div>
                    <div style={{padding: '50px 50px'}} className={'col-lg-6 col-md-12 col-sm-12'}>
                        <h2 style={{
                            color: 'white',
                            fontSize: '35px',
                            fontWeight: '500',
                            marginBottom: '15px',
                            lineHeight: '80px'
                        }}>{t(`home.section3.${wordInfo1}.text_col_2`)}</h2>
                    </div>
                </div>
            </div>
            <div className={'container-fluid home-section3'}>
                <div className={'row'}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 50px 100px 50px',
                        position: 'relative'
                    }} className={'col-12'}>
                        <img className={'home-section3-img'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/Untitled-1e.jpg'}/>
                        <div className={'home-section3-absolute-div1'}></div>
                        <div className={'home-section3-absolute-div2'}>
                            <h1 style={{fontSize: '40px', fontWeight: '700'}}>{t('home.section4.sectionName')}</h1>
                            <p style={{fontSize: '20px'}}>
                                {t('home.section4.mainText')}</p>
                            <button className={'home-section3-btn'}>{t('home.section4.button')}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'row'}>
                    <div style={{padding: '100px 0'}} className={'col-12'}>
                        <h1 style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            fontWeight: '800'
                        }}>{t('home.section5.sectionName')}</h1>
                    </div>
                </div>
            </div>


            <div className={'container-fluid'}>
                <div style={{position: 'relative'}} className={'row'}>
                    <div style={{
                        padding: '100px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                         className={'col-12'}>
                        <div className={'section7'}>
                            <div>
                                <h1 style={{fontWeight: '700', fontSize: '70px'}}>{t('home.section7.sectionName')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'row'}>
                    <div style={{display: 'flex', justifyContent: 'center'}} className={'col-12'}>

                        <div className="slider-container2">

                            <div className={'content'}>
                            <span style={{'--i': 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  <img
                                style={{width: '200px', height: '80px', margin: '15px'}}
                                src={'https://nwafoundation.org/wp-content/uploads/2017/04/FedEx-Logo-PNG-Transparent.png'}/></span>
                                <span
                                    style={{'--i': 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '150px', height: '80px', margin: '15px'}}
                                    src={'https://loodibee.com/wp-content/uploads/iPhone-logo.png'}/></span>
                                <span
                                    style={{'--i': 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '200px', height: '80px', margin: '15px'}}
                                    src={'https://img.logodad.com/upload/J/zv8/Temu-Wordmark-icon.png'}/></span>
                                <span
                                    style={{'--i': 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '200px', height: '80px', margin: '15px'}}
                                    src={'https://upload.wikimedia.org/wikipedia/commons/e/e5/Cocacola_caffeinefree_logo.png'}/></span>
                                <span
                                    style={{'--i': 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '200px', height: '80px', margin: '15px'}}
                                    src={'https://1000logos.net/wp-content/uploads/2020/08/Shazam-Logo.png'}/></span>
                                <span
                                    style={{'--i': 6, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '200px', height: '80px', margin: '15px'}}
                                    src={'https://logos-world.net/wp-content/uploads/2023/02/Picsart-Logo.png'}/></span>
                                <span
                                    style={{'--i': 7, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '200px', height: '80px', margin: '15px'}}
                                    src={'https://1000logos.net/wp-content/uploads/2017/05/Yahoo-Logo-2013.png'}/></span>

                                <span
                                    style={{'--i': 8, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                                    style={{width: '150px', height: '80px', margin: '15px'}}
                                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mercedes-Benz_logo.svg/2560px-Mercedes-Benz_logo.svg.png'}/></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Home;