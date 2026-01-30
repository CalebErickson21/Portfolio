// Import dependencies
import { useTheme } from "../contexts/theme";
import { useEnvironment } from "../contexts/environment";
import { useState } from "react";

// Import components
import ExperienceCard from "../components/experienceCard";

// Import images
import OKN from "../assets/images/okn.png";
import CAST from "../assets/images/cast.png";
import FLAI from "../assets/images/flai.png";
import QuantHub from "../assets/images/quanthub.png";


// About page component
const Experience = () => {

    // States
    const { light } = useTheme();
    const { screenLarge } = useEnvironment();

    // States
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    // Experience Data
    const ALAAIData = {
        company: "Alabama Institute for the Advancement of Artificial Intelligence (ALAAI)",
        role: "AI Researcher + Full Stack Principal Developer",
        description: "As an AI Researcher and Full Stack Developer at the Alabama Institute for the Advancement of Artificial Intelligence (ALAAI), I work across three major research and production-level AI systems, designing and deploying end-to-end pipelines that integrate knowledge graphs, vector embeddings, and large language models (LLMs). My work spans autonomous data integration (including building a 50,000-node knowledge graph from five multidomain federal datasets), RAG architectures designed to reduce hallucination in generative outputs, semi-automated ontology engineering, and full-stack web applications deployed across four university courses. I collaborate closely with faculty and research teams to convert complex, heterogeneous datasets into interactive, explainable, and user-centered AI tools that support public health research, educational innovation, and applied AI development.",
        time: "May 2024 - Present",
        projects: [
            {
                id: 1,
                title: "Open Knowledge Network (OKN)",
                description: "The NSF-funded Open Knowledge Network (OKN) integrates five federally curated datasets on mental health, substance use, and medical expenditures into a unified, queryable knowledge environment. I led development of the data integration and graph-construction pipeline, producing a 50,000-node knowledge graph used to support contextualized RAG workflows. The system enables natural-language querying over heterogeneous public-health data with reduced hallucinations and improved traceability through structured graph grounding.",
                role: "Team Development Lead",
                image: OKN,
                stack: "Git ● Azure ● Python ● Numpy ● Sklearn ● Pandas ● Django ● React.js",
                production: "http://20.55.70.167/",
            },
            {
                id: 2,
                title: "Computer Assisted Storytelling (CAST)",
                description: "CAST is a storytelling and data-visualization platform deployed across four university courses at UA and UMBC. I serve as the principal full-stack developer and built AI-driven narrative guidance tools using embeddings and LLMs. I also designed and executed analytics pipelines to process platform log data, identifying behavioral patterns correlated with student performance and grade outcomes. The platform supports educational research while giving students hands-on experience with AI-assisted data storytelling.",
                role: "Principal Developer + Log Analysis",
                image: CAST,
                stack: "Git ● Azure ● Python ● Numpy ● Pandas ● Django ● React.js",
                production: "https://www.cast-storystudio.com/login",
            },
            {
                id: 3,
                title: "Flood AI (FLAI)",
                description: "FLAI develops a semi-automated, human-in-the-loop ontology framework for improving flood-risk communication. I engineered the ontology generation pipeline, expanding expert-defined seed classes through LLM-generated competency questions, embedding-based filtering, and structured schema refinement. I also integrated automated instance population from large collections of flood-event articles. The resulting ontology supports grounded narrative generation for public flood-risk messaging and contributes to peer-reviewed research in hydrology and risk communication.",
                role: "Automated Ontology Developer",
                image: FLAI,
                stack: "Git ● Azure ● Python ● Numpy ● Pandas ● Django ● React.js",
                production: "http://20.83.176.95/login",
            },
        ]
    }

    const QuantHubData = {
        company: "QuantHub",
        role: "Market Research + Software Development Industry Project",
        description: "At QuantHub, I conducted market research to identify opportunities for expanding AI education across college campuses. I developed a webscraper that collects course registration data from the University of Alabama's course registration system. The scraper is used to collect data for an industry-sponsored project on the impact of AI on course registration.",
        time: "August 2024 - December 2024",
        projects: [
            {
                id: 1,
                title: "Course Registration Webscraper",
                description: "I developed a webscraper that collects course registration data from the University of Alabama's course registration system. The scraper is used to collect data for an industry-sponsored project on the impact of AI on course registration.",
                role: "Software Developer",
                image: QuantHub,
                stack: "Git ● Docker ● PostgreSQL ● Python ● BeautifulSoup ● Selenium",
                production: "null",
            }
        ]
    }


    return (
        <div className={`flex flex-col w-full h-full min-h-screen`}>
            {/* Header */}
            <div className={`flex flex-col justify-center items-center text-center w-full h-full px-8 py-4 ${light ? "bg-gradient-to-br from-light-bg-primary to-light-accent" : "bg-gradient-to-br from-dark-bg-primary to-dark-accent"} transition duration-300 ease-in-out`}>
                <h1 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-2xl font-bold`}>Experience</h1>
                <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>A showcase of my professional journey - roles, responsibilities, and the skills I've sharpened along the way. Each experience reflects growth, collaboration, and the ability to adapt to new challenges.</h3>
                <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>Because the source code for these projects is proprietary, I cannot provide a direct link to the Github repositories. However, you can view the production versions of the projects by clicking the "Production" button on each project card. If you have any questions or would like to learn more about a project, please feel free to <a href="/contact" className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold underline hover:font-bold`}>contact me</a>.</h3>
            </div>

            {/* Alabama Institute for the Advancement of Artificial Intelligence (ALAAI) */}
            <div className={`flex w-full h-full ${screenLarge ? 'flex-row' : 'flex-col'} items-center justify-center ${light ? "bg-gradient-to-bl from-light-accent to-light-bg-primary" : "bg-gradient-to-bl from-dark-accent to-dark-bg-primary"} transition duration-300 ease-in-out`}>
                <div className={`flex flex-col items-center justify-center h-full ${screenLarge ? 'w-1/2' : 'w-full'} px-8 py-4 text-center`}>
                    <h2 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-xl font-bold`}>{ALAAIData.company}</h2>
                    <h3 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{ALAAIData.role}</h3>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>{ALAAIData.time}</p>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>{ALAAIData.description}</p>
                </div>

                
                <div className={`flex h-full ${screenLarge ? 'w-1/2' : 'w-full'}`}>
                    {expandedCard === null ? (
                        <div className="flex h-full w-full grid grid-cols-2 auto-rows-min gap-4 m-4 px-4 items-center">
                            {ALAAIData.projects.map((card, index) => (
                                <ExperienceCard key={index} {...card} expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-full w-full m-4 px-4 items-center">
                            {ALAAIData.projects
                                .filter(card => card.id === expandedCard)
                                .map((card, index) => (
                                    <ExperienceCard key={index} {...card} expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* QuantHub */}
            <div className={`flex w-full h-full ${screenLarge ? 'flex-row' : 'flex-col'} items-center justify-center ${light ? "bg-gradient-to-tl from-light-accent to-light-bg-primary" : "bg-gradient-to-tl from-dark-accent to-dark-bg-primary"} transition duration-300 ease-in-out`}>
                <div className={`flex flex-col items-center justify-center h-full ${screenLarge ? 'w-1/2' : 'w-full'} px-8 py-4 text-center`}>
                    <h2 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-xl font-bold`}>{QuantHubData.company}</h2>
                    <h3 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{QuantHubData.role}</h3>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>{QuantHubData.time}</p>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>{QuantHubData.description}</p>
                </div>

                
                <div className={`flex h-full ${screenLarge ? 'w-1/2' : 'w-full'}`}>
                    {expandedCard === null ? (
                        <div className="flex h-full w-full grid grid-cols-1 auto-rows-min gap-4 m-4 px-4 items-center">
                            {QuantHubData.projects.map((card, index) => (
                                <ExperienceCard key={index} {...card} expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-full w-full m-4 px-4 items-center">
                            {QuantHubData.projects
                                .filter(card => card.id === expandedCard)
                                .map((card, index) => (
                                    <ExperienceCard key={index} {...card} expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
                                ))}
                        </div>
                    )}
                </div>
            </div>
                
        </div>
    )
}

// Export component
export default Experience;