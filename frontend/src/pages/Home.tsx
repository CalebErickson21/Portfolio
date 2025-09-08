// Import dependencies
import { useTheme } from "../contexts/Theme";

// Import components


// Import styles


// Home page component
const Home = () => {

    // Contexts
    const { light } = useTheme();


    return (        
        <div id='home-container' className='flex flex-row m-0 p-0'>
            {/* Left side */}
            <div className={`w-1/2 min-h-screen ${light ? 'bg-light-bg-primary' : 'bg-dark-bg-primary'}`}>
                Hello
            </div>


            {/* Right side */}
            <div className={`w-1/2 min-h-screen ${light ? 'bg-light-bg-secondary' : 'bg-dark-bg-secondary'}`}>
                {light ? 'Light' : 'Dark'}
            </div>
        </div>
    )
}

// Export component
export default Home;