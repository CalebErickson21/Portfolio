// Import dependencies

// Under Construction page component
const Construction = () => {
    return (
        <div className="flex flex-col w-full h-full min-h-screen items-center justify-center transition duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center text-center px-8 py-4 max-w-2xl">
                {/* Icon/Emoji */}
                <div className="text-8xl mb-6 animate-bounce">🚧</div>

                {/* Title */}
                <h1 className="text-light-text-primary dark:text-dark-text-primary text-4xl font-bold mb-4">
                    Under Construction
                </h1>

                {/* Description */}
                <h3 className="text-light-text-secondary dark:text-dark-text-secondary text-xl font-semibold mb-6">
                    I'm working hard to bring you something amazing. Please
                    check back soon!
                </h3>

                {/* Additional message */}
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">
                    This functionality is currently being developed and will be
                    available shortly.
                </p>
            </div>
        </div>
    );
};

// Export component
export default Construction;
