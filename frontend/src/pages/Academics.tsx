// Import dependencies
import { useTheme } from "../contexts/Theme";

// Import components

// Import images


// About page component
const Academics = () => {

    // States
    const { light } = useTheme();


    return (
        <div id='academics-container' className={`flex flex-col transition duration-300 ease-in-out`}>

            {/* Top */}
            <div className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>

                {/* Left side */}
                <div className={`min-lg:bg-gradient-to-br min-h-screen max-lg:bg-gradient-to-tl ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex flex-1 flex-col w-5/6 my-4 mx-2 items-center justify-center text-center">
                    {/* Introduction */}
                    <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Academic Excellence</h2>

                    {/* Body */}
                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                    I am pursuing a B.S. in Computer Science and an MBA with a concentration in Business Analytics at The University of Alabama, where I have maintained a perfect 4.0 GPA. My dedication to learning has been recognized with honors such as being named Most Outstanding Junior, consistent placement on the President’s List, and active participation in the Honors College. These achievements highlight my commitment to both technical and business education through the University’s STEM to MBA program.
                    </h5>

                    <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Leadership in Student Organizations</h2>

                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                    I serve as a Developer and Executive Officer for the Alabama AI Club, where I help lead events, mentor members on applied AI concepts, and foster collaboration between students interested in artificial intelligence. In this role, I bridge technical expertise with organizational leadership, helping to create a community where students can learn from one another and explore real-world applications of AI.
                    </h5>

                    <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Engagement in CS Community</h2>

                    <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                    Beyond leadership, I am also an active member of the Alabama Software Development Club, where I collaborate with peers on coding projects and contribute to workshops that strengthen the technical community at UA. These experiences have given me the opportunity to grow alongside other motivated students while expanding my skills in teamwork, communication, and project development.
                    </h5>
                    </div>
                </div>

                {/* Right side */}
                <div className={`bg-gradient-to-bl min-h-screen ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex flex-col w-full px-4 items-center justify-center">

                        <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Key Coursework</h2>
                        <ul className={`flex flex-col gap-2 list-disc pl-4 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                            <li>CS 483 - Foundations of Machine Learning</li>
                            <li>CS 451 - Advanced Data Analytics</li>
                            <li>CS 470 - Algorithm Design and Analysis</li>
                            <li>ST 560 - Advanced Statistical Design</li>
                            <li>MATH 237 - Linear Algebra</li>
                            <li>MATH 301 - Discrete Mathematics</li>
                            <li>CS 300 - Operating Systems</li>
                            <li>CS 201 - Data Structures and Algorithms</li>
                            <li>ECE 383 - Microcomputers</li>
                            <li>ECE 380 - Digital Logic</li>
                            <li>OM 500 - Advanced Analytical Spreadsheet Modeling</li>
                            <li>GBA 571 - STEM Business Honors</li>
                            <li>MGT 517 - Leadership and Ethics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export component
export default Academics;