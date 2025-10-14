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
                description: "The Open Knowledge Network (OKN) is an NSF-funded research project that aims to integrate federally curated datasets on mental health, substance use, and medical expenditures into a unified, queryable knowledge system that leverages knowledge graphs, vector embeddings, and large language models (LLMs) to create a contextualized Retrieval-Augmented Generation (RAG) framework. This system enables users to ask natural language questions and receive grounded, explainable responses based on real data, lowering the barrier to access complex public health information and supporting data-driven insights into the social determinants of health resilience.",
                role: "Team Development Lead",
                image: OKN,
                stack: "Git ● Azure ● Python ● Numpy ● Sklearn ● Pandas ● Django ● React.js",
                production: "IN PROGRESS",
            },
            {
                title: "Computer Assisted Storytelling (CAST)",
                description: "CAST is a data generation and storytelling platform deployed across six courses at UMBC and the University of Alabama. It leverages vector embeddings and large language models (LLMs) to help students develop data visualization and storytelling skills with AI-guided assistance. The platform also serves as a research tool to study how AI can enhance educational outcomes. My contributions to CAST include both frontend and backend development, as well as log data analysis to identify patterns in user behavior and correlate them with student performance and grade outcomes.",
                role: "Frontend Developer + Log Analysis",
                image: CAST,
                stack: "Git ● Azure ● Python ● Numpy ● Pandas ● Django ● React.js",
                production: "https://www.cast-storystudio.com/login",
            },
            {
                title: "Flood AI (FLAI)",
                description: "In the FLAI project, I focused on the knowledge graph / ontology generation pipeline, building on a semi-automated, human-in-the-loop framework for constructing a flood risk ontology that bridges technical hydrological data and public communication. The methodology begins with expert-defined seed classes, then leverages LLMs to generate competency questions, propose new concepts and semantic relations, and enrich the schema using authoritative sources (e.g. FEMA, NWS). I worked on refining LLM outputs via embedding-based filtering, human validation, and hierarchical placement of entities, and integrated instance population from web-scraped flood event articles. The result is a rich, expressive ontology schema used to support contextualized, grounded narrative generation for flood risk messaging.",
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