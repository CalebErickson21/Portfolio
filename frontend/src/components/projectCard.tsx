// Import dependencies
import { useTheme } from '@/contexts/theme';

// Import styles

// Import types
import type { ProjectCardProps } from '@/utils/types';

// Home card component
const ProjectCard = ({ title, description, image, stack, production, github, time }: ProjectCardProps) => {

    // States
    const { light } = useTheme();

    // Helpers

    return (
        <div className={`w-full h-full p-0 m-0 rounded-lg ${ 
            light 
                ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                hover:-translate-y-[.1rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
            
            {/* Tint Overlay*/}
            <div className={`flex flex-col w-full h-full items-center justify-between p-2 rounded-lg ${
                light 
                    ? 'hover:bg-light-accent/10'
                    : 'hover:bg-dark-accent/10'}
                }`}>
            {/* Header */}
            <div className="flex flex-col w-full h-auto items-center justify-start p-2">
                <h2 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{title}</h2>
                <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>{time}</p>
            </div>

            {/* Image */}
            <div className="flex flex-row w-full h-[20dvh] items-center justify-center">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            
            {/* Body */}
            <div className="flex flex-row w-full h-full items-center justify-center text-center p-2">
                <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>{description}</p>
            </div>

            {/* Footer */}
            <div className="flex flex-col w-full h-auto items-center justify-end text-center p-2">
                {/* Tech Stack */}
                <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>Tech Stack</h3>
                <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-bold`}>{stack}</p>

                {/* Buttons */}
                <div className="flex flex-row w-full h-full items-center justify-end p-2">
                    <button
                    className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 m-2 cursor-pointer transition duration-300 ease-in-out`}
                    onClick={() => window.open(github, '_blank')}>
                        Github
                    </button>
                    <button
                    className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 m-2 cursor-pointer transition duration-300 ease-in-out`}
                    onClick={() => window.open(production, '_blank')}>
                        Production
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectCard;