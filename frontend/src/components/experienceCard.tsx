// Import dependencies

// Import types
import type { ExperienceCardProps } from '@/utils/types';

// Home card component
const ExperienceCard = ({ id, title, description, image, role, stack, production, expandedCard, setExpandedCard }: ExperienceCardProps) => {

    return (
        <div
        className="w-full h-full items-center justify-center p-0 m-0 rounded-lg
            shadow-sm hover:shadow-md shadow-accent hover:shadow-accent
            bg-light-surface shadow-accent hover:
            dark:bg-dark-surface
            hover:-translate-y-[.1rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            
            {/* Tint Overlay */}
            <div className="flex flex-col w-full h-full p-2 rounded-lg
            hover:bg-accent/5">

                {/* Header */}
                <div className="flex flex-col w-full h-auto items-center justify-start text-center mb-2 p-0">
                    <h2 className="text-light-text-primary dark:text-dark-text-primary text-lg font-bold">{title}</h2>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-bold">{role}</p>
                </div>

                {/* Image */}
                <div className={`flex w-full h-full ${expandedCard === id ? 'h-[25dvh]' : 'h-[15dvh]'} items-center justify-start items-start mb-2 p-0`}>
                    <img src={image} alt={title} className="w-full h-full object-cover rounded-lg m-0 p-0" />
                </div>

                {expandedCard === id && (
                    <>  
                        {/* Body */}
                        <div className="flex flex-col w-full h-full items-center justify-start mb-2 p-0">
                            {/* Description */}
                            <div className="flex flex-col w-full h-full justify-start items-center text-center">
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-bold">{description}</p>
                            </div>
                        </div>
                    </>
                )}

                {/* Footer */}
                <div className="flex flex-col w-full h-auto items-center justify-end text-center mb-2 p-0">
                    {expandedCard === id ? (
                        <>
                            {/* Tech Stack */}
                            <h3 className="text-light-text-secondary dark:text-dark-text-secondary text-md font-bold">Tech Stack</h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-bold">{stack}</p>

                            {/* Buttons */}
                            <div className="flex flex-row w-full h-full items-center justify-end p-1">
                                <button
                                className="rounded-lg px-2 py-1 m-0
                                bg-accent/50
                                text-sm font-semibold hover:font-bold
                                text-light-text-secondary
                                dark:text-dark-text-secondary
                                cursor-pointer transition duration-300 ease-in-out"
                                onClick={() => setExpandedCard(null)}>
                                    Close
                                </button>

                                {production !== "null" && (
                                <button
                                className="rounded-lg px-2 py-1 m-2
                                bg-accent/50
                                text-sm font-semibold hover:font-bold
                                text-light-text-secondary
                                dark:text-dark-text-secondary
                                cursor-pointer transition duration-300 ease-in-out"
                                    onClick={() => window.open(production, '_blank')}>
                                        Production
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Buttons */}
                            <div className="flex flex-row w-full h-full items-center justify-end p-1">
                                <button
                                className="rounded-lg px-2 py-1 m-0
                                bg-accent/50
                                text-sm font-semibold hover:font-bold
                                text-light-text-secondary
                                dark:text-dark-text-secondary
                                cursor-pointer transition duration-300 ease-in-out"
                                onClick={() => setExpandedCard(id)}>
                                    Learn More
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;