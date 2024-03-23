import { NavLink } from "react-router-dom";
export default function NavBar() {
    return (
        <>
            <div className="NavBar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="components">Components</NavLink>
            </div>
        </>
    );
}
