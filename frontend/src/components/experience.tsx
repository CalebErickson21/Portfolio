// Import dependencies
import { useTheme } from '../contexts/theme';

// Import styles

// Import types
import type { ExperienceCardProps } from '../utils/types';

// Home card component
const ExperienceCard = ({ id, title, description, image, role, stack, production, expandedCard, setExpandedCard }: ExperienceCardProps) => {

    // States
    const { light } = useTheme();

    // Helpers
    

    return (
        <div className={`w-full h-full p-0 m-0 rounded-lg ${
            light 
                ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                hover:-translate-y-[.1rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
            <div className={`flex flex-col w-full h-full items-center justify-center p-2 rounded-lg ${
                light 
                    ? 'hover:bg-light-accent/10'
                    : 'hover:bg-dark-accent/10'}
                }`}>
                
                {/* Header */}
                <div className="flex flex-col w-full h-auto items-center justify-start text-center mb-2 p-0">
                    <h2 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{title}</h2>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>{role}</p>
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
                                <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>{description}</p>
                            </div>
                        </div>
                    </>
                )}

                {/* Footer */}
                <div className="flex flex-col w-full h-auto items-center justify-end text-center mb-2 p-0">
                    {expandedCard === id ? (
                        <>
                            {/* Tech Stack */}
                            <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>Tech Stack</h3>
                            <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>{stack}</p>

                            {/* Buttons */}
                            <div className="flex flex-row w-full h-full items-center justify-end p-2">
                                <button
                                className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 m-2 cursor-pointer transition duration-300 ease-in-out`}
                                onClick={() => setExpandedCard(null)}>
                                    Close
                                </button>
                                {production !== "null" && (
                                <button
                                className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 m-2 cursor-pointer transition duration-300 ease-in-out`}
                                    onClick={() => window.open(production, '_blank')}>
                                        Production
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Buttons */}
                            <div className="flex flex-row w-full h-full items-center justify-end p-2">
                                <button
                                className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 m-2 cursor-pointer transition duration-300 ease-in-out`}
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