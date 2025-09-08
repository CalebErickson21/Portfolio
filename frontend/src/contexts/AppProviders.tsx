// Import providers
import { ThemeProvider } from './Theme'

// App providers component
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            { children }
        </ThemeProvider>
    )
}