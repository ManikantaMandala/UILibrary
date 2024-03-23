import { NavLink } from "react-router-dom";
import "../styles/ComponentsNavBarStyle.css";

export default function ButtonsNavBar() {
    return (
        <div>
            <div className="ComponentsNavBar">
                <NavLink to="/components/buttons/button">Button</NavLink>
                <NavLink to="/components/buttons/buttonIcon">ButtonIcon</NavLink>
                <NavLink to="/components/buttons/buttonDisabled">buttonDisabled</NavLink>
            </div>
        </div>
    );
}
