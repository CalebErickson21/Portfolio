// Import dependencies
import { useNavigate } from 'react-router-dom';

// Import styles

// Import types
import type { HomeCardProps } from '@/utils/types';

// Home card component
const HomeCard = ({ title, description, image: SvgIcon, route }: HomeCardProps) => {

    // Helpers
    const navigate = useNavigate();

    return (
        <div className="w-full h-full items-center justify-between p-0 m-0
            rounded-lg shadow-sm hover:shadow-md shadow-accent hover:shadow-accent
            bg-light-surface dark:bg-dark-surface
            hover:-translate-y-[.1rem] transition duration-300 ease-in-out">
            
            {/* Tint Overlay */}
            <div className="flex flex-row w-full h-full p-2 rounded-lg
            hover:bg-accent/5">

                {/* Left Side */}
                <div className="flex w-1/4 h-full items-center justify-center p-10
                    text-light-text-primary dark:text-dark-text-primary">
                    <SvgIcon 
                        className="w-full h-full
                        [&_*]:!fill-current [&_*]:!stroke-current
                        transition duration-300 ease-in-out"
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-3/4 h-full justify-between">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-light-text-primary dark:text-dark-text-primary text-lg font-bold">{title}</h3>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-semibold">{description}</p>
                    </div>
                        
                    <div className="flex justify-end p-1">
                        <button
                        className="rounded-lg px-2 py-1 m-0
                        bg-accent/50
                        text-sm font-semibold hover:font-bold
                        text-light-text-secondary
                        dark:text-dark-text-secondary
                        cursor-pointer transition duration-300 ease-in-out"
                        onClick={() => navigate(route)}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;