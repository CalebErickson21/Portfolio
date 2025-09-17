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
                            <li className={`flex items-center gap-3 ${light ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"} px-2 py-1 rounded-md`}>
                            <FileText className={`w-5 h-5 ${light ? "text-dark-text-primary" : "text-light-text-primary"}`} />
                            <a href={ResumeFile} download className={`font-semibold hover:font-bold ${light ? "text-dark-text-primary hover:text-dark-accent" : "text-light-text-primary hover:text-light-accent"}`}>
                                Resume
                            </a>
                            </li>

                            {/* Email */}
                            <li className={`flex items-center gap-3 ${light ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"} px-2 py-1 rounded-md`}>
                            <Mail className={`w-5 h-5 ${light ? "text-dark-text-primary" : "text-light-text-primary"}`} />
                            <a href="mailto:crerickson@crimson.ua.edu" className={`font-semibold hover:font-bold ${light ? "text-dark-text-primary hover:text-dark-accent" : "text-light-text-primary hover:text-light-accent"}`}>
                                crerickson@crimson.ua.edu
                            </a>
                            </li>

                            {/* Phone */}
                            <li className={`flex items-center gap-3 ${light ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"} px-2 py-1 rounded-md`}>
                            <Phone className={`w-5 h-5 ${light ? "text-dark-text-primary" : "text-light-text-primary"}`} />
                            <span className={`font-semibold hover:font-bold ${light ? "text-dark-text-primary hover:text-dark-accent" : "text-light-text-primary hover:text-light-accent"}`}>
                                (615)-594-8664
                            </span>
                            </li>

                            {/* Portfolio */}
                            <li className={`flex items-center gap-3 ${light ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"} px-2 py-1 rounded-md`}>
                            <Globe className={`w-5 h-5 ${light ? "text-dark-text-primary" : "text-light-text-primary"}`} />
                            <button 
                                onClick={() => navigate("/")} 
                                className={`font-semibold hover:font-bold ${light ? "text-dark-text-primary hover:text-dark-accent" : "text-light-text-primary hover:text-light-accent"}`}
                            >
                                caleberickson21.github.io
                            </button>
                            </li>

                            {/* LinkedIn */}
                            <li className={`flex items-center gap-3 ${light ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"} px-2 py-1 rounded-md`}>
                            <Linkedin className={`w-5 h-5 ${light ? "text-dark-text-primary" : "text-light-text-primary"}`} />
                            <a 
                                href="https://linkedin.com/in/-caleb-erickson" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`font-semibold hover:font-bold ${light ? "text-dark-text-primary hover:text-dark-accent" : "text-light-text-primary hover:text-light-accent"}`}
                            >
                                linkedin.com/in/-caleb-erickson
                            </a>
                            </li>

                            {/* Github */}
                            <li className={`flex items-center gap-3 ${light ? "bg-dark-bg-secondary" : "bg-light-bg-secondary"} px-2 py-1 rounded-md`}>
                            <Github className={`w-5 h-5 ${light ? "text-dark-text-primary" : "text-light-text-primary"}`} />
                            <a 
                                href="https://github.com/caleberickson21" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`font-semibold hover:font-bold ${light ? "text-dark-text-primary hover:text-dark-accent" : "text-light-text-primary hover:text-light-accent"}`}
                            >
                                github.com/caleberickson21
                            </a>
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