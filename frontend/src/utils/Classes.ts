import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const detailsLinkClass = cn(
	buttonVariants({ variant: "default", size: "sm" }),
	"bg-brand-accent text-white hover:bg-brand-accent/80",
);

export const outlineLinkClass = cn(
	buttonVariants({ variant: "outline", size: "sm" }),
	"border-text-secondary/30 bg-transparent text-text-primary hover:bg-surface hover:text-text-primary",
);

/** Non-interactive chip matching outline link sizing (e.g. Private, In Progress). */
export const mutedChipClass = cn(
	buttonVariants({ variant: "outline", size: "sm" }),
	"pointer-events-none border-text-secondary/20 bg-transparent text-text-secondary/70",
);

export const iconButtonClass =
	"text-text-secondary transition-colors hover:text-text-primary cursor-pointer";

/** Shared surface panel used by About cards, accordion, and homepage cards */
export const surfacePanelClass = "bg-surface/80 ring-1 ring-text-secondary/15 backdrop-blur-sm";

export const infoCardClass = cn("rounded-2xl p-6 sm:p-7", surfacePanelClass);

export const contactMethodCardClass = cn(
	"flex items-center gap-3 rounded-2xl p-3.5 sm:p-4",
	surfacePanelClass,
);

export const contactMethodCardInteractiveClass =
	"transition-colors hover:bg-surface hover:ring-brand-accent/25";

export const contactMethodValueClass = "truncate text-sm text-text-secondary";

export const contactMethodValueAccentClass = "truncate text-sm font-medium text-brand-accent";

export const contactFieldClass = cn(
	"mt-1.5 w-full rounded-xl border border-transparent bg-background/60 px-3.5 py-2.5 text-sm text-text-primary outline-none transition-colors",
	"placeholder:text-text-secondary/50 ring-1 ring-text-secondary/15",
	"focus-visible:border-brand-accent/40 focus-visible:ring-brand-accent/30",
);

export const contactTextareaClass = cn(contactFieldClass, "min-h-28 resize-y");

export const contactFormClass = cn(infoCardClass, "flex flex-col gap-5 sm:p-8");

export const contactSubmitClass =
	"mt-1 w-full gap-2 rounded-xl bg-brand-accent text-white hover:bg-brand-accent/85";
