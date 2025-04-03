import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import logo from '../assets/images/freepik__background__92321.png'
import menuRes from '../assets/images/menu.png'

function Header(props) {
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()
    const handleMenu = () => {
        setMenu(!menu)
    }

    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const header = {
        "en": "https://cdn-icons-png.freepik.com/512/13481/13481822.png?uid=R179250677&ga=GA1.1.836210414.1706299071",
        "ru": "https://cdn-icons-png.freepik.com/512/16150/16150266.png?uid=R179250677&ga=GA1.1.836210414.1706299071",
        "am": "https://cdn-icons-png.freepik.com/512/299/299840.png?uid=R179250677&ga=GA1.1.836210414.1706299071"
    }


    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div
                    className={'col-12 pe-lg-5 ps-lg-5 pe-md-3 ps-md-3 pe-sm-3 ps-sm-3 d-flex justify-content-between align-items-center'}>
                    <div>
                        <img onClick={() => navigate('/')} className={'menu-logo'}
                             src={logo}/>
                    </div>
                    <div onClick={handleMenu}>
                        <img className={'menu-res'} src={menuRes}/>
                    </div>
                </div>
            </div>

            {menu ?
                <div>
                    <div className={'submenu'}>
                        <svg style={{cursor: 'pointer'}} onClick={handleMenu} xmlns="http://www.w3.org/2000/svg"
                             height="48px"
                             viewBox="0 -960 960 960"
                             width="48px" fill="#FFFFFF">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </div>

                    <div className={'menu'}>
                        <div>
                            <div style={{marginRight: '30px'}}>
                                <button className={'header-translation-btn'} onClick={() => changeLanguage('en')}>
                                    <img style={{width:'30px',height:'30px'}} src={header.en}/>
                                </button>
                                <button className={'header-translation-btn'} onClick={() => changeLanguage('ru')}>
                                    <img style={{width:'30px',height:'30px'}} src={header.ru}/>
                                </button>
                                <button className={'header-translation-btn'} onClick={() => changeLanguage('am')}>
                                    <img style={{width:'30px',height:'30px'}} src={header.am}/>
                                </button>
                            </div>

                            <Link className={'links'} to={'/'}>
                                <div className={'links-div'}>
                                    {t('header.home')}
                                </div>
                            </Link>
                            <Link className={'links'} to={'/team'}>
                                <div className={'links-div'}>
                                    {t('header.ourTeam')}
                                </div>
                            </Link>
                            <Link className={'links'} to={'/project'}>
                                <div className={'links-div'}>
                                    {t('header.ourProjects')}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default Header;