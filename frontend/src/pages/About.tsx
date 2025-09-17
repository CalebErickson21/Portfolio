// Import dependencies
import { useEnvironment } from "../contexts/Environment";
import { useTheme } from "../contexts/Theme";

// Import components

// Import images
import headshot from "../assets/images/headshot.jpg";
import skiing from "../assets/images/skiing.jpg";
import grad from "../assets/images/grad.jpg";


// About page component
const About = () => {

    // States
    const { light } = useTheme();
    const { screenLarge } = useEnvironment();


    return (
        <div id='about-container' className={`flex flex-col transition duration-300 ease-in-out`}>

            {/* Top */}
            <div className={`flex min-lg:flex-row max-lg:flex-col transition duration-300 ease-in-out`}>

                {/* Left side */}
                <div className={`min-lg:bg-gradient-to-br min-h-screen max-lg:bg-gradient-to-tl ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex flex-1 flex-col w-5/6 my-4 mx-2 items-center justify-center text-center">
                        {/* Introduction */}
                        <h2 className={`text-2xl font-bold mb-3 ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>Outside the Classroom</h2>

                        {/* Body */}
                        <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        When I am not focused on academics or professional projects, I make it a priority to stay active and engaged with the people and activities that keep me balanced. I grew up playing football and basketball, and while I no longer compete for a school team, I now play for my fraternity’s intramural basketball team and join pickup games with friends whenever I can. Beyond that, I work out at the gym almost every day, seeing exercise as both a discipline and a way to recharge.
                        </h5>

                        <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        Family and relationships also play a central role in my life. As one of six siblings, I value staying connected with my three brothers and two sisters, even while away at Alabama. Regularly keeping in touch with friends and family helps me maintain perspective and reminds me of the strong support system behind me.
                        </h5>

                        <h5 className={`text-md mb-3 font-semibold ${light ? "text-light-text-primary" : "text-dark-text-primary"}`}>
                        I also enjoy exploring new experiences and places. Traveling has become a way to satisfy my curiosity, and I’m always eager to try something different—this winter, I hope to learn snowboarding as my next adventure. At the same time, I balance my active lifestyle with quieter moments, whether it’s playing acoustic guitar or winding down with a movie. These hobbies reflect my drive to stay curious, creative, and connected, both inside and outside the classroom.
                        </h5>
                    </div>
                </div>

                {/* Right side */}
                <div className={`bg-gradient-to-bl min-h-screen ${light ? "from-light-bg-primary via-light-bg-secondary to-light-accent" : "from-dark-bg-primary via-dark-bg-secondary to-dark-accent"} flex flex-col flex-1 items-center justify-center pt-2 pb-4`}>
                    <div className="flex w-full px-4 items-center justify-center">
                        <div className="flex flex-row w-full h-full items-center justify-center">
                            {/* Left side */}
                            <div className="w-1/2 h-full m-3 rounded-md items-center justify-center">
                                <img src={headshot}
                                alt="Profile"
                                className={`w-full h-full object-cover rounded-md hover:-translate-y-[.2rem] hover:-translate-x-[.2rem] transition duration-300 ease-in-out hover:shadow-lg ${light ? "hover:shadow-light-text-secondary" : "hover:shadow-dark-text-secondary"}`} />
                            </div>

                            {/* Right side */}
                            {screenLarge && (
                                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                                    <div className="w-full h-1/2 m-3 rounded-md items-center justify-center">
                                        <img src={skiing}
                                        alt="Skiing"
                                        className={`w-full h-full object-cover rounded-md hover:-translate-y-[.2rem] hover:translate-x-[.2rem] transition duration-300 ease-in-out hover:shadow-lg ${light ? "hover:shadow-light-text-secondary" : "hover:shadow-dark-text-secondary"}`} />
                                    </div>
                                    <div className="w-full h-1/2 m-3 rounded-md items-center justify-center">
                                        <img src={grad}
                                        alt="Graduation"
                                        className={`w-full h-full object-cover rounded-md hover:translate-y-[.2rem] hover:translate-x-[.2rem] transition duration-300 ease-in-out hover:shadow-lg ${light ? "hover:shadow-light-text-secondary" : "hover:shadow-dark-text-secondary"}`} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export component
export default About;