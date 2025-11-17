// Import dependencies
import { useTheme } from '../contexts/Theme';

// Import types
import type { PublicationDropdownProps } from '../utils/types';

// Publication Dropdown component
const PublicationDropdown = ({ 
    id, 
    title, 
    authors, 
    description, 
    venue, 
    year, 
    link,
    expandedPublication, 
    setExpandedPublication 
}: PublicationDropdownProps) => {

    // States
    const { light } = useTheme();

    // Check if this publication is expanded
    const isExpanded = expandedPublication === id;

    // Toggle expansion
    const toggleExpansion = () => {
        if (isExpanded) {
            setExpandedPublication(null);
        } else {
            setExpandedPublication(id);
        }
    };

    return (
        <div className={`flex flex-col w-full mb-3 rounded-lg overflow-hidden transition duration-300 ease-in-out ${
            light 
                ? 'bg-light-bg-secondary shadow-light-accent/50' 
                : 'bg-dark-bg-secondary shadow-dark-accent/50'
        } shadow-md`}>
            
            {/* Header Bar - Always Visible */}
            <button
                onClick={toggleExpansion}
                className={`flex flex-row items-center justify-between w-full p-4 text-left hover:brightness-95 transition duration-300 ease-in-out ${
                    light 
                        ? 'bg-light-bg-secondary hover:bg-light-accent/20' 
                        : 'bg-dark-bg-secondary hover:bg-dark-accent/20'
                }`}
            >
                <h3 className={`${light ? 'text-light-text-primary' : 'text-dark-text-primary'} text-lg font-bold pr-4`}>
                    {title}
                </h3>
                
                {/* Expand/Collapse Icon */}
                <div className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg 
                        className={`w-6 h-6 ${light ? 'text-light-text-primary' : 'text-dark-text-primary'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className={`px-4 pb-4 pt-2 border-t ${
                    light 
                        ? 'border-light-accent/30 bg-light-bg-primary' 
                        : 'border-dark-accent/30 bg-dark-bg-primary'
                } transition-all duration-300 ease-in-out`}>
                    <div className="flex flex-col space-y-2">
                        {authors && (
                            <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>
                                <span className="font-bold">Authors:</span> {authors}
                            </p>
                        )}
                        
                        {venue && (
                            <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>
                                <span className="font-bold">Venue:</span> {venue}
                            </p>
                        )}
                        
                        {year && (
                            <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold`}>
                                <span className="font-bold">Year:</span> {year}
                            </p>
                        )}
                        
                        {description && (
                            <p className={`${light ? 'text-light-text-secondary' : 'text-dark-text-secondary'} text-md font-semibold mt-2`}>
                                {description}
                            </p>
                        )}
                        
                        {link && (
                            <div className="mt-3">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block ${
                                        light 
                                            ? 'bg-dark-bg-secondary text-dark-text-secondary hover:bg-dark-accent' 
                                            : 'bg-light-bg-secondary text-light-text-secondary hover:bg-light-accent'
                                    } text-sm font-semibold hover:font-bold rounded-lg px-4 py-2 cursor-pointer transition duration-300 ease-in-out`}
                                >
                                    View Publication
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PublicationDropdown;