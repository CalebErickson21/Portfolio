import type { ReactNode } from "react";

type SectionLabelPropsType = {
	children: ReactNode;
};

export const SectionLabel = ({ children }: SectionLabelPropsType) => {
	return (
		<div className="flex items-center justify-center gap-3 sm:gap-4">
			<span
				aria-hidden
				className="h-px w-14 bg-linear-to-r from-transparent via-brand-accent/25 to-brand-accent/50 sm:w-24 md:w-32"
			/>
			<p className="shrink-0 text-xl font-medium tracking-wide text-brand-accent">
				{children}
			</p>
			<span
				aria-hidden
				className="h-px w-14 bg-linear-to-l from-transparent via-brand-accent/25 to-brand-accent/50 sm:w-24 md:w-32"
			/>
		</div>
	);
};
