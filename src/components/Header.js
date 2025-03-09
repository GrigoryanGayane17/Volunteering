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


    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-12 pe-lg-5 ps-lg-5 pe-md-3 ps-md-3 pe-sm-3 ps-sm-3 d-flex justify-content-between align-items-center'}>
                    <div>
                        <img onClick={()=>navigate('/')} className={'menu-logo'}
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
                                <button className={'header-translation-btn'} onClick={() => changeLanguage('en')}>EN
                                </button>
                                <button className={'header-translation-btn'} onClick={() => changeLanguage('ru')}>RU
                                </button>
                                <button className={'header-translation-btn'} onClick={() => changeLanguage('am')}>AM
                                </button>
                            </div>

                            <Link className={'links'} to={'/'}>
                                <div className={'links-div'}>
                                    Home
                                </div>
                            </Link>
                            <Link className={'links'} to={'/team'}>
                                <div className={'links-div'}>
                                    Our Team
                                </div>
                            </Link>
                            <Link className={'links'} to={'/project'}>
                                <div className={'links-div'}>
                                    Our Projects
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