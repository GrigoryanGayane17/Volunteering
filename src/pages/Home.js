import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";
import Slider from 'react-slick'

function Home(props) {
    const [word, setWord] = useState('sensitive')
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch to the selected language
    };

    let settings = {
        dots: false, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 1, initialSlide: 0, responsive: [{
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

    const Change = (key) => {
        setWord(key)
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
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/df-min.jpg'}/>
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
                            <Slider {...settings}>
                                <div style={{margin: '15px'}}>
                                    <div onFocus={() => Change('sensitive')} tabIndex={'0'}
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
                                    <div onFocus={() => Change('children')} tabIndex={'0'}
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
                                    <div onFocus={() => Change('sociable')} tabIndex={'0'}
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
                                    <div onFocus={() => Change('teamsFamilies')} tabIndex={'0'}
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
                                    <div onFocus={() => Change('lively')} tabIndex={'0'}
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
                                    <div onFocus={() => Change('accountable')} tabIndex={'0'}
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
                    <div style={{padding: '100px 50px'}} className={'col-lg-6 col-md-12 col-sm-12'}>
                        <h1 style={{
                            color: 'white', fontSize: '50px', fontWeight: '800', marginBottom: '15px'
                        }}>{t(`home.section3.${word}.sectionName`)}</h1>
                        <p style={{color: 'white', fontSize: '20px'}}>{t(`home.section3.${word}.under_text`)}</p>
                        <div>
                            <p style={{
                                color: 'white', fontSize: '25px'
                            }}>✔ {t(`home.section3.${word}.correct_texts_col1.text_1`)}</p>
                            <p style={{
                                color: 'white', fontSize: '25px'
                            }}>✔ {t(`home.section3.${word}.correct_texts_col1.text_2`)}</p>
                            <p style={{
                                color: 'white', fontSize: '25px'
                            }}>✔ {t(`home.section3.${word}.correct_texts_col1.text_3`)}</p>
                        </div>
                    </div>
                    <div style={{padding: '100px 50px'}} className={'col-lg-6 col-md-12 col-sm-12'}>
                        <h2 style={{
                            color: 'white',
                            fontSize: '40px',
                            fontWeight: '500',
                            marginBottom: '15px',
                            lineHeight: '80px'
                        }}>{t(`home.section3.${word}.text_col_2`)}</h2>
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
                <div style={{padding: '100px 0 100px 0'}} className={'row'}>
                    <div style={{
                        display: 'flex', justifyContent: 'center', position: 'relative', height: '80vh', padding: '20px'
                    }} className={'col-lg-4 col-md-6 col-sm-12'}>

                        <img style={{width: '100%', objectFit: 'cover'}}

                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/business-executives-discussing-w.jpg'}/>

                        <div style={{position: 'absolute', bottom: '0', color: 'white', padding: '30px'}}>
                            <h2 style={{fontWeight: '700'}}>{t('home.section5.sectionDivs.div_1.div_name')}</h2>
                            <p style={{fontSize: '30px'}}>{t('home.section5.sectionDivs.div_1.main_text')}</p>
                            <a className={'home-section5-link'}
                               href={'#'}>{t('home.section5.sectionDivs.div_1.link')}</a>
                        </div>
                        }
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', height: '80vh', padding: ' 20px '}}

                         className={'col-lg-4 col-md-6 col-sm-12'}>

                        <div style={{color: 'white'}}>
                            <img style={{width: '100%', height: '226px', objectFit: 'cover'}}
                                 src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/people-chairs-communicatingqq.jpg'}/>
                            <div style={{backgroundColor: '#1f2645', padding: '30px'}}>
                                <h2 style={{fontWeight: '500'}}>{t('home.section5.sectionDivs.div_2.div_name')}</h2>
                                <p style={{fontSize: '25px'}}>{t('home.section5.sectionDivs.div_2.main_text')}</p>
                                <a className={'home-section5-link'}
                                   href={'#'}>{t('home.section5.sectionDivs.div_2.link')}</a>

                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', height: '80vh', padding: ' 20px '}}
                         className={'col-lg-4 col-md-12 col-sm-12'}>
                        <div>
                            <div style={{backgroundColor: '#e3c4b7', padding: '30px'}}>
                                <h2>{t('home.section5.sectionDivs.div_3.div_1.div_name')}</h2>
                                <p>{t('home.section5.sectionDivs.div_3.div_1.main_text')}</p>
                                <a style={{color: 'black', fontSize: '20px', fontWeight: '700'}}
                                   href={'#'}>{t('home.section5.sectionDivs.div_3.div_1.link')}</a>
                            </div>
                            <div style={{padding: '40px'}}>
                                <h2 style={{fontWeight: '700'}}>{t('home.section5.sectionDivs.div_3.div_2.div_name')}</h2>
                                <p style={{fontSize: '20px'}}>{t('home.section5.sectionDivs.div_3.div_2.main_text')}</p>
                                <a style={{color: 'black', fontSize: '20px', fontWeight: '700'}}
                                   href={'#'}>{t('home.section5.sectionDivs.div_3.div_2.link')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'row'}>
                    <div style={{
                        padding: '50px 0 100px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }} className={'col-lg-6 col-md-12 col-sm-12'}>
                        <img className={'home-section6-img'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/full-shot-group-people-therapy_2.jpg'}/>
                        <div className={'home-section6-absolute-div1'}></div>
                        <div className={'home-section6-absolute-div2'}></div>
                    </div>
                    <div style={{
                        padding: '50px', display: 'flex', alignItems: 'center',
                    }} className={'col-lg-6 col-md-12 col-sm-12'}>
                        <div>
                            <h1 style={{fontSize: '45px', fontWeight: '700'}}>{t('home.section6.sectionName')}</h1>
                            <p style={{fontSize: '20px', lineHeight: '40px'}}>{t('home.section6.mainText')}</p>
                            <button className={'home-section3-btn'}>{t('home.section6.button')}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container-fluid'}>
                <div className={'row'}>ll
                    <div style={{
                        padding: '100px',
                        backgroundImage: `url('https://assets.nicepagecdn.com/d2cc3eaa/308685/images/medium-shot-people-sitting-chairs43.jpg')`,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        backgroundPosition: 'center'
                    }} className={'col-12'}>
                        <div className={'home-section4-div'}>
                            <h1 style={{
                                textAlign: 'center',
                                fontSize: '40px',
                                fontWeight: '500'
                            }}>{t('home.section7.sectionName')}</h1>
                            <p style={{fontSize: '20px', textAlign: 'center', lineHeight: '40px'}}>
                                {t('home.section7.mainText')}</p>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button
                                    className={'home-section3-btn'}>{t('home.section7.button')}</button>
                            </div>
                        </div>
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
                        <div className={'home-section7-div'}>
                            <div className={'home-section7-div-div'}>
                                <div style={{padding: '50px', width: '400px'}}>
                                    <h1 style={{
                                        fontSize: '40px',
                                        fontWeight: '700'
                                    }}> {t('home.section8.sectionName')}</h1>
                                </div>
                                <div style={{padding: '50px', width: '500px'}}>
                                    <p style={{
                                        fontSize: '20px',
                                        lineHeight: '40px'
                                    }}>{t('home.section8.mainText')}</p>
                                    <button
                                        className={'home-section3-btn'}>{t('home.section8.button')}</button>
                                </div>
                            </div>
                            <div style={{padding: '0 50px 0 50px'}}>
                                <img style={{width: '100%'}}
                                     src={'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/30e8f4ca27b75c6e84c868d2/srter-min.jpg'}/>
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