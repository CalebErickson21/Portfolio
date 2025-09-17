// Import dependencies
import { useTheme } from '../contexts/Theme';

// Import styles

// Import types
import type { ExperienceCardProps } from '../utils/types';

// Home card component
const ExperienceCard = ({ title, description, image, role, stack, production }: ExperienceCardProps) => {

    // States
    const { light } = useTheme();

    // Helpers

    return (
        <div className={`flex flex-col w-full h-full items-center justify-center p-2 rounded-lg ${light ? 'bg-light-bg-secondary hover:shadow-light-text-secondary' : 'bg-dark-bg-secondary hover:shadow-dark-text-secondary'} hover:-translate-y-[.01rem] hover:shadow-xl hover:brightness-95 transition duration-300 ease-in-out`}>
            
            {/* Header */}
            <div className="flex flex-col w-full h-full items-center justify-start mb-2 p-0">
                <h2 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{title}</h2>
                <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>{role}</p>
            </div>

            {/* Image */}
            <div className="flex flex-row w-full h-full items-center justify-start mb-2 p-0">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg m-0 p-0" />
            </div>
            
            {/* Body */}
            <div className="flex flex-col w-full h-full items-center justify-start mb-2 p-0">
                {/* Description */}
                <div className="flex flex-col w-full h-full justify-start items-center">
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>{description}</p>
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col w-full h-full items-center justify-end text-center mb-2 p-0">
                {/* Tech Stack */}
                <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>Tech Stack</h3>
                <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>{stack}</p>

                {/* Buttons */}
                <div className="flex flex-row w-full h-full items-center justify-end p-2">
                    <button
                    className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 m-2 cursor-pointer transition duration-300 ease-in-out`}
                    onClick={() => window.open(production, '_blank')}>
                        Production
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;