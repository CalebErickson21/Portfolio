import { Outlet } from "react-router";

import { Footer } from "@/components/Footer";
import { LightRays } from "@/components/ui/light-rays";
import { Navbar } from "@/components/Navbar";

// Layout component
export const Layout = () => {
	return (
		<div
			id="layout-container"
			className="relative m-0 flex min-h-dvh w-full flex-col p-0"
		>
			{/* Header */}
			<div id="header-container" className="sticky top-0 z-50 w-full">
				<Navbar />
			</div>

			{/* Background */}
			<div
				id="background-container"
				className="fixed inset-0 z-0 min-h-dvh min-w-full bg-background"
			>
				<LightRays color="var(--brand-accent)" length="100%" blur={100} />
			</div>

			{/* Outlet */}
			<main
				id="outlet-container"
				className="relative z-10 flex flex-1 flex-col bg-transparent transition-all"
			>
				<div className="flex-1">
					<Outlet />
				</div>

				<Footer />
			</main>
		</div>
	);
};
