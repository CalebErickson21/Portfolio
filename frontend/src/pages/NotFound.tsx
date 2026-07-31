import { Link } from "react-router";
import { Home } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound() {
	return (
		<section className="flex w-full flex-1 flex-col items-center justify-center px-6 py-24 text-center">
			<p className="text-2xl font-medium tracking-wide text-brand-accent">404</p>
			<h1 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
				Page not found
			</h1>
			<p className="mt-3 max-w-md text-text-secondary">
				That page doesn&apos;t exist or may have moved. Head back home to keep exploring.
			</p>
			<Link
				to="/"
				className={cn(
					buttonVariants({ variant: "default", size: "default" }),
					"mt-8 bg-brand-accent text-white hover:bg-brand-accent/75",
				)}
			>
				<Home data-icon="inline-start" />
				Back to home
			</Link>
		</section>
	);
}
