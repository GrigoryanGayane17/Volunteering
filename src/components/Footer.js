import React from 'react';
import {useTranslation} from "react-i18next";

function Footer(props) {

    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch to the selected language
    };
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div style={{padding: '50px 30px'}} className={'col-lg-6 col-md-6 col-sm-12 section8-div1'}>
                    <h1 style={{
                        fontSize: '50px',
                        fontWeight: '800',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>{t('footer.sectionName')}</h1>
                    <div style={{fontSize: '20px'}}>
                        <div className={'footer-inputs-div1'}>
                            <div style={{width: '100%', margin: '20px'}}>
                                <p style={{marginBottom: '0'}}>{t('footer.form.email')}</p>
                                <input className={'section8-input1'} placeholder={t('footer.form.emailPlaceholder')}
                                       type={'text'}/>
                            </div>
                            <div style={{width: '100%', margin: '20px'}}>
                                <p style={{marginBottom: '0'}}>{t('footer.form.name')}</p>
                                <input className={'footer-input1'} placeholder={t('footer.form.namePlaceholder')} type={'text'}/>
                            </div>
                        </div>
                        <div style={{margin: '20px'}}>
                            <p style={{marginBottom: '0'}}>{t('footer.form.phone')} </p>
                            <input className={'footer-input2'}
                                   placeholder={t('footer.form.phonePlaceholder')} type={'text'}/>
                        </div>

                        <div style={{margin: '20px'}}>
                            <p style={{marginBottom: '0'}}>{t('footer.form.message')}</p>
                            <textarea style={{height: '135px'}} className={'footer-input2'}></textarea>
                        </div>
                        <div>
                            <input type={'checkbox'}/>
                            <span
                                style={{marginLeft: '20px', fontSize: '20px'}}>{t('footer.form.checkbox')}</span>
                        </div>
                        <button className={'footer-btn'}>{t('footer.form.button')}</button>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',padding:'100px 30px'}}
                     className={'col-lg-6 col-md-6 col-sm-12'}>
                    <div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <img style={{width: '116px', height: '116px'}}
                                 src={'https://cdn-icons-png.freepik.com/512/12643/12643041.png?uid=R179250677&ga=GA1.1.836210414.1706299071'}/>
                        </div>
                        <h1 className={'footer-numbers'}>1 (234) 567-891</h1>
                        <h1 className={'footer-numbers'}>1 (234) 987-654</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;