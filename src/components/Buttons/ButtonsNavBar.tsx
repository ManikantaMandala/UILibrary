import { NavLink } from "react-router-dom";
import "../../styles/ComponentsNavBarStyle.css";

export default function ButtonsNavBar() {
    return (
        <div>
            <div className="ComponentsNavBar">
                <NavLink to="/components/buttons/button">Button</NavLink>
                <NavLink to="/components/buttons/buttonIcon">Button Icon</NavLink>
                <NavLink to="/components/buttons/buttonDisabled">Button Disabled</NavLink>
            </div>
        </div>
    );
}
