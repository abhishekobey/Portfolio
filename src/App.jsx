import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
    return (
        <div>
            <NavBar/>
            <div style={{margin: "0 100px"}}>
                <Home/>
                <div id="about" style={{height: "100vh", padding: "20px"}}>
                    <h2>About Section</h2>
                    <p>This is the About section.</p>
                </div>
                <div id="experience" style={{height: "100vh", padding: "20px"}}>
                    <h2>Experience Section</h2>
                    <p>This is the Experience section.</p>
                </div>
                <div id="contact" style={{height: "100vh", padding: "20px"}}>
                    <h2>Contact Section</h2>
                    <p>This is the Contact section.</p>
                </div>
            </div>
        </div>
    );
};

export default App;