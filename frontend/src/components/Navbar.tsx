import { Link } from "react-router-dom";

import { MenuIcon } from "lucide-react";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
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

const navigation = [
	{ label: "About", dest: "/about" },
	{ label: "Work", dest: "/work" },
	{ label: "Experience", dest: "/experience" },
	{ label: "Contact", dest: "/contact" },
];

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-transparent p-2">
			<div className="flex items-center justify-between px-4 py-2">
				<Link
					to="/"
					className="font-semibold hover:font-bold text-lg text-text-primary transition-all cursor-pointer"
				>
					Caleb Erickson
				</Link>

				<div className="ml-auto flex items-center gap-1">
					{/* Desktop */}
					<nav className="hidden items-center gap-1 sm:flex">
						<AnimatedThemeToggler
							variant="hexagon"
							className="mx-2 [&_svg]:size-5 text-text-secondary transition-colors hover:text-text-primary cursor-pointer"
						/>
						{navigation.map((item) => (
							<Link
								key={item.dest}
								to={item.dest}
								className={cn(
									buttonVariants({
										variant: "ghost",
										size: "sm",
									}),
									"text-md transition-all text-text-secondary hover:text-text-primary hover:font-semibold",
								)}
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Mobile */}
					<Sheet>
						<SheetTrigger
							render={
								<Button
									variant="ghost"
									size="icon"
									className="sm:hidden text-text-secondary hover:text-text-primary transition-colors"
									aria-label="Open navigation menu"
								/>
							}
						>
							<MenuIcon className="size-5" />
						</SheetTrigger>

						<SheetContent
							side="right"
							className="w-4/5 max-w-sm bg-background/50 p-2 shadow-brand-accnet border-l border-brand-accent"
						>
							<SheetHeader className="">
								<SheetTitle className="flex gap-2 items-center text-text-primary">
									Caleb Erickson
									<AnimatedThemeToggler
										variant="hexagon"
										className="sm:hidden [&_svg]:size-4 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
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
											<Link
												to={item.dest}
												className={cn(
													buttonVariants({
														variant: "ghost",
														size: "sm",
													}),
													"text-md transition-all text-text-secondary hover:text-text-primary hover:font-semibold",
												)}
											/>
										}
									>
										{item.label}
									</SheetClose>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
