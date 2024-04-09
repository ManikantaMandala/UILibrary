import { NavLink } from "react-router-dom"

export default function CardsNavBar(){
    return (
        <div>
            <div className="ComponentsNavBar">
                <NavLink to="/components/Cards/CardImageView">Card Image</NavLink>
                <NavLink to="/components/Cards/CardComponent">Card</NavLink>
                <NavLink to="/components/Cards/RatingStars">Rating Stars</NavLink>
            </div>
        </div>

    )
}
