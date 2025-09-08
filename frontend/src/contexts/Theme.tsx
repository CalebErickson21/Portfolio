// Import dependencies
import { createContext, useContext, useState, useEffect } from "react";
import type { ThemeContextType } from "../utils/types";

// Create context instance
const ThemeContext = createContext<ThemeContextType | null>(null);

// Theme provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [light, setLight ] = useState(true);

    // Global theme check on load
    useEffect(() => {
        // Check theme on load
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
        setLight(systemTheme);
    }, []);

    // Return context provider
    return (
        <ThemeContext.Provider value={{ light, setLight }}>
            { children }
        </ThemeContext.Provider>
    )
}

// Export context hook
export const useTheme = () => {
    return useContext(ThemeContext) as ThemeContextType;
}