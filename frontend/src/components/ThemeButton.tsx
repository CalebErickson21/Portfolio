// Import dependencies
import { ThemeContextType } from "../utils/types";

// Import styles

// Theme button component
const ThemeButton = ({ light, setLight }: ThemeContextType) => {
    return (
        <button onClick={() => setLight(!light)}>
            {light ? 'Light' : 'Dark'}
        </button>
    )
}

export default ThemeButton;