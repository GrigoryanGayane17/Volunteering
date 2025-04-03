import React, {useState} from 'react';
import '../assets/css/slider.css'
import images from "../assets/JSONS/images.json";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useTranslation} from "react-i18next";

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20

function Slide(props) {
    console.info('hello')
    const {t} = useTranslation();
    const WeWorkWith = t("weWorkWith", { returnObjects: true }) || [];
    const [index, setIndex] = useState(0)
    return (
        <div className={'relative p-10'}>

            <div
                className={'absolute top-[-10px] lg:-top-20 left-1/2 right-1/2 -translate-1/2 flex justify-center gap-x-5 '}>
                <button onClick={() => setIndex((prev) => (
                    prev === 0 ? images.length - 1 : prev - 1
                ))}
                        className={"bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"}>
                    <ArrowLeft size={18}/>
                </button>
                <button onClick={() => setIndex((prev) => (
                    prev === images.length - 1 ? 0 : prev + 1
                ))}
                        className={"bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"}>
                    <ArrowRight size={18}/>
                </button>
            </div>
            <div className={'flex justify-center gap-x-20 lg:items-start items-center lg:flex-row flex-col'}>
                <div className={'sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] relative'}>
                    {WeWorkWith.map((image, i) => (
                        <img src={image.href} key={i}
                             style={{ transform: `rotate(${index === i ? 0 : getRandomNumber()}deg)` }}
                             className={` w-full h-full absolute object-cover rounded-3xl transition-all duration-200 ${i === index ? "activeImage" : "inactiveImage"}`}/>
                    ))}
                </div>

                <div className={'relative sm:w-[400px] transition-all duration-300 flex items-center p-8'}>
                    {WeWorkWith.map((text, i) => (
                       <p className={` text-[#1f2544] transition-all delay-200 ${i===index ? "activeDesc delay-200" :"inactiveDesc" } sm:text-center`}>{index===i ? t(text.desc) : null}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slide;