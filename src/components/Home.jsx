import React, {useState, useEffect} from "react"
import myImage from "../../public/images/me.svg"
import githubIcon from "../../public/images/github.png"
import linkedInIcon from "../../public/images/linkedin.svg"
import downloadIcon from "../../public/images/download-icon.svg"

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

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=1KP5DJBIDdYmj6rPXMFqDbgYYmoV3t0xV";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div id={"home"} className={"home"}>
            <div>
                <h1>Hi there <span>👋</span> I'm</h1>
                <h2>{text}</h2>
                <p>Passionate and detail-oriented software developer with a focus on designing and implementing
                    scalable, efficient, and user-centric solutions. Skilled in full-stack development and driven by a
                    desire to solve real-world problems through technology.</p>
                <div className={"buttons-container"}>
                    <button onClick={downloadResume}>Resume <img src={downloadIcon} alt={"download"}/></button>
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