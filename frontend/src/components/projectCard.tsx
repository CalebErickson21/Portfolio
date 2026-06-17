// Import dependencies

// Import styles

// Import types
import type { ProjectCardProps } from "@/utils/types";

// Home card component
const ProjectCard = ({
    title,
    description,
    image,
    stack,
    production,
    github,
    time,
}: ProjectCardProps) => {
    // States

    // Helpers

    return (
        <div
            className="w-full h-full items-center justify-between p-0 m-0
            rounded-lg shadow-sm hover:shadow-md shadow-accent hover:shadow-accent
            bg-light-surface dark:bg-dark-surface
            hover:-translate-y-[.1rem] transition duration-300 ease-in-out"
        >
            {/* Tint Overlay */}
            <div
                className="flex flex-col w-full h-full p-2 rounded-lg
            hover:bg-accent/5"
            >
                {/* Header */}
                <div className="flex flex-col w-full h-auto items-center justify-start p-2">
                    <h2 className="text-light-text-primary dark:text-dark-text-primary text-lg font-bold">
                        {title}
                    </h2>
                    <p className="text-light-text-primary dark:text-dark-text-primary text-md font-semibold">
                        {time}
                    </p>
                </div>

                {/* Image */}
                <div className="flex flex-row w-full h-[20dvh] items-center justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Body */}
                <div className="flex flex-row w-full h-full items-center justify-center text-center p-2">
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-semibold">
                        {description}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex flex-col w-full h-auto items-center justify-end text-center p-2">
                    {/* Tech Stack */}
                    <h3 className="text-light-text-secondary dark:text-dark-text-secondary text-md font-bold">
                        Tech Stack
                    </h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-bold">
                        {stack}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-row w-full h-full items-center justify-end p-1">
                        <button
                            className="rounded-lg px-2 py-1 m-2
                        bg-accent/50
                        text-sm font-semibold hover:font-bold
                        text-light-text-secondary
                        dark:text-dark-text-secondary
                        cursor-pointer transition duration-300 ease-in-out"
                            onClick={() => window.open(github, "_blank")}
                        >
                            Github
                        </button>
                        <button
                            className="rounded-lg px-2 py-1 m-2
                        bg-accent/50
                        text-sm font-semibold hover:font-bold
                        text-light-text-secondary
                        dark:text-dark-text-secondary
                        cursor-pointer transition duration-300 ease-in-out"
                            onClick={() => window.open(production, "_blank")}
                        >
                            Production
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
