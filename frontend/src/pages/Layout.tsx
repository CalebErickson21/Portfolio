// Import dependencies
import { Outlet } from "react-router-dom";

// Import components
import ThemeButton from "../components/ThemeButton";

// Import contexts
import { useTheme } from "../contexts/Theme";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import styles


// Layout component
const Layout = () => {

    // States
    const { light, setLight } = useTheme();

    return (
        <div id='layout-container' className='flex flex-col min-h-screen min-w-screen m-0 p-0'>
            {/* Header */}
            <div
            id='header-container'
            className={'sticky w-full top-0 z-50'}>
                <Header />
            </div>

            {/* Outlet */}
            <div
            id='outlet-container'
            className='flex-1'>
                <Outlet />
            </div>

            {/* Footer */}
            <div
            id='footer-container'
            className='w-full'>
                <Footer />
            </div>

            {/* Theme button - Constant across all pages */}
            <div
            id='theme-button-container'
            className='fixed bottom-4 left-4'>
                <ThemeButton light={light} setLight={setLight} />
            </div>
            
        </div>
    )
}

// Export component
export default Layout;
