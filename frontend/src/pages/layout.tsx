import { Outlet } from "react-router-dom";

import { LightRays } from "@/components/ui/light-rays";
import { Navbar } from "@/components/Navbar";

// Layout component
export const Layout = () => {
	return (
		<div
			id="layout-container"
			className="relative m-0 flex h-dvh w-full flex-col overflow-hidden p-0"
		>
			{/* Header */}
			<div id="header-container" className="relative z-50 w-full shrink-0">
				<Navbar />
			</div>

			{/* Background */}
			<div
				id="background-container"
				className="absolute inset-0 z-0 min-h-dvh min-w-full bg-background"
			>
				<LightRays color="var(--brand-accent)" length="100%" blur={75} />
			</div>

			{/* Outlet */}
			<main
				id="outlet-container"
				className="relative z-10 min-h-0 flex-1 scroll-fade overflow-y-auto bg-transparent transition-all"
			>
				<Outlet />
			</main>

			{/* Footer */}
			<div id="footer-container" className="relative z-10 w-full shrink-0">
				Footer
			</div>
		</div>
	);
};
