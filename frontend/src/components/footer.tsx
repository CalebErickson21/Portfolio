// Import dependencies
import { useNavigate } from "react-router-dom";

// Footer component
const Footer = () => {

    // Helpers
    const navigate = useNavigate();

    // Visible component
    return (
        <footer
        className="bg-light-background dark:bg-dark-background w-full h-full p-4 transition duration-300 ease-in-out">
            <div className='flex flex-col justify-center items-center'>
                <h3
                className="text-light-text-secondary dark:text-dark-text-secondary">
                    © 2026 Caleb Erickson • Designed & coded by me • Let’s
                    {" "}
                    <a
                    className="cursor-pointer underline hover:font-bold"
                    onClick={() => navigate('/contact')}>
                        connect!
                    </a>
                </h3>
            </div>
        </footer>
    )
}

export default Footer;