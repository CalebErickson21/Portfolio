// Import dependencies
import { useNavigate } from "react-router-dom";

// Import styles

// Import contexts
import { useTheme } from "../contexts/Theme";

// Header component
const Header = () => {

    // States
    const { light } = useTheme();

    // Helpers
    const navigate = useNavigate();

    return (
        <header
        className={`relative flex items-center p-4 ${light ? 'bg-light-bg-primary' : 'bg-dark-bg-primary'}`}>

            {/* Name and Logo */}
            <div className='align-start flex-shrink-0'
            onClick={() => navigate('/')}>
                <h1 className={`text-2xl font-bold ${light ? 'text-light-text-primary' : 'text-dark-text-primary'} cursor-pointer`}>
                Caleb Erickson
                </h1>
            </div>
            
            {/* Navbar Links */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <ul className={`flex space-x-8 ${light ? 'text-light-text-primary' : 'text-dark-text-primary'}`}>
                    <li
                    className='hover:font-bold cursor-pointer'
                    onClick={() => navigate('/')}>Home</li>
                    <li
                    className='hover:font-bold cursor-pointer'
                    onClick={() => navigate('/about')}>About</li>
                    <li
                    className='hover:font-bold cursor-pointer'
                    onClick={() => navigate('/experience')}>Experience</li>
                    <li
                    className='hover:font-bold cursor-pointer'
                    onClick={() => navigate('/projects')}>Projects</li>
                    <li
                    className='hover:font-bold cursor-pointer'
                    onClick={() => navigate('/academics')}>Academics</li>
                    <li
                    className='hover:font-bold cursor-pointer'
                    onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </div>
        </header>
    )


}

// Export component
export default Header;