import { NavLink } from "react-router-dom";
import "../styles/ComponentsNavBarStyle.css";

export default function ComponentsNavBar() {
    return (
        <div className="ComponentsNavBarSide">
        {/*
            <strong style={{color: "white"}}>
                Components
            </strong>
        */}
            <NavLink to="/components/buttons">Button</NavLink>
            <NavLink to="/components/NavBars">NavBars</NavLink>
            <NavLink to="/components/Slides">Slides</NavLink>
            <NavLink to="/components/Cards">Cards</NavLink>
            <NavLink to="/components/footer">Footer</NavLink>
        </div>
    );
}
