import React from "react";
import "./styles/style.scss"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
            <NavBar/>
            <div className={"container"}>
                <Home/>
                <About/>
                <Experience/>
                <Contact/>
            </div>
        </>
    );
};

export default App;