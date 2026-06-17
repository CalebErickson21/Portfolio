// Import providers
import { EnvironmentProvider } from "@/contexts/environment";

// App providers component
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return <EnvironmentProvider>{children}</EnvironmentProvider>;
};
