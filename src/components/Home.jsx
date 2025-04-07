import React, {useState, useEffect} from "react"
import "../styles/Home.scss"
import myImage from "../../public/me.svg"
import githubIcon from "../../public/github.png"
import linkedInIcon from "../../public/linkedin.svg"

const Home = () => {
    const [text, setText] = useState("");
    const [loopIndex, setLoopIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100

    const words = ["Abhishek Obey", "MERN Developer", "FullStack Developer"];

    useEffect(() => {
        const currentWord = words[loopIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                const nextText = currentWord.slice(0, text.length + 1);
                setText(nextText);

                if (nextText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
                }
            } else {
                const nextText = currentWord.slice(0, text.length - 1);
                setText(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setLoopIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopIndex, words, typingSpeed]);


    return (
        <div id={"home"} className={"home"}>
            <div>
                <h1>Hi there <span>👋</span> I'm</h1>
                <h2>{text}</h2>
                <p>Passionate and detail-oriented software developer with a focus on designing and implementing
                    scalable, efficient, and user-centric solutions. Skilled in full-stack development and driven by a
                    desire to solve real-world problems through technology.</p>
                <div className={"buttons-container"}>
                    <button onClick={() => setText("")}>Resume</button>
                    <img src={linkedInIcon} alt={"linkedIn"}
                         onClick={() => window.open("https://www.linkedin.com/in/abhishek-obey-a825521a8/", "_blank")}/>
                    <img src={githubIcon} alt={"github"} style={{background: "#FFFFFF"}}
                         onClick={() => window.open("https://github.com/abhishekobey", "_blank")}/>
                </div>
            </div>
            <div className={"image-container"}>
                <img src={myImage} alt={"profile"}/>
            </div>
        </div>
    );
};

export default Home;