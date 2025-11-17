// Import dependencies
import { Mail, Phone, Globe, Linkedin, Github, FileText } from "lucide-react";
import { useTheme } from "../contexts/Theme";
import { useNavigate } from "react-router-dom";

// Import components

// Import images
import ResumeFile from "../assets/downloadables/Caleb_Erickson_Resume.pdf";

// About page component
const Contact = () => {

    // States
    const { light } = useTheme();
    const navigate = useNavigate();


    return (
        <div id='contact-container' className={`flex flex-col transition duration-300 ease-in-out`}>

            {/* Top */}
            <div className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>

                {/* Left side */}
                <div className={`bg-gradient-to-tr min-h-screen ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4 px-6`}>
                    <div className="flex flex-1 flex-col w-5/6 my-4 mx-2 items-center justify-center text-center">
                        {/* Introduction */}
                        <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Contact Me</h2>
                        
                        {/* Body */}
                        <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        I’m always open to connecting, whether it’s about opportunities, 
                        collaborations, or just to chat. The best way to reach me is by email, 
                        but feel free to explore my portfolio and professional profiles.
                        </h5>
                    </div>
                </div>

                {/* Right side */}
                <div className={`min-lg:bg-gradient-to-tl max-lg:bg-gradient-to-br min-h-screen ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex flex-1 flex-col w-5/6 my-4 mx-2 items-center justify-center text-center">
                        <ul className="flex flex-col gap-4 text-lg">

                            {/* Resume */}
                            <li className={`w-full h-full p-0 m-0 rounded-lg ${ 
                                light 
                                    ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                                    : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                                    hover:-translate-y-[.05rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                                {/* Tint Overlay */}
                                <div className={`flex items-center gap-3 w-full h-full p-2 rounded-lg ${light ? "hover:bg-light-accent/10" : "hover:bg-dark-accent/10"} transition duration-300 ease-in-out`}>
                                    <FileText className={`w-5 h-5 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`} />
                                    <a href={ResumeFile} download className={`font-semibold hover:font-bold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                                        Resume
                                        </a>
                                </div>
                            </li>

                            {/* Email */}
                            <li className={`w-full h-full p-0 m-0 rounded-lg ${ 
                                light 
                                    ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                                    : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                                    hover:-translate-y-[.05rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                                {/* Tint Overlay */}
                                <div className={`flex items-center gap-3 w-full h-full p-2 rounded-lg ${light ? "hover:bg-light-accent/10" : "hover:bg-dark-accent/10"} transition duration-300 ease-in-out`}>
                                    <Mail className={`w-5 h-5 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`} />
                                    <a href="mailto:crerickson@crimson.ua.edu" className={`font-semibold hover:font-bold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                                        crerickson@crimson.ua.edu
                                    </a>
                                </div>
                            </li>

                            {/* Phone */}
                            <li className={`w-full h-full p-0 m-0 rounded-lg ${ 
                                light 
                                    ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                                    : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                                    hover:-translate-y-[.05rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                                {/* Tint Overlay */}
                                <div className={`flex items-center gap-3 w-full h-full p-2 rounded-lg ${light ? "hover:bg-light-accent/10" : "hover:bg-dark-accent/10"} transition duration-300 ease-in-out`}>
                                    <Phone className={`w-5 h-5 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`} />
                                    <span className={`font-semibold hover:font-bold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                                        (615)-594-8664
                                    </span>
                                </div>
                            </li>

                            {/* Portfolio */}
                            <li className={`w-full h-full p-0 m-0 rounded-lg ${ 
                                light 
                                    ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                                    : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                                    hover:-translate-y-[.05rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                                {/* Tint Overlay */}
                                <div className={`flex items-center gap-3 w-full h-full p-2 rounded-lg ${light ? "hover:bg-light-accent/10" : "hover:bg-dark-accent/10"} transition duration-300 ease-in-out`}>
                                    <Globe className={`w-5 h-5 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`} />
                                    <button 
                                        onClick={() => navigate("/")} 
                                        className={`font-semibold hover:font-bold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}
                                    >
                                        caleberickson21.github.io
                                    </button>
                                </div>
                            </li>

                            {/* LinkedIn */}
                            <li className={`w-full h-full p-0 m-0 rounded-lg ${ 
                                light 
                                    ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                                    : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                                    hover:-translate-y-[.05rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                                {/* Tint Overlay */}
                                <div className={`flex items-center gap-3 w-full h-full p-2 rounded-lg ${light ? "hover:bg-light-accent/10" : "hover:bg-dark-accent/10"} transition duration-300 ease-in-out`}>
                                    <Linkedin className={`w-5 h-5 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`} />
                                    <a 
                                        href="https://linkedin.com/in/-caleb-erickson" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`font-semibold hover:font-bold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}
                                    >
                                        linkedin.com/in/-caleb-erickson
                                    </a>
                                </div>
                            </li>

                            {/* Github */}
                            <li className={`w-full h-full p-0 m-0 rounded-lg ${ 
                                light 
                                    ? 'bg-light-bg-secondary shadow-light-accent/50 hover:shadow-light-text-secondary'
                                    : 'bg-dark-bg-secondary shadow-dark-accent/50 hover:shadow-dark-text-secondary'}
                                    hover:-translate-y-[.05rem] shadow-md hover:shadow-lg transition duration-300 ease-in-out`}>
                                {/* Tint Overlay */}
                                <div className={`flex items-center gap-3 w-full h-full p-2 rounded-lg ${light ? "hover:bg-light-accent/10" : "hover:bg-dark-accent/10"} transition duration-300 ease-in-out`}>
                                    <Github className={`w-5 h-5 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`} />
                                    <a 
                                        href="https://github.com/caleberickson21" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`font-semibold hover:font-bold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}
                                    >
                                        github.com/caleberickson21
                                    </a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export component
export default Contact;