import React from "react"
import setupImage from "../../public/images/setup.jpeg"

const About = () => {
    return (
        <div id="about" className={"about"}>
            <h1 style={{margin: "50px"}}>About Me</h1>
            <div style={{display: "flex"}}>
                <div className={"setup-image"}>
                    <img src={setupImage} alt={"setup"}/>
                </div>
                <p>
                    I specialize in <span>MERN</span> with <span>3+ years</span> of experience in building responsive
                    and scalable <span>web applications</span>.
                    Proficient in <span>React</span>, <span>Node</span>, and <span>MERN stack</span>, with a strong
                    focus on clean code and performance optimization.
                    Experienced in developing <span>full-stack features</span>, designing <span>APIs</span>, and
                    creating <span>software tools</span> to improve users experience.
                    Always eager to <span>learn</span>, <span>mentor</span>,
                    and <span>build impactful digital products</span> that solve real-world problems.
                </p>
            </div>
        </div>
    )
}

export default About
