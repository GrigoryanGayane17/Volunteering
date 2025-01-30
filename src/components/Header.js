import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Header(props) {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }

    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Switch to the selected language
    };
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div style={{
                    padding: '0 40px 0 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
                     className={'col-12'}>
                    <div>
                        <img style={{fill: '#000'}}
                             src={'https://assets.nicepagecdn.com/d2cc3eaa/308685/images/default-logo.png'}/>
                    </div>
                    <div onClick={handleMenu}>
                        <img style={{width: '100px', height: '100px', cursor: 'pointer'}}
                             src={'https://cdn.icon-icons.com/icons2/3215/PNG/512/hamburger_menu_navbar_options_icon_196495.png'}/>
                    </div>
                </div>
            </div>

            {menu ?
                <div>
                    <div className={'submenu'}>
                        <div>
                            <button style={{padding:'15px 20px 15px 20px'}} onClick={()=>changeLanguage('en')}>En</button>
                            <button onClick={()=>changeLanguage('ru')}>Ru</button>
                            <button onClick={()=>changeLanguage('am')}>Am</button>
                        </div>
                        <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" height="48px"
                             viewBox="0 -960 960 960"
                             width="48px" fill="#FFFFFF">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </div>

                    <div className={'menu'}>
                        <div>
                            <div className={'links-div'}>
                                <Link className={'links'} to={'/'}>Home</Link>
                            </div>
                            <div className={'links-div'}>
                                <Link className={'links'} to={'/about'}>About</Link>
                            </div>
                            <div className={'links-div'}>
                                <Link className={'links'} to={'/team'}>Our Team</Link>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default Header;