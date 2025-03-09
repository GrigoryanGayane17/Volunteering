import React from 'react';
import Header from "../components/Header";
import '../assets/css/ourTeam.css'
import usersJson from '../assets/JSONS/English/users.Eng.json'
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next";


function OurTeam(props) {

    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch to the selected language
    };
    return (<div>
        <Header/>

        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12 team-section1'}>
                    <img className={'team-section1-img'}
                         src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/full-shot-people-sitting-chairs8967.jpg'}/>
                    <div className={'team-section1-absolute-div1'}></div>
                    <div className={'team-section1-absolute-div2'}>
                        <h1 className={'team-section1-absolute-div1-h1'}>{t('team.section1.sectionName')}</h1>
                        <p style={{fontSize: '20px', lineHeight: '40px'}}>{t('team.section1.mainText')}</p>
                        <button className={'team-section1-btn'}>{t('team.section1.button')}</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div style={{padding: '100px 0 0 0 '}} className={'row'}>
                <div style={{padding: '100px 0 0 0'}} className={'col-12'}>
                    <h1 style={{fontSize: '50px', fontWeight: '800', textAlign: 'center'}}>{t('team.section2.sectionName')}</h1>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div style={{padding: '100px 0'}} className={'row'}>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} className={'col-12'}>
                    <div style={{
                        backgroundColor: '#1f2645'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'white'}}>{t('team.section2.divs.div1.divName')}</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'white'}}>{t('team.section2.divs.div1.divText')}</p>
                    </div>

                    <div style={{
                        backgroundColor: '#D1E5F6FF'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'black'}}>{t('team.section2.divs.div2.divName')}</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'black'}}>{t('team.section2.divs.div2.divText')}</p>
                    </div>

                    <div style={{
                        backgroundColor: '#1f2645'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'white'}}>{t('team.section2.divs.div3.divName')}</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'white'}}>{t('team.section2.divs.div3.divText')}</p>
                    </div>

                    <div style={{
                        backgroundColor: '#D1E5F6FF'
                    }} className={'team-section2-div'}>
                        <h3 style={{fontWeight: '700', color: 'black'}}>{t('team.section2.divs.div4.divName')}</h3>
                        <p style={{fontSize: '20px', lineHeight: '40px', color: 'black'}}>{t('team.section2.divs.div4.divText')}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={'container'}>
            <div className={'row'}>
                <div style={{padding:'0 20px 80px 20px'}} className={'col-12'}>
                    <h1 style={{fontSize: '50px', fontWeight: '800', textAlign: 'center'}}>{t('team.section3.sectionName')}</h1>
                </div>
            </div>
        </div>


        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        {usersJson.map((item) => (
                            <div style={{margin: '30px 40px'}} key={item.id}>

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
                                <h4 style={{textAlign: 'center', fontWeight: '800', marginTop: '20px'}}>{item.name}</h4>
                                <p style={{textAlign: 'center', marginTop: '20px', fontSize: '20px'}}>{item.skill}</p>
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
    </div>);
}

export default OurTeam;