import { NavLink } from "react-router-dom";
import "../styles/ComponentsNavBarStyle.css";

export default function ComponentsNavBar() {
    return (
        <div>
            <div className="ComponentsNavBar">
                <NavLink to="/components/buttons">Button</NavLink>
            </div>
        </div>
    );
}
