// Import dependencies
import { useTheme } from "../contexts/Theme";
import { useEnvironment } from "../contexts/Environment";

// Import components
import ProjectCard from "../components/ProjectCard";

// Import images
import MockStreet from "../assets/images/mockstreet.png";
import NeuralNetwork from "../assets/images/numbers.png";
import Portfolio from "../assets/images/portfolio.jpg";
import Launchpad from "../assets/images/launchpad.png";
import ScholarSync from "../assets/images/scholarSync.png";


// About page component
const Projects = () => {

    // States
    const { light } = useTheme();
    const {screenSmall, screenMedium, screenLarge} = useEnvironment();

    // Card Constants
    const cardData = [
        {
            title: "Launchpad",
            description: "Launchpad is a platform for students to manage their job applications, resume/cover letter reviews, and AI powered career advice. It consolidates all information across platforms such as LinkedIn, Indeed, and Handshake into a central hub with AI powered suggestions.",
            image: Launchpad,
            stack: "In Progress",
            production: "",
            github: "",
            time: "August 2025 - Present"
        },
        {
            title: "ScholarSync",
            description: "ScholarSync is a platform for students for students to connect with other students and form study groups and clubs for various subjects and personal interests. It uses knowledge graphs and machine learning graph algorithms to detect communities and give personalized recommendations via link prediction algorithms.",
            image: ScholarSync,
            stack: "In Progress",
            production: "",
            github: "",
            time: "August 2025 - Present"
        },
        {
            title: "Mock Street Trading Platform",
            description: "Practice trading platform that uses virtual money where users practice managing a stock portfolio. Built using ReactJS and SCSS for the frontend with NodeJS and PostGre SQL for the backend.",
            image: MockStreet,
            stack: "Git ● AWS ● PostGre SQL ● React.js ● Node.js ● SCSS",
            production: "https://mockstreetexchange.com",
            github: "https://github.com/CalebErickson21/mockstreeet",
            time: "March 2025"
        },
        {
            title: "Number Prediction Neural Network",
            description: "Recognizes handwritten digits using a neural network. Users draw on a 28x28 grid in the React frontend. The Python + Flask backend then runs a trained model on the grayscale data to predict the digit in real-time, combining an intuitive UI with responsive machine learning.",
            image: NeuralNetwork,
            stack: "Git ● Python ● Numpy ● Flask ● React.js",
            production: "https://numbers-beige.vercel.app/",
            github: "https://github.com/CalebErickson21/numbers",
            time: "April 2025"
        },
        {
            title: "Portfolio Interactive Website",
            description: "Interactive webpage built using Bootstrap libraries + custom Sass and JavaScript to display personal projects outside class. As a matter of fact, you are currently viewing the frontend of this project!",
            image: Portfolio,
            stack: "Git ● Typescript ● React ● TailwindCSS",
            production: "https://caleberickson21.github.io/",
            github: "https://github.com/CalebErickson21/portfolio",
            time: "August 2024 - Present"
        },
    ];

    return (
        <div className={`flex flex-col w-full h-full min-h-screen ${light ? "bg-gradient-to-br from-light-bg-primary via-light-accent to-light-accent" : "bg-gradient-to-br from-dark-bg-primary via-dark-accent to-dark-accent"} transition duration-300 ease-in-out`}>
            {/* Header */}
            <div className="flex flex-col justify-center items-center text-center w-full h-full px-8 py-4">
                <h1 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-2xl font-bold`}>Projects</h1>
                <h3 className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-lg font-semibold`}>From creative experiments to fully developed applications, my projects highlight both technical ability and problem-solving. Each one represents an idea I brought to life and a skill I strengthened.</h3>
            </div>

            {/* Projects */}
            <div className={`grid ${screenSmall ? 'min-sm:grid-cols-1' : ''} ${screenMedium ? 'min-md:grid-cols-2' : ''} ${screenLarge ? 'min-lg:grid-cols-3' : ''} auto-rows-min gap-4 m-2 p-4 items-center`}>
                {cardData.map((card, index) => (
                    <ProjectCard key={index} {...card} />
                ))}
            </div>
        </div>
    )
}

// Export component
export default Projects;