// Import providers
import { ThemeProvider } from '@/contexts/theme'
import { EnvironmentProvider } from '@/contexts/environment'

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