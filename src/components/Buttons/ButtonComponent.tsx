import './Styles/ButtonStyle.css';

export interface ButtonProps {
    link: string;
    label: string;
    color?: string;
    bgColor?: string;
    sideIconPath?: string;
    sideIconAlt?: string;
    isDisabled?: boolean;
    isFilled?: boolean;
    isOutlined?: boolean;
    isText?: boolean;
    isDescription?: boolean;
}

export default function Button({ link, label, color, bgColor,
    sideIconPath,
    sideIconAlt,
    isDescription,
    isDisabled,
    isFilled, isOutlined, isText }: ButtonProps) {
    return (
        <div className="ButtonWrapper">
            {isDescription && (
                <>
                    {isFilled && <span>Filled component</span>}
                    {isOutlined && <span>Outlined component</span>}
                    {isText && <span>Text button component</span>}
                </>
            )}
            <a className={`Button ${isDisabled ? 'DisabledButton ' : ''}
                                    ${isFilled ? 'ButtonFilled ' : ''}
                                    ${isOutlined ? 'ButtonOutlined ' : ''}
                                    ${isText ? 'ButtonText ' : ''}`}
              style={
                  isFilled && (color && bgColor) ? 
                      {
                          backgroundColor: bgColor,
                          color: color
                      }: 
                      isOutlined && color ?
                      {
                          borderColor: color
                      }:
                      isText && color ? 
                      { 
                          color: color
                      }: 
                      {}
              }
               href={link}>
                {sideIconPath && sideIconAlt &&
                    <img src={sideIconPath} alt={sideIconAlt} />
                }
                {label}
            </a>
        </div>
    );
}
