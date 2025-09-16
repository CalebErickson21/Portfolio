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
        <div id='home-container' className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>
            {/* Left side */}
            <div className={`bg-gradient-to-br to-accent ${light ? "from-light-bg-primary via-light-bg-secondary" : "from-dark-bg-primary via-dark-bg-secondary"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
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

                <div className="flex flex-1 w-full p-6 text-center font-semibold">
                Hello! I am Caleb Erickson, a senior Computer Science student at the University of Alabama on the STEM to MBA path, maintaining a 4.0 GPA while bridging technology and business strategy. As an AI Researcher at the Alabama Institute for the Advancement of Artificial Intelligence, I work across projects in knowledge graphs, storytelling platforms, and disaster preparedness, with publications underway. My experience spans building autonomous RAG pipelines, full-stack platforms, and AI-driven applications using Python, Azure, React, and AWS. Recent personal projects include a custom CNN digit recognition system with a real-time web interface and MockStreet Exchange, a full-stack stock trading platform hosted on AWS. I am passionate about creating impactful solutions that merge innovation, business needs, and advanced AI research.
                </div>
            </div>


            {/* Right side */}
            <div className={`bg-gradient-to-bl to-accent ${light ? "from-light-bg-primary via-light-bg-secondary" : "from-dark-bg-primary via-dark-bg-secondary"} flex flex-col flex-1 items-center justify-start pb-8 pt-2`}>
                {cardData.map((card, index) => (
                    <div className="flex flex-1 w-5/6 my-4 mx-2">
                        <HomeCard key={index} {...card} />
                    </div>
                ))}  
            </div>
        </div>
    )
}

// Export component
export default Home;