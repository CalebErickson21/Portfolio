// Import dependencies
import type { ThemeContextType } from "../utils/types";

// Import styles

// Theme button component
const ThemeButton = ({ light, setLight }: ThemeContextType) => {
    return (
        <button
        className={`${light ? 'bg-dark-bg-primary text-dark-text-primary' : 'bg-light-bg-primary text-light-text-primary'} px-2 py-0 rounded-lg cursor-pointer`}
        onClick={() => setLight(!light)}>
            {light ? 'Light' : 'Dark'}
        </button>
    )
}

// Export component
export default ThemeButton;