// Import dependencies
import type { ThemeContextType } from "../utils/types";

// Import svgs
import Sun from '../assets/images/sun.svg?react';
import Moon from '../assets/images/moon.svg?react';

// Theme button component
const ThemeButton = ({ light, setLight }: ThemeContextType) => {
    return (
        <button
        className={`${light ? 'bg-dark-bg-primary text-dark-text-primary' : 'bg-light-bg-primary text-light-text-primary'} px-2 py-0 rounded-lg cursor-pointer`}
        onClick={() => setLight(!light)}>
            <div className='w-auto h-auto flex flex-row justify-center items-center mx-1 my-1'>
                <div className={`w-1/2 h-full items-center justify-center border-r ${light ? 'border-light-bg-primary' : 'border-dark-bg-primary'} px-1`}>
                    <Sun 
                        className="w-4 h-4 m-0 p-0" 
                        style={{ 
                            fill: light ? '#F8F9FA' : '#212529',
                            stroke: light ? '#F8F9FA' : '#212529',
                            strokeWidth: '0.5',
                            filter: 'drop-shadow(0 0 0.5px currentColor)'
                        }} 
                    />
                </div>
                <div className={`w-1/2 h-full items-center justify-center border-l ${light ? 'border-light-bg-primary' : 'border-dark-bg-primary'} px-1`}>
                    <Moon 
                        className="w-4 h-4 m-0 p-0" 
                        style={{ 
                            fill: light ? '#F8F9FA' : '#212529',
                            filter: 'drop-shadow(0 0 0.5px currentColor)'
                        }} 
                    />
                </div>
            </div>
        </button>
    )
}

// Export component
export default ThemeButton;