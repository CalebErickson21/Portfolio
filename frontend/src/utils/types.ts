// Theme button interface
export type ThemeContextType = {
    light: boolean;
    setLight: React.Dispatch<React.SetStateAction<boolean>>;
}

// Environment context interface
export type EnvironmentContextType = {
    screenLarge: boolean;
    setScreenLarge: React.Dispatch<React.SetStateAction<boolean>>;
    screenMedium: boolean;
    setScreenMedium: React.Dispatch<React.SetStateAction<boolean>>;
    screenSmall: boolean;
    setScreenSmall: React.Dispatch<React.SetStateAction<boolean>>;
}

// Home card props
export type HomeCardProps = {
    title: string;
    description: string;
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    route: string;
}

// Project Card Props
export type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    stack: string;
    production: string;
    github: string;
    time: string;
}

// Experience Card Props
export type ExperienceCardProps = {
    title: string;
    description: string;
    image: string;
    role: string;
    stack: string;
    production: string;
}
