// Import dependencies
import { useTheme } from "../contexts/Theme";
import { useEnvironment } from "../contexts/Environment";

// Import components
import ExperienceCard from "../components/ExperienceCard";

// Import images
import OKN from "../assets/images/okn.png";
import CAST from "../assets/images/cast.png";
import FLAI from "../assets/images/flai.png";


// About page component
const Experience = () => {

    // States
    const { light } = useTheme();
    const { screenSmall, screenMedium, screenLarge } = useEnvironment();

    // Experience Data
    const ALAAIData = {
        company: "Alabama Institute for the Advancement of Artificial Intelligence (ALAAI)",
        role: "AI Researcher + Full Stack Developer",
        description: "As an AI Researcher and Full Stack Developer at the Alabama Institute for the Advancement of Artificial Intelligence (ALAAI), I work on a variety of projects that are related to artificial intelligence. I am also responsible for the development of the company's website and other projects.",
        time: "May 2024 - Present",
        projects: [
            {
                title: "Open Knowledge Network (OKN)",
                description: "Open Knowledge Network (OKN) is a knowledge graph that is used to store and query data about the world. It is a project that I am working on with the Alabama Institute for the Advancement of Artificial Intelligence (ALAAI). I am working on this project as a part of my internship with ALAAI.",
                role: "Team Development Lead",
                image: OKN,
                stack: "Git ● Azure ● Python ● Numpy ● Sklearn ● Pandas ● Django ● React.js",
                production: "IN PROGRESS",
            },
            {
                title: "Computer Assisted Storytelling (CAST)",
                description: "Computer Assisted Storytelling (CAST) is a project that I am working on with the Alabama Institute for the Advancement of Artificial Intelligence (ALAAI). I am working on this project as a part of my internship with ALAAI.",
                role: "Frontend Developer + Log Analysis",
                image: CAST,
                stack: "Git ● Azure ● Python ● Numpy ● Pandas ● Django ● React.js",
                production: "http://172.190.213.180:8050/login",
            },
            {
                title: "Flood AI (FLAI)",
                description: "Open Knowledge Network (OKN) is a knowledge graph that is used to store and query data about the world. It is a project that I am working on with the Alabama Institute for the Advancement of Artificial Intelligence (ALAAI). I am working on this project as a part of my internship with ALAAI.",
                role: "Automated Ontology Developer",
                image: FLAI,
                stack: "Git ● Azure ● Python ● Numpy ● Pandas ● Django ● React.js",
                production: "IN PROGRESS",
            },
        ]
    }


    return (
        <div className={`flex flex-col w-full h-full min-h-screen`}>
            {/* Header */}
            <div className={`flex flex-col justify-center items-center text-center w-full h-full px-8 py-4 ${light ? "bg-gradient-to-br from-light-bg-primary to-light-accent" : "bg-gradient-to-br from-dark-bg-primary to-dark-accent"} transition duration-300 ease-in-out`}>
                <h1 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-2xl font-bold`}>Experience</h1>
                <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>A showcase of my professional journey - roles, responsibilities, and the skills I've sharpened along the way. Each experience reflects growth, collaboration, and the ability to adapt to new challenges.</h3>
            </div>

            {/* Alabama Institute for the Advancement of Artificial Intelligence (ALAAI) */}
            <div className={`flex flex-col w-full h-full ${light ? "bg-gradient-to-bl from-light-accent to-light-bg-primary" : "bg-gradient-to-bl from-dark-accent to-dark-bg-primary"} transition duration-300 ease-in-out`}>
                <div className={`flex flex-col w-full h-full px-8 py-4 text-center`}>
                    <h2 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-xl font-bold`}>{ALAAIData.company}</h2>
                    <h3 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{ALAAIData.role}</h3>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>{ALAAIData.description}</p>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>{ALAAIData.time}</p>
                </div>
                <div className={`grid ${screenSmall ? 'min-sm:grid-cols-1' : ''} ${screenMedium ? 'min-md:grid-cols-2' : ''} ${screenLarge ? 'min-lg:grid-cols-3' : ''} auto-rows-min gap-4 p-4 items-center`}>
                    {ALAAIData.projects.map((card, index) => (
                        <ExperienceCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

// Export component
export default Experience;