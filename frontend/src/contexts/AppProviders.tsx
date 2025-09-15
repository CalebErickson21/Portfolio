// Import providers
import { ThemeProvider } from './Theme'
import { EnvironmentProvider } from './Environment'

// App providers component
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <EnvironmentProvider>
            <ThemeProvider>
                { children }
            </ThemeProvider>
        </EnvironmentProvider>
    )
}