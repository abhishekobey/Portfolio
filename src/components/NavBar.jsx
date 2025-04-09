import React, {useState} from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
        if (isOpenMenu) {
            setIsOpenMenu(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <div className={"navbar"} style={isOpenMenu ? {height: "-webkit-fill-available"} : null}>
            <div className={"navbar__hamburger"}>
                <a style={{textAlign: "end"}} onClick={toggleMobileMenu}>
                    {isOpenMenu ? "✖" : "☰"}
                </a>
            </div>
            <div className={isOpenMenu ? "navbar__hamburger" : "navbar-links"}>
                <span onClick={() => handleScroll("home")}>Home</span>
                <span onClick={() => handleScroll("about")}>About</span>
                <span onClick={() => handleScroll("experience")}>Experience</span>
                <span onClick={() => handleScroll("contact")}>Contact</span>
            </div>
        </div>
    );
};

export default NavBar;