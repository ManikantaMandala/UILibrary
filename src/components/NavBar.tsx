import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar/Styles/NavBarComponentStyle.css";

export default function NavBar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    function menuClick(){
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <>
            <div className="NavBar Wrapper">
                <div className="NavBarsWrapper">
                    <div className="LogoAndLinks">
                        <span className="Logo">
                            <img src="/vite.svg" alt="logo"/>
                        </span>
                        { /*
                        */ }
                        <span className="NavLinks">
                            <ul className="NavBarUl">
                                <li className="NavBarLi">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="NavBarLi">
                                    <NavLink to="components">Components</NavLink>
                                </li>
                                {/*
                                <li className="NavBarLi">
                                    <a href="/shop" >Shop</a>
                                </li>
                                <li className="NavBarLi">
                                    <a href="/contactUs" >Contact Us</a>
                                </li>
                                */}
                            </ul>
                        </span>
                    </div>
                    <div className="SearchInput">
                        <form>
                            <input type="text" placeholder="Search.."/>
                            <select name="catagory" id="catagory">
                                <option value="all">All Categories</option>
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                                <option value="option4">option4</option>
                            </select>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#91D2DF' viewBox="0 -960 960 960">
                                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="SearchButtonSideBar">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#91D2DF' viewBox="0 -960 960 960">
                                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="menuButton" onClick={menuClick}>
                        {
                            isSideBarOpen?
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill='#91D2DF' 
                                height="24" 
                                viewBox="0 -960 960 960" 
                                width="24">
                                <path 
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#91D2DF' height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        }
                    </div>
                </div>
                {
                    isSideBarOpen?
                        <div className="SideBar" id="SideBar">
                            <div>
                                <ul className="SideBarUl">
                                    <li className="SideBarLi">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="SideBarLi">
                                        <NavLink to="components">Components</NavLink>
                                    </li>
                                    <li className="SideBarLi">
                                        <a href="/shop" >Shop</a>
                                    </li>
                                    <li className="SideBarLi">
                                        <a href="/contactUs" >Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            :
                        ""
                }
            </div>
        </>
    );
}
