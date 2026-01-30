// Import providers
import { ThemeProvider } from './theme'
import { EnvironmentProvider } from './environment'

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