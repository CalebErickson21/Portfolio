// Import dependencies
import { createContext, useContext, useState, useEffect } from "react";
import type { EnvironmentContextInterface, ScreenSizeType } from "../utils/types";

// Create context instance
const EnvironmentContext = createContext<EnvironmentContextInterface | null>(null);

// Environment provider
export const EnvironmentProvider = ({ children }: { children: React.ReactNode }) => {

    // States
    const [screenSize, setScreenSize] = useState<ScreenSizeType>('small');

    // Global screen size check on load
    useEffect(() => {
        // Check screen size on load
        const screenSize = window.matchMedia('(min-width: 1200px)').matches ? 'extra-large' : window.matchMedia('(min-width: 992px)').matches ? 'large' : window.matchMedia('(min-width: 768px)').matches ? 'medium' : 'small'; // Match tailwind config file
        setScreenSize(screenSize);

        // Add event listener for screen size changes
        const handler = () => {
            const screenSize: ScreenSizeType = window.innerWidth >= 992 ? 'large' : window.innerWidth >= 768 ? 'medium' : 'small'; // Match tailwind config file
            setScreenSize(screenSize);
        }
        window.addEventListener('resize', handler);

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handler);
    }, []);


    // Return context provider
    return (
        <EnvironmentContext.Provider value={{ screenSize, setScreenSize }}>
            { children }
        </EnvironmentContext.Provider>
    )
}

// Export context hook
export const useEnvironment = () => {
    return useContext(EnvironmentContext) as EnvironmentContextInterface;
}