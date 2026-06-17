// Import dependencies

// Import types
import type { PublicationDropdownProps } from "@/utils/types";

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
    setExpandedPublication,
}: PublicationDropdownProps) => {
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
        <div
            className="flex flex-col w-full mb-3 rounded-lg
            shadow-sm hover:shadow-md shadow-accent hover:shadow-accent
            bg-light-surface dark:bg-dark-surface
            hover:-translate-y-[.1rem]
            transition duration-300 ease-in-out"
        >
            {/* Tint Overlay */}
            <div className="flex flex-col w-full p-2 rounded-lg hover:bg-accent/5">
                {/* Header Bar - Always Visible */}
                <button
                    onClick={toggleExpansion}
                    className="flex flex-row items-center justify-between w-full p-4 text-left"
                >
                    <h3 className="text-light-text-primary dark:text-dark-text-primary text-lg font-bold pr-4">
                        {title}
                    </h3>

                    {/* Expand/Collapse Icon */}
                    <div
                        className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${isExpanded ? "rotate-180" : ""}`}
                    >
                        <svg
                            className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </button>

                {/* Expandable Content */}
                {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-light-accent/10 dark:border-dark-accent/10 bg-light-bg-primary dark:bg-dark-bg-primary rounded-b-lg transition-all duration-300 ease-in-out">
                        <div className="flex flex-col space-y-2">
                            {authors && (
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-semibold">
                                    <span className="font-bold">Authors:</span>{" "}
                                    {authors}
                                </p>
                            )}

                            {venue && (
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-semibold">
                                    <span className="font-bold">Venue:</span>{" "}
                                    {venue}
                                </p>
                            )}

                            {year && (
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-semibold">
                                    <span className="font-bold">Year:</span>{" "}
                                    {year}
                                </p>
                            )}

                            {description && (
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-md font-semibold mt-2">
                                    {description}
                                </p>
                            )}

                            {link && (
                                <div className="flex justify-end mt-3">
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg px-2 py-1 m-2 bg-accent/50 text-sm font-semibold hover:font-bold text-light-text-secondary dark:text-dark-text-secondary cursor-pointer transition duration-300 ease-in-out"
                                    >
                                        View Publication
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicationDropdown;
