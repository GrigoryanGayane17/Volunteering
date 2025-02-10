import React from 'react';
import Header from "../components/Header";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import '../assets/css/projects.css'


function OurProject(props) {
    const {t, i18n} = useTranslation();
    const volunteeringProjects = i18next.t('volunteering_projects', {returnObjects: true});
    console.log(volunteeringProjects)
    // const menuItemsLength = Array.isArray(volunteeringProjects) ? volunteeringProjects.length : 0;
    //
    // console.log(menuItemsLength)
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <Header/>
            {volunteeringProjects.map((item, index) => (
                <div className={'project-item'}>
                    <h1 key={index}>{t(`volunteering_projects.${index}.title`)}</h1>
                </div>
            ))}

        </div>
    );
}

export default OurProject;