// Import dependencies
import { useState } from "react";

// Import components
import PublicationDropdown from "@/components/publicationDropdown";

// Publications page component
const Publications = () => {
    // States
    const [expandedPublication, setExpandedPublication] = useState<number | null>(null);

    // Publications data
    const publicationsData = [
        {
            "id": 1,
            "title": "A Semi-Automated Framework for Flood Ontology Construction with an Application in Risk Communication",
            "authors": "Shenglin Li, Caleb Erickson, Michal Zajac, Xiaoming Guo, Qiuhua Duan, Jiaqi Gong",
            "description": "Introduces a semi-automated human-in-the-loop ontology engineering method combining expert schemas and LLM-driven refinement, then demonstrates how the resulting ontology can translate flood-data into actionable alerts (e.g., tailored advice for vulnerable populations).",
            "venue": "MDPI - Water",
            "year": "2025",
            "link": "https://doi.org/10.3390/w17192801"
        },
        {
            "id": 2,
            "title": "Unifying Flood-Risk Communication: Empowering Community Leaders Through AI-Enhanced, Contextualized Storytelling",
            "authors": "Michal Zajac, Connor Kulawiak, Shenglin Li, Caleb Erickson, Nathan Hubbell, Jiaqi Gong",
            "description": "Examines how fragmented flood information and information-overload hinder community leaders; proposes an AI-driven platform using knowledge graphs + retrieval-augmented generation to produce context-aware narratives (infographics, maps, cost/benefit) for flood-risk communication.",
            "venue": "MDPI - Hydrology",
            "year": "2025",
            "link": "https://doi.org/10.3390/hydrology12080204"
        }
    ];

    // Visible component
    return (
        <div id='academics-container' className={`flex flex-col transition duration-300 ease-in-out`}>

        <div className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>

            {/* Left side */}
            <div className="min-h-screen flex flex-col flex-1 items-center justify-center pt-2 pb-4">
                <div className="flex flex-1 flex-col w-5/6 my-4 mx-2 items-center justify-center text-center">
                    {/* Introduction */}
                    <h2 className="text-2xl font-bold mb-3 text-light-text-primary dark:text-dark-text-primary">Research & Publications</h2>

                    {/* Body */}
                    <h5 className="text-md mb-3 font-semibold text-light-text-primary dark:text-dark-text-primary">
                    I am actively engaged in research within the fields of artificial intelligence and machine learning, with a focus on developing innovative approaches to complex real-world problems. My current and forthcoming publications are associated with the Alabama Institute for the Advancement of Artificial Intelligence, reflecting collaborative work at the intersection of AI, knowledge systems, and applied data science.
                    </h5>
                </div>
            </div>

            {/* Right side */}
            <div className="min-h-screen flex flex-col flex-1 items-center justify-center pt-2 pb-4">
                <div className="flex flex-col w-5/6 my-4 mx-2 items-center justify-start">
                    {/* Publications List */}
                    <div className="flex flex-col w-full">
                        {publicationsData.map((publication) => (
                            <PublicationDropdown
                                key={publication.id}
                                {...publication}
                                expandedPublication={expandedPublication}
                                setExpandedPublication={setExpandedPublication}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Publications;