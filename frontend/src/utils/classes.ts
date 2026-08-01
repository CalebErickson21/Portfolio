import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const detailsLinkClass = cn(
	buttonVariants({ variant: "default", size: "sm" }),
	"bg-brand-accent text-white hover:bg-brand-accent/80 dark:text-background dark:hover:bg-brand-accent/70",
);

export const outlineLinkClass = cn(
	buttonVariants({ variant: "outline", size: "sm" }),
	"border-text-secondary/30 bg-transparent text-text-primary hover:bg-surface hover:text-text-primary dark:border-text-secondary/40 dark:bg-transparent dark:hover:bg-surface/70",
);

export const accentButtonClass = cn(
	buttonVariants({ variant: "default", size: "default" }),
	"bg-brand-accent text-white hover:bg-brand-accent/80 dark:text-background dark:hover:bg-brand-accent/70",
);

export const outlineButtonClass = cn(
	buttonVariants({ variant: "outline", size: "default" }),
	"border-text-secondary/30 bg-transparent text-text-primary hover:bg-surface hover:text-text-primary dark:border-text-secondary/40 dark:bg-transparent dark:hover:bg-surface/70",
);

export const iconButtonClass =
	"text-text-secondary transition-colors hover:text-text-primary cursor-pointer";
