import { Link, type LinkProps } from "react-router";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type SharedProps = {
	children: React.ReactNode;
	className?: string;
};

type InteractiveHoverButtonAsButton = SharedProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
		to?: undefined;
	};

type InteractiveHoverButtonAsLink = SharedProps &
	Omit<LinkProps, "children" | "className"> & {
		to: LinkProps["to"];
	};

export type InteractiveHoverButtonProps =
	| InteractiveHoverButtonAsButton
	| InteractiveHoverButtonAsLink;

export const InteractiveHoverButton = ({
	children,
	className,
	...props
}: InteractiveHoverButtonProps) => {
	const classes = cn(
		"group relative inline-flex w-auto cursor-pointer overflow-hidden rounded-full border border-text-secondary/30 bg-background p-2 px-6 text-center text-sm font-semibold text-text-primary",
		className,
	);

	const content = (
		<>
			<div className="flex items-center justify-center gap-2">
				<div className="size-2 rounded-full bg-brand-accent transition-all duration-300 group-hover:scale-[100.8]" />
				<span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
					{children}
				</span>
			</div>
			<div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-brand-accent-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
				<span>{children}</span>
				<ArrowRight className="size-4" />
			</div>
		</>
	);

	if ("to" in props && props.to != null) {
		const { to, ...linkProps } = props;
		return (
			<Link to={to} className={classes} {...linkProps}>
				{content}
			</Link>
		);
	}

	const { type = "button", ...buttonProps } = props;
	return (
		<button type={type} className={classes} {...buttonProps}>
			{content}
		</button>
	);
};
