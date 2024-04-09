import Button from "../Buttons/ButtonComponent"
import { ButtonProps } from "../Buttons/ButtonComponent"
import "./Styles/SlidesStyle.css"
import { useState, useEffect } from "react";

interface SlideProps{
    heading1: string;
    heading2: string;
    h2Color: string;
    description: string;
    buttonProps: ButtonProps;
    imgPath: string;
}


export function SlidesComponent(
    { propsArray }: { propsArray: SlideProps[] }
) {
    const [slideIndex, setSlideIndex] = useState(0);
    const slide = propsArray[slideIndex];
    const slidesCount = propsArray.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slidesCount);
        }, 5000);

        return () => clearInterval(interval);
    }, [slidesCount]);

    function previousSlide() {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? slidesCount - 1 : prevIndex - 1));
    }

    function nextSlide() {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slidesCount);
    }

    const { link, label, isFilled, color, bgColor } = slide.buttonProps;

    return (
        <div className="SlideWrapper">
            <svg onClick={previousSlide} className="SlideButtons" id="previousButton" width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill={slide.h2Color}/>
                <path d="M29 17.88L22.8192 24L29 30.12L27.0972 32L19 24L27.0972 16L29 17.88Z" fill="white"/>
            </svg>
            <div className="Slide">
                <div className="SlideContent">
                    <h2>
                        {slide.heading1}
                        <h2 style={{color: slide.h2Color}}>{slide.heading2}</h2>
                    </h2>
                    <h4>{slide.description}</h4>
                    <Button link={link} label={label} color={color} bgColor={bgColor} isFilled={isFilled} />
                </div>
                <div className="SlideImage">
                    <img src={slide.imgPath} alt={`${slide.heading1} ${slide.heading2} image`} />
                </div>
            </div>
            <svg onClick={nextSlide} className="SlideButtons" id="nextButton" width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" transform="rotate(-180 24 24)" fill={slide.h2Color}/>
                <path d="M19 30.12L25.1808 24L19 17.88L20.9028 16L29 24L20.9028 32L19 30.12Z" fill="white"/>
            </svg>
        </div>
    );
}
