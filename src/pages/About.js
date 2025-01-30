import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";

function About(props) {

    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch to the selected language
    };
    return (
        <div>
            <Header/>

            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div style={{backgroundColor: '#1f2544', display: 'flex', justifyContent: 'center'}}
                         className={'col-12 section1'}>
                        <img className={'section1-image'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/gdzrte.jpg'}/>
                        <div className={'section1-absolute-div'}>
                            <h1 style={{fontWeight: '800'}}>{t('about.section1.sectionName')}</h1>
                            <p style={{fontWeight: '500', lineHeight: '40px', fontSize: '20px'}}>
                                {t('about.section1.mainText')}</p>
                            <button className={'section1-btn'}>{t('about.section1.button')}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div style={{padding: '100px 50px 100px 50px'}}
                         className={'col-lg-5 col-md-12 col-sm-12 section2-img-div'}>
                        <img className={'section2-img'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/rse.jpg'}/>
                    </div>
                    <div style={{padding: '100px 0 100px 0 '}} className={'col-lg-7 col-md-12 col-sm-12'}>
                        <h1 className={'section2-texts-h2'}>{t('about.section2.sectionName')}</h1>
                        <div className={'section2-texts-div'}>
                            <div style={{width: '300px'}}>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '40px',
                                    margin: '10px'
                                }}>{t('about.section2.mainText1')} </p>
                            </div>
                            <div style={{width: '300px'}}>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '40px',
                                    margin: '10px'
                                }}>{t('about.section2.mainText2')}</p>
                                <a href={'#'} className={'section2-texts-link'}>{t('about.section2.button')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div style={{display: 'flex', justifyContent: 'center'}}
                         className={'col-12 section3'}>
                        <img className={'section3-image'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/eere.jpg'}/>
                        <div className={'section3-absolute-div'}>
                            <div className={'section3-square'}>
                                <h1 style={{fontWeight: '800', fontSize: '40px'}}>{t('about.section3.sectionName')}</h1>
                                <svg style={{marginTop: '50px'}} xmlns="http://www.w3.org/2000/svg" height="72px"
                                     viewBox="0 -960 960 960"
                                     width="72px" fill="#FFFFFF">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                                </svg>
                            </div>
                            <div className={'section3-text-div'}
                                 style={{minWidth: '200px', display: 'flex', alignItems: 'end', maxWidth: '500px'}}>
                                <div className={'section3-p-div'}>
                                    <p className={'section3-p'}> {t('about.section3.mainText')}</p>
                                    <button className={'section3-btn'}>{t('about.section3.button')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'row'}>
                    <div style={{padding: '100px 0 100px 0', display: 'flex', justifyContent: 'center'}}
                         className={'col-12'}>
                        <div style={{maxWidth: '900px', minWidth: '400px'}}>
                            <h1 style={{
                                textAlign: 'center',
                                fontSize: '45px',
                                fontWeight: '700'
                            }}>{t('about.section4.sectionName')}</h1>
                            <p style={{textAlign: 'center', color: 'gray', fontSize: '20px',}}>
                                <em>{t('about.section4.mainText')}</em></p>
                        </div>
                    </div>
                </div>

                <div className={'row'}>
                    <div style={{display: 'flex', justifyContent: 'center'}}
                         className={'col-lg-6 col-md-12 col-sm-12'}>
                        <div>
                            <div style={{display: 'flex', margin: '20px'}}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e8c8bd',
                                    padding: '20px'
                                }}>
                                    <img style={{width: '70px', height: '70px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/903/903506.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <h3 style={{fontWeight: '600'}}>{t('about.section4.divs.div1.divName')}</h3>
                                    <p style={{
                                        color: 'gray',
                                        lineHeight: '40px',
                                        fontSize: '20px'
                                    }}>{t('about.section4.divs.div1.divMainText')}</p>
                                </div>
                            </div>

                            <div style={{display: 'flex', margin: '20px'}}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e8c8bd',
                                    padding: '20px'
                                }}>
                                    <img style={{width: '50px', height: '50px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/18451/18451088.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <h3 style={{fontWeight: '600'}}>{t('about.section4.divs.div2.divName')}</h3>
                                    <p style={{
                                        color: 'gray',
                                        lineHeight: '40px',
                                        fontSize: '20px'
                                    }}>{t('about.section4.divs.div2.divMainText')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}
                         className={'col-lg-6 col-md-12 col-sm-12'}>
                        <div>
                            <div style={{display: 'flex', margin: '20px'}}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e8c8bd',
                                    padding: '20px'
                                }}>
                                    <img style={{width: '70px', height: '70px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/16906/16906467.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <h3 style={{fontWeight: '600'}}>{t('about.section4.divs.div3.divName')}</h3>
                                    <p style={{color: 'gray', lineHeight: '40px', fontSize: '20px'}}>
                                        {t('about.section4.divs.div3.divMainText')}</p>
                                </div>
                            </div>

                            <div style={{display: 'flex', margin: '20px'}}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e8c8bd',
                                    padding: '20px'
                                }}>
                                    <img style={{width: '70px', height: '70px'}}
                                         src={'https://cdn-icons-png.freepik.com/512/11638/11638205.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <h3 style={{fontWeight: '600'}}>{t('about.section4.divs.div4.divName')}</h3>
                                    <p style={{
                                        color: 'gray',
                                        lineHeight: '40px',
                                        fontSize: '20px'
                                    }}>{t('about.section4.divs.div4.divMainText')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div style={{display: 'flex', justifyContent: 'center'}}
                         className={'col-12 section4'}>
                        <img className={'section4-image'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/fd.jpg'}/>
                        <div className={'section4-absolute-div1'}>
                            <div className={'section4-square1'}>
                                <h2 style={{fontWeight: '800'}}>{t('about.section5.sectionName1')}</h2>
                                <p style={{fontSize: '20px', lineHeight: '40px'}}>
                                    {t('about.section5.mainText1')}</p>
                            </div>
                        </div>

                        <div className={'section4-absolute-div2'}>
                            <div className={'section4-square2'}>

                            </div>
                        </div>

                        <div className={'section4-absolute-div3'}>
                            <div className={'section4-square3'}>
                                <h1 style={{fontSize: '40px', fontWeight: '800'}}>{t('about.section5.sectionName2')}</h1>
                                <p style={{color: '#475386', fontSize: '25px', fontWeight: '500'}}>
                                    <em>{t('about.section5.mainText2')}</em></p>
                                <button className={'section4-btn'}>{t('about.section5.button')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'row'}>
                    <div style={{display: 'flex', justifyContent: 'center', padding: '100px 0 0 0', flexWrap: 'wrap'}}
                         className={'col-12'}>
                        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <div className={'section5-img-div'}>
                                <img className={'section5-img'}
                                     src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/appointment-psychologist_144627-39504.jpg'}/>
                                <div className={'section5-absolute-div'}></div>
                            </div>
                            <div className={'section5-img-div'}>
                                <img className={'section5-img'}
                                     src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/supportive-husband_23-2147990619.jpg'}/>
                                <div className={'section5-absolute-div'}></div>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <div className={'section5-img-div'}>
                                <img className={'section5-img'}
                                     src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/therapist-with-couple_23-2147990611.jpg'}/>
                                <div className={'section5-absolute-div'}></div>
                            </div>
                            <div className={'section5-img-div'}>
                                <img className={'section5-img'}
                                     src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg'}/>
                                <div className={'section5-absolute-div'}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div style={{padding: '50px '}} className={'col-lg-5 col-md-12 col-sm-12'}>
                        <h1 style={{fontSize: '45px', fontWeight: '800'}}>{t('about.section6.sectionName')}</h1>
                    </div>
                    <div style={{padding: '50px '}} className={'col-lg-7 col-md-12 col-sm-12'}>
                        <p style={{fontSize: '20px', fontWeight: '400', lineHeight: '40px'}}>
                            {t('about.section6.mainText')}</p>
                    </div>
                </div>
            </div>


            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div style={{display: 'flex', justifyContent: 'center'}}
                         className={'col-12 section6'}>
                        <img className={'section6-image'}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/fdggg-min.jpg'}/>
                        <div className={'section6-absolute-div1'}>

                            <div className={'section6-square3'}>
                                <img style={{width: '423px', height: '541px', objectFit: 'cover'}}
                                     src={'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c0beab8ecace53ff85e7a9e6/mid-shot-woman-therapist-with-clipboard_23-2148759113.jpg'}/>
                            </div>

                            <div className={'section6-square1'}>
                                <h2 style={{fontWeight: '800', color: '#1f2544'}}>{t('about.section7.sectionName')}</h2>
                                <p style={{fontSize: '20px', lineHeight: '40px'}}>{t('about.section7.mainText')}</p>
                                <button className={'section6-btn'}>{t('about.section7.button')}</button>
                            </div>
                        </div>

                        <div className={'section6-absolute-div2'}>
                            <div className={'section6-square2'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-12 section7'}>
                        <div className={'section7-absolute-div'}>
                            <h1 style={{fontSize: '50px', fontWeight: '800'}}>{t('about.section8.sectionName')}</h1>
                            <p style={{fontSize: '20px', lineHeight: '40px',}}>{t('about.section8.mainText')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>);
}

export default About;