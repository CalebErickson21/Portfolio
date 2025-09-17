// Import dependencies
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Import styles

// Import contexts
import { useTheme } from "../contexts/Theme";
import { useEnvironment } from "../contexts/Environment";

// Header component
const Header = () => {

    // States
    const { light } = useTheme();
    const { screenLarge } = useEnvironment();
    const [open, setOpen] = useState(false);

    // Helpers
    const navigate = useNavigate();

    // Navbar updates on screen size change
    useEffect(() => {
        setOpen(false);
    }, [screenLarge]);

    return (
        <header
        className={`relative flex items-center p-4 ${light ? 'bg-light-bg-secondary text-light-text-primary' : 'bg-dark-bg-secondary text-dark-text-primary'} transition duration-300 ease-in-out`}>

            {screenLarge ? (
                <>
                    {/* Name and Logo */}
                    <div className='align-start flex-shrink-0'
                    onClick={() => navigate('/')}>
                        <h1 className='text-2xl font-bold cursor-pointer'>
                        Caleb Erickson
                        </h1>
                    </div>
                    
                    {/* Navbar Links */}
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <ul className='flex flex-row space-x-8'>
                            <li
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => navigate('/')}>Home</li>
                            <li
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => navigate('/about')}>About</li>
                            <li
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => navigate('/experience')}>Experience</li>
                            <li
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => navigate('/projects')}>Projects</li>
                            <li
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => navigate('/academics')}>Academics</li>
                            <li
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => navigate('/contact')}>Contact</li>
                        </ul>
                    </div>
                </>
             ) : (
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row w-full'>
                        <div
                        className='flex flex-1 justify-start items-center cursor-pointer'
                        onClick={() => navigate('/')}>
                            <h1 className='text-2xl font-bold cursor-pointer'>
                            Caleb Erickson
                            </h1>
                        </div>

                        <div className='flex flex-1 justify-end items-center'>
                            <button
                            className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                            onClick={() => setOpen(!open)}>
                                <span className='text-2xl font-bold cursor-pointer'>
                                Menu
                                </span>
                            </button>
                        </div>
                    </div>

                    {open && (
                        <div className='flex flex-col w-full'>
                            <ul className='flex flex-col space-y-2 w-full pt-2'>
                                <li className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                                onClick={() => navigate('/')}>
                                    Home
                                </li>
        
                                <li className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                                onClick={() => navigate('/about')}>
                                    About
                                </li>
                            
                                <li className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                                onClick={() => navigate('/experience')}>
                                    Experience
                                </li>
                            
                                <li className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                                onClick={() => navigate('/projects')}>
                                    Projects
                                </li>
                            
                                <li className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                                onClick={() => navigate('/academics')}>
                                    Academics
                                </li>

                                <li className={`font-semibold hover:font-bold cursor-pointer ${light ? 'text-light-primary hover:text-light-accent' : 'text-dark-primary hover:text-dark-accent'}`}
                                onClick={() => navigate('/contact')}>
                                    Contact
                                </li>
                            </ul>
                        </div>
                    )}


                </div>
            )}
        </header>
    )


}

// Export component
export default Header;