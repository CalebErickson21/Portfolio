// Import dependencies
import { useTheme } from "../contexts/Theme";

// Import components


// Import styles


// Home page component
const Home = () => {

    // Contexts
    const { light } = useTheme();


    return (        
        <div id='home-container' className='flex min-lg:flex-row max-lg:flex-col m-0 p-0'>
            {/* Left side */}
            <div className={`flex-1 min-h-screen ${light ? 'bg-light-bg-primary' : 'bg-dark-bg-primary'}`}>
                Hello
            </div>


            {/* Right side */}
            <div className={`flex-1 min-h-screen ${light ? 'bg-light-bg-secondary' : 'bg-dark-bg-secondary'}`}>
                {light ? 'Light' : 'Dark'}
            </div>
        </div>
    )
}

// Export component
export default Home;