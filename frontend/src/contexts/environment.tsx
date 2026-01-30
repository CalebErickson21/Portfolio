// Import dependencies
import { createContext, useContext, useState, useEffect } from "react";
import type { EnvironmentContextType } from "../utils/types";

// Create context instance
const EnvironmentContext = createContext<EnvironmentContextType | null>(null);

// Environment provider
export const EnvironmentProvider = ({ children }: { children: React.ReactNode }) => {

    // States
    const [screenLarge, setScreenLarge ] = useState(false);
    const [screenMedium, setScreenMedium ] = useState(false);
    const [screenSmall, setScreenSmall ] = useState(false);

    // Global screen size check on load
    useEffect(() => {
        // Check screen size on load
        const screenLarge = window.matchMedia('(min-width: 992px)').matches; // Match tailwind config file
        const screenMedium = window.matchMedia('(min-width: 768px)').matches; // Match tailwind config file
        const screenSmall = window.matchMedia('(min-width: 576px)').matches; // Match tailwind config file
        setScreenLarge(screenLarge);
        setScreenMedium(screenMedium);
        setScreenSmall(screenSmall);

        // Add event listener for screen size changes
        const handler = () => {
            setScreenLarge(window.innerWidth >= 992);
            setScreenMedium(window.innerWidth >= 768);
            setScreenSmall(window.innerWidth >= 576);
        }
        window.addEventListener('resize', handler);

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handler);
    }, []);


    // Return context provider
    return (
        <EnvironmentContext.Provider value={{ screenLarge, setScreenLarge, screenMedium, setScreenMedium, screenSmall, setScreenSmall }}>
            { children }
        </EnvironmentContext.Provider>
    )
}

// Export context hook
export const useEnvironment = () => {
    return useContext(EnvironmentContext) as EnvironmentContextType;
}