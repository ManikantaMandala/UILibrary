import "./Styles/CardsStyle.css"
import RatingStars from "./RatingStars";
import { Banner } from "../Banners/BannerComponent";

type CardsComponentProps = {
    productImage: string;
    productName: string;
    productRating: number;
    productPrice: number;
    small?: boolean;
	bannerColor?: string;
	bannerText: string;
}

export default function CardsComponent(props: CardsComponentProps){
    return (
        <>
            <div className="card"
                    style={props.small ? {width: "20rem"} : {}}
                >
				<div className="banner">
					<Banner 
					color={props.bannerColor}
					text={props.bannerText}
					/>
				</div>
                <div className="productImage">
                    <img src={props.productImage} alt="product-image" />
                </div>
                <div 
                    className="productDetails"
                    >
                    <h3 className="productName">
                        {props.productName}
                    </h3>
                    <RatingStars rating={props.productRating} />
                    <h4 className="productPrice">
                        $ {props.productPrice}
                    </h4>
                </div>
            </div>
        </>
    )
}
