import { useState } from 'react';
import "./Styles/CardImageStyle.css";

interface CardImageViewProps {
    imgPaths: string[];
}

export default function CardImageView({ imgPaths }: CardImageViewProps) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const imgCount = imgPaths.length;

    function changeImage(index: number) {
        if (index >= 0 && index < imgCount) {
            setCurrentImgIndex(index);
        }
    }

    return (
        <div className="card-image-wrapper">
            <div className="side-images">
                {imgPaths.map((path, index) => (
                    <img onClick={() => changeImage(index)} key={index} src={path} alt={`img-${index}`} />
                ))}
            </div>
            <div className="main-image">
                <img src={imgPaths[currentImgIndex]} alt={`img-${currentImgIndex}`} />
            </div>
        </div>
    );
}
