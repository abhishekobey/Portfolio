import React, {useEffect, useRef, useState} from "react"
import ryazIcon from "../../public/images/ryaz-icon.png"
import SHIcon from "../../public/images/surveyheart-icon.png"

const Experience = () => {
    const experienceData = [
        {
            logo: SHIcon,
            position: "Mid-Level Web Developer",
            company: "SurveyHeart LLP",
            timePeriod: "September 2024 - Present",
            place: "Hyderabad, India - Remote",
            fullTime: true,
            descriptionList: [
                "Developing and maintaining the Survey Heart web application, continually introducing new features to enhance user experience.",
                "Successfully launched a premium version of our product, significantly increasing company revenue.",
                "Collaborated with multiple internal teams to gather requirements and prioritize bug fixes and feature requests, ensuring alignment with overall project objectives.",
                "Regularly conducted code reviews for junior developers, ensuring adherence to project standards and improving overall code quality.",
                "Mentored and trained 3+ trainees, guiding them in React.js development and best coding practices to enhance their skills and productivity.",
                "Developed HR Tools software to streamline operations and enhance hiring processes for the HR team."
            ]
        },
        {
            logo: SHIcon,
            position: "Web Developer",
            company: "SurveyHeart LLP",
            timePeriod: "August 2021 - August 2024",
            place: "Hyderabad, India - Remote/Onsite",
            fullTime: true,
            descriptionList: [
                "Enhanced performance and UI design by resolving over 500+ bugs in the web application.",
                "Engineered robust admin services to manage user traffic effectively, facilitating job creation within Survey Heart and ensuring the removal of abusive users.",
                "Designed and implemented efficient data structures for databases, integrating new features and managing API calls.",
                "Implemented a Testing Tools software to enhance the efficiency of the QA team.",
                "Created comprehensive API documentation using Postman, including testing APIs and backend code validation.",
                "Conducted rigorous UI Components Tests and Unit Tests using Jest to maintain high-quality code standards.",
                "Implemented Selenium automation tests to automate testing processes and improve web application reliability."
            ]
        },
        {
            logo: ryazIcon,
            position: "Web Developer Intern/Training",
            company: "RYAZIO TECHNOLOGIES LLP",
            timePeriod: "March 2021 - August 2021",
            place: "Ludhiana, India - Remote",
            fullTime: true,
            descriptionList: [
                "Worked on- React JS, HTML, CSS, JavaScript, React-Bootstrap, NodeJS, MongoDB, Express JS, Redux",
                "Developed an E-commerce website from scratch using MERN stack in a team of two. Managed development through all stages: Database and Software design etc.",
                "Cloned Google Meet with pixel perfect UI and responsive design."
            ]
        }
    ]
    return (
        <div id="experience" className={"experience"}>
            <h1>My Experience</h1>
            {React.Children.toArray(experienceData.map((data, index) => <ExperienceCard data={data} index={index}/>))}
        </div>
    )
}

const ExperienceCard = ({data, index}) => {
    const [height, setHeight] = useState(0)
    const ref = useRef()

    useEffect(() => {
        if (!height) {
            setHeight(ref.current?.offsetHeight - 60)
        }
    }, []);

    return (
        <div className={"experience-parent-card"}>
            <div style={{height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <span style={{width: "0", height: "30px", border: "1px solid #374151"}}/>
                <img src={data.logo}
                     alt={"profile"}/>
                {height ? <span style={{width: "0", height: height, border: "1px solid #374151"}}/> : null}
            </div>
            <div className={"experience-card"} ref={ref}>
                <div style={{display: "flex"}}>
                    <h3>{data.position}</h3>
                    {!index && <p className={"current"}>
                        Current
                    </p>}
                </div>
                <p>{data.company + " · " + (data.fullTime ? "Full-time" : "Part-time")}</p>
                <span>{data.timePeriod} | {data.place}</span>
                <ul>
                    {React.Children.toArray(data.descriptionList.map((desc) => <>
                        <li>{desc}</li>
                        <br/>
                    </>))}
                </ul>
            </div>
        </div>
    )
}

export default Experience
