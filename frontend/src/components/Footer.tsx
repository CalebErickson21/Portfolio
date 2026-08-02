import { Link, NavLink } from "react-router";
import { ArrowRight, ArrowUp } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigation, socialLinks } from "@/utils/links";

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative z-10 w-full">
			{/* CTA section */}
			<div className="border-t border-text-secondary/15 bg-surface/80 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12">
				<h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
					Let&apos;s build something great.
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
					Whether you have a project, opportunity, or just want to connect, I&apos;d love
					to hear from you.
				</p>

				<div className="mt-6 flex flex-wrap items-center justify-center gap-2">
					<Link
						to="/contact"
						className={cn(
							buttonVariants({ variant: "default", size: "lg" }),
							"bg-brand-accent px-6 text-brand-accent-foreground hover:bg-brand-accent/80",
						)}
					>
						Get in Touch
						<ArrowRight className="size-4" />
					</Link>

					{socialLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target={href.startsWith("mailto:") ? undefined : "_blank"}
							rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
							aria-label={label}
							className={cn(
								buttonVariants({ variant: "ghost", size: "icon" }),
								"text-text-secondary transition-colors hover:text-text-primary",
							)}
						>
							<Icon className="size-5" />
						</a>
					))}
				</div>
			</div>

			{/* Bottom bar */}
			<div className="bg-footer px-6 py-4 text-sm text-footer-muted sm:px-10">
				<div className="relative flex items-center justify-center md:justify-between">
					<p className="text-center">
						© {year} Caleb Erickson. All rights reserved.
					</p>

					<div className="absolute right-0 flex items-center gap-1 md:static">
						<nav className="hidden items-center gap-1 md:flex">
							{navigation.map((item) => (
								<NavLink
									key={item.dest}
									to={item.dest}
									end={item.end}
									className={({ isActive }) =>
										cn(
											"rounded-md px-2.5 py-1 transition-colors hover:text-footer-foreground",
											isActive ? "text-footer-foreground" : "text-footer-muted",
										)
									}
								>
									{item.label}
								</NavLink>
							))}
						</nav>

						<button
							type="button"
							onClick={scrollToTop}
							aria-label="Back to top"
							className="flex size-8 items-center justify-center rounded-full bg-footer-elevated text-footer-foreground transition-colors hover:bg-footer-elevated/80"
						>
							<ArrowUp className="size-4" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
