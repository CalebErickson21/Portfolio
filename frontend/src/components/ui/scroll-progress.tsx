import { motion, useScroll, type MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressPropsInterface extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
	ref?: React.Ref<HTMLDivElement>;
}

export const ScrollProgress = ({ className, ref, ...props }: ScrollProgressPropsInterface) => {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			ref={ref}
			className={cn(
				"fixed inset-x-0 top-0 z-50 h-0.75 origin-left bg-brand-accent",
				className,
			)}
			style={{
				scaleX: scrollYProgress,
			}}
			{...props}
		/>
	);
};
