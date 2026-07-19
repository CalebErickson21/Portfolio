import { Outlet } from "react-router-dom";

import { LightRays } from "@/components/ui/light-rays";
import { Navbar } from "@/components/Navbar";

// Layout component
export const Layout = () => {
	return (
		<div id="layout-container" className="relative flex flex-col min-h-screen w-full m-0 p-0">
			{/* Header */}
			<div id="header-container" className="sticky w-full top-0 z-50">
				<Navbar />
			</div>

			{/* Background */}
			<div
				id="background-container"
				className="
                flex flex-1 flex-row min-h-screen min-w-screen
                absolute inset-0 z-0
                bg-background"
			>
				<LightRays color="var(--brand-accent)" length="100dvh" blur={75} />
			</div>

			{/* Outlet */}
			<main
				id="outlet-container"
				className="flex flex-1 min-h-0
            bg-transparent
            transition duration-300 ease-in-out
            z-10"
			>
				<Outlet />
			</main>

			{/* Footer */}
			<div id="footer-container" className="w-full">
				Footer
			</div>
		</div>
	);
};
