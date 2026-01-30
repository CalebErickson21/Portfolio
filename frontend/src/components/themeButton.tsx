// Import dependencies
import type { ThemeContextType } from "@/utils/types";

// Import svgs
import Sun from '@/assets/images/sun.svg?react';
import Moon from '@/assets/images/moon.svg?react';

// Theme button component
const ThemeButton = ({ light, setLight }: ThemeContextType) => {
    return (
        <button
        className={`${light ? 'bg-dark-bg-primary text-dark-text-primary' : 'bg-light-bg-primary text-light-text-primary'} px-2 py-0 rounded-lg cursor-pointer`}
        onClick={() => setLight(!light)}>
            <div className='w-auto h-auto flex flex-row justify-center items-center mx-1 my-1'>
                {!light ? (
                    <div className={`w-full h-full items-center justify-center px-0 py-1`}>
                        <Sun 
                            className="w-4 h-4 m-0 p-0" 
                            style={{ 
                                fill: '#212529',
                                stroke: '#212529',
                                strokeWidth: '0.75',
                                filter: 'drop-shadow(0 0 0.5px currentColor)'
                            }} 
                        />
                    </div>
                ) : (
                <div className={`w-full h-full items-center justify-center px-0 py-1`}>
                    <Moon 
                        className="w-4 h-4 m-0 p-0" 
                        style={{ 
                            fill: '#F8F9FA',
                            filter: 'drop-shadow(0 0 0.5px currentColor)'
                        }} 
                    />
                </div>
                )}
            </div>
        </button>
    )
}

// Export component
export default ThemeButton;