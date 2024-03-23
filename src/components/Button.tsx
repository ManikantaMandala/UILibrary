// import { NavLink } from 'react-router-dom';
import '../styles/ButtonStyle.css';

interface ButtonProps {
    link: string;
    label: string;
    sideIconPath?: string;
    sideIconAlt?: string;
    isDisabled?: boolean;
    isFilled?: boolean;
    isOutLined?: boolean;
    isText?: boolean;
}

export function Button({ link, label,
    sideIconPath,
    sideIconAlt,
    isDisabled,
    isFilled, isOutLined, isText }: ButtonProps) {
    return (
        <div className="ButtonWrapper">
            {isFilled ? "Filled component" : ""}
            {isOutLined ? "Outlined component" : ""}
            {isText ? "Text button component" : ""}
            <a className={
                    `Button ${isDisabled ? 'DisabledButton ' : ''}
                     ${isFilled ? 'ButtonFilled ' : ''}
                     ${isOutLined ? 'ButtonOutlined ' : ''}
                     ${isText ? 'ButtonText ' : ''}`}
                href={link}>
                {sideIconPath && sideIconAlt ?
                    <img src={sideIconPath} alt={sideIconAlt} /> : <></>
                }
                {label}
            </a>
        </div>
    );
}
