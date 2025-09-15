// Import dependencies
import { useTheme } from '../contexts/Theme';
import { useNavigate } from 'react-router-dom';

// Import styles

// Import types
import type { HomeCardProps } from '../utils/types';

// Home card component
const HomeCard = ({ title, description, image: SvgIcon, route }: HomeCardProps) => {

    // States
    const { light } = useTheme();

    // Helpers
    const navigate = useNavigate();

    return (
        <div className={`flex flex-row w-full h-full items-center justify-between p-2 rounded-lg ${light ? 'bg-light-bg-secondary hover:shadow-light-text-secondary' : 'bg-dark-bg-secondary hover:shadow-dark-text-secondary'} hover:-translate-y-[.01rem] hover:shadow-xl hover:brightness-95 transition duration-300 ease-in-out`}>
            {/* Left Side */}
            <div className="w-1/4 h-full p-10 flex items-center justify-center">
                <SvgIcon 
                    className="w-full h-full transition duration-300 ease-in-out [&_*]:!fill-current [&_*]:!stroke-current"
                    style={{
                        fill: light ? '#181A1B' : '#F9FAFB',
                        stroke: light ? '#181A1B' : '#F9FAFB',
                        color: light ? '#181A1B' : '#F9FAFB',
                    }}
                />
            </div>

            {/* Right Side */}
            <div className="flex flex-col w-3/4 h-full justify-between">
                <div className="flex flex-col justify-start">
                    <h3 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold`}>{title}</h3>
                    <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>{description}</p>
                </div>
                    
                <div className="flex justify-end m-2">
                    <button
                    className={`${light ? 'bg-dark-bg-secondary text-dark-text-secondary' : 'bg-light-bg-secondary text-light-text-secondary'} text-sm font-semibold hover:font-bold rounded-lg px-2 py-1 cursor-pointer transition duration-300 ease-in-out`}
                    onClick={() => navigate(route)}>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;