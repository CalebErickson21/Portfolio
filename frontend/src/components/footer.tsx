// Import dependencies
import { Link } from "react-router-dom";

// Footer component
const Footer = () => {

    // Visible component
    return (
        <footer
        className="bg-light-background dark:bg-dark-background w-full h-full p-4 transition duration-300 ease-in-out">
            <div className='flex flex-col justify-center items-center'>
                <h3
                className="text-light-text-secondary dark:text-dark-text-secondary">
                    © 2026 Caleb Erickson • Designed & coded by me • Let’s
                    {" "}
                    <Link
                    to="/contact"
                    className="cursor-pointer underline hover:font-bold">
                        connect!
                    </Link>
                </h3>
            </div>
        </footer>
    )
}

export default Footer;