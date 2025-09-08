// Import dependencies
import { useNavigate } from "react-router-dom";

// Import contexts
import { useTheme } from "../contexts/Theme";

// Footer component
const Footer = () => {


    // States
    const { light } = useTheme();

    // Helpers
    const navigate = useNavigate();


    // Visible component
    return (
        <footer
        className={`${light ? 'bg-light-bg-primary' : 'bg-dark-bg-primary'} w-full h-full p-4`}>
            <div className='flex flex-col justify-center items-center'>
                <h3
                className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'}`}>
                    © 2025 Caleb Erickson • Designed & coded by me • Let’s <a onClick={() => navigate('/contact')}>connect</a>!
                </h3>
            </div>
        </footer>
    )
}

export default Footer;