import { useState } from "react";
import { Link, NavLink } from "react-router";
import { MenuIcon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { ScrollProgress } from "./ui/scroll-progress";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { iconButtonClass } from "@/utils/classes";
import { navigation, socialLinks } from "@/utils/links";

const navLinkClass = ({ isActive }: { isActive: boolean }) => {
	return cn(
		buttonVariants({ variant: "ghost", size: "sm" }),
		"relative text-md transition-all",
		isActive
			? "font-semibold text-brand-accent hover:text-brand-accent after:absolute after:inset-x-2 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-accent"
			: "text-text-secondary hover:text-text-primary hover:font-semibold",
	);
};

const SocialLinks = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex items-center gap-1", className)}>
			{socialLinks.map(({ label, href, icon: Icon }) => (
				<a
					key={label}
					href={href}
					target={href.startsWith("mailto:") ? undefined : "_blank"}
					rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
					aria-label={label}
					className={cn(
						buttonVariants({ variant: "ghost", size: "icon-sm" }),
						iconButtonClass,
					)}
				>
					<Icon className="size-5" />
				</a>
			))}
		</div>
	);
};

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 0);
	});

	return (
		<header
			className={cn(
				"relative z-50 w-full p-2 transition-[background-color,backdrop-filter] duration-750 ease-out",
				scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent",
			)}
		>
			<div className="flex items-center justify-between px-4 py-2">
				<Link
					to="/"
					className="relative z-10 text-lg font-semibold text-text-primary transition-all hover:font-bold cursor-pointer"
				>
					Caleb Erickson
				</Link>

				{/* Centered nav - large screens */}
				<nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
					{navigation.map((item) => (
						<NavLink
							key={item.dest}
							to={item.dest}
							end={item.end}
							className={navLinkClass}
						>
							{item.label}
						</NavLink>
					))}
				</nav>

				{/* Right actions */}
				<div className="relative z-10 flex items-center gap-1">
					{/* Large screens: theme + socials */}
					<div className="hidden items-center gap-1 lg:flex">
						<AnimatedThemeToggler
							variant="hexagon"
							className={cn(
								buttonVariants({ variant: "ghost", size: "icon-sm" }),
								iconButtonClass,
								"[&_svg]:size-5",
							)}
						/>
						<SocialLinks />
					</div>

					{/* Medium screens: collapsible menu */}
					<Sheet>
						<SheetTrigger
							render={
								<Button
									variant="ghost"
									size="icon"
									className={cn("lg:hidden", iconButtonClass)}
									aria-label="Open navigation menu"
								/>
							}
						>
							<MenuIcon className="size-5" />
						</SheetTrigger>

						<SheetContent
							side="right"
							className="w-4/5 max-w-sm border-l border-brand-accent bg-background/50 p-2 shadow-brand-accnet"
						>
							<SheetHeader>
								<SheetTitle className="flex items-center gap-2 text-text-primary">
									Caleb Erickson
									<AnimatedThemeToggler
										variant="hexagon"
										className={cn(iconButtonClass, "[&_svg]:size-4")}
									/>
								</SheetTitle>
								<SheetDescription className="text-text-secondary">
									Get to know me and explore my work, experience, and contact
									information.
								</SheetDescription>
							</SheetHeader>

							<nav className="flex flex-col items-start gap-2 pl-4">
								{navigation.map((item) => (
									<SheetClose
										key={item.dest}
										render={
											<NavLink
												to={item.dest}
												end={item.end}
												className={navLinkClass}
											/>
										}
									>
										{item.label}
									</SheetClose>
								))}
							</nav>

							<div className="mt-4 flex items-center gap-1 border-t border-text-secondary/20 px-4 pt-4">
								<SocialLinks />
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<ScrollProgress className="absolute top-auto bottom-0" />
		</header>
	);
};
