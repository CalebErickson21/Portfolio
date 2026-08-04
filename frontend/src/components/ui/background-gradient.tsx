import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

const gradientClass =
	"bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--brand-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,#60a5fa,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#93c5fd,transparent),radial-gradient(circle_farthest-side_at_0_0,#2563eb,var(--background))]";

export const BackgroundGradient = ({
	children,
	className,
	containerClassName,
	animate = true,
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
	animate?: boolean;
}) => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<div className={cn("relative p-1 group", containerClassName)}>
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? "initial" : undefined}
				animate={animate ? "animate" : undefined}
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: "reverse",
							}
						: undefined
				}
				style={{
					backgroundSize: animate ? "400% 400%" : undefined,
				}}
				className={cn(
					"absolute inset-0 z-1 rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100",
					gradientClass,
				)}
			/>
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? "initial" : undefined}
				animate={animate ? "animate" : undefined}
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: "reverse",
							}
						: undefined
				}
				style={{
					backgroundSize: animate ? "400% 400%" : undefined,
				}}
				className={cn(
					"absolute inset-0 z-1 rounded-3xl will-change-transform",
					gradientClass,
				)}
			/>

			<div className={cn("relative z-10", className)}>{children}</div>
		</div>
	);
};
