import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export const NotFound = () => {
	return (
		<section className="flex w-full flex-1 flex-col items-center justify-center px-6 py-24 text-center">
			<p className="text-2xl font-medium tracking-wide text-brand-accent">404</p>
			<h1 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl">
				Page not found
			</h1>
			<p className="mt-3 max-w-md text-text-secondary">
				That page doesn't exist or may have moved. Head back home to keep exploring.
			</p>
			<InteractiveHoverButton to="/" className="mt-8">
				Back to home
			</InteractiveHoverButton>
		</section>
	);
};
