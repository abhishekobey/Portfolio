import React from "react"
import "../styles/NavBar.scss"

const NavBar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={"navbar"}>
            <span onClick={() => handleScroll("home")}>Home</span>
            <span onClick={() => handleScroll("about")}>About</span>
            <span onClick={() => handleScroll("experience")}>Experience</span>
            <span onClick={() => handleScroll("contact")}>Contact</span>
        </div>
    );
};

export default NavBar;
