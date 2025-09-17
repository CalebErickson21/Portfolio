// Import dependencies
import { useEnvironment } from "../contexts/Environment";

// Import components
import HomeCard from "../components/HomeCard";

// Import images
import headshot from "../assets/images/headshot.jpg";
import skiing from "../assets/images/skiing.jpg";
import grad from "../assets/images/grad.jpg";

// Import SVGs as React components
import Experience from "../assets/images/experience.svg?react";
import Projects from "../assets/images/projects.svg?react";
import Academics from "../assets/images/academics.svg?react";
import Contact from "../assets/images/contact.svg?react";
import { useTheme } from "../contexts/Theme";

// Import styles

// Home page component
const Home = () => {

    // Contexts
    const { screenLarge } = useEnvironment();
    const { light } = useTheme();

    // Card data
    const cardData = [
        {
            title: "Experience",
            description: "A showcase of my professional journey - roles, responsibilities, and the skills I've sharpened along the way. Each experience reflects growth, collaboration, and the ability to adapt to new challenges.",
            image: Experience,
            route: "/experience"
        },
        {
            title: "Projects",
            description: "From creative experiments to fully developed applications, my projects highlight both technical ability and problem-solving. Each one represents an idea I brought to life and a skill I strengthened.",
            image: Projects,
            route: "/projects"
        },
        {
            title: "Academics",
            description: "My academic foundation has been shaped through coursework, research, and continuous learning. This background provides the knowledge and discipline that fuels my professional and creative work.",
            image: Academics,
            route: "/academics"
        },
        {
            title: "Contact Me",
            description: "Let's connect - whether for opportunities, collaborations, or just to chat.",
            image: Contact,
            route: "/contact"
        },
    ];


    return (        
        <div id='home-container' className={`flex flex-col min-h-screen transition duration-300 ease-in-out min-h-screen`}>

            {/* Top */}
            <div className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>
                {/* Left side */}
                <div className={`bg-gradient-to-br ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex w-full px-4 items-center justify-center">
                        <div className="flex flex-row w-full h-full items-center justify-center">
                            {/* Left side */}
                            <div className="w-1/2 h-full m-3 rounded-md items-center justify-center">
                                <img src={headshot}
                                alt="Profile"
                                className={`w-full h-full object-cover rounded-md hover:-translate-y-[.2rem] hover:-translate-x-[.2rem] transition duration-300 ease-in-out hover:shadow-lg ${light ? "hover:shadow-light-text-secondary" : "hover:shadow-dark-text-secondary"}`} />
                            </div>

                            {/* Right side */}
                            {screenLarge && (
                                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                                    <div className="w-full h-1/2 m-3 rounded-md items-center justify-center">
                                        <img src={skiing}
                                        alt="Skiing"
                                        className={`w-full h-full object-cover rounded-md hover:-translate-y-[.2rem] hover:translate-x-[.2rem] transition duration-300 ease-in-out hover:shadow-lg ${light ? "hover:shadow-light-text-secondary" : "hover:shadow-dark-text-secondary"}`} />
                                    </div>
                                    <div className="w-full h-1/2 m-3 rounded-md items-center justify-center">
                                        <img src={grad}
                                        alt="Graduation"
                                        className={`w-full h-full object-cover rounded-md hover:translate-y-[.2rem] hover:translate-x-[.2rem] transition duration-300 ease-in-out hover:shadow-lg ${light ? "hover:shadow-light-text-secondary" : "hover:shadow-dark-text-secondary"}`} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className={`min-lg:bg-gradient-to-bl max-lg:bg-gradient-to-tr ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex flex-1 flex-col w-5/6 my-4 mx-2 items-center justify-center text-center">
                    {/* Introduction */}
                    <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Welcome to my portfolio!</h2>

                    {/* Body */}
                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        I’m Caleb Erickson, a senior Computer Science student at the University of Alabama on the STEM to MBA path, maintaining a 4.0 GPA while bridging technology and business strategy. As an AI Researcher at the Alabama Institute for the Advancement of Artificial Intelligence, I contribute to projects in knowledge graphs, storytelling platforms, and disaster preparedness, with publications in progress. My work focuses on building autonomous Retrieval-Augmented Generation (RAG) pipelines and deploying AI solutions that connect cutting-edge research to real-world applications
        
                    </h5>

                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        I also gained industry experience at QuantHub, where I developed interactive AI lesson modules within a web application platform powered by AI pipelines, while conducting market research to identify opportunities for expanding AI education across college campuses. These experiences combined technical development with educational innovation, giving me perspective on how to scale AI solutions for impact.
                    </h5>

                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        Beyond research and internships, I have built full-stack platforms and AI-driven applications using Python, React, Azure, and AWS. My recent projects include a custom CNN digit recognition system with a real-time web interface and MockStreet Exchange, a full-stack stock trading simulation platform hosted on AWS.
                    </h5>

                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                    I am passionate about creating impactful solutions that merge advanced AI research, robust software engineering, and business strategy to address meaningful challenges.
                    </h5>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>
                {/* Bottom left */}
                <div className={`bg-gradient-to-tr max-lg:bg-gradient-to-br ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-start min-lg:pb-8 pt-2`}>
                    {cardData.slice(0, 2).map((card, index) => (
                        <div className="flex flex-1 w-5/6 my-4 ml-2 mr-1">
                            <HomeCard key={index} {...card} />
                        </div>
                    ))}  
                </div>

                {/* Bottom right */}
                <div className={`bg-gradient-to-tl max-lg:bg-gradient-to-tr ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-start pb-8 pt-2`}>
                    {cardData.slice(2, 4).map((card, index) => (
                        <div className="flex flex-1 w-5/6 my-4 ml-1 mr-2">
                            <HomeCard key={index} {...card} />
                        </div>
                    ))}  
                </div>
            </div>
        </div>
    )
}

// Export component
export default Home;