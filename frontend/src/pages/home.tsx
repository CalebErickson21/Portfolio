import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { FeaturedProjects } from "@/components/FeaturedProjects";

import headshot from "@/assets/headshot.jpg";

const roles = ["Software Engineer", "AI Researcher", "Full-Stack Developer", "Problem Solver"];

export const Home = () => {
	return (
		<div className="flex min-h-full flex-col">
			{/* Landing hero */}
			<section className="flex min-h-[calc(100dvh-7rem)] flex-1 flex-col-reverse md:flex-row">
				{/* Left side */}
				<div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
					<p className="text-xl font-medium tracking-wide text-brand-accent">
						Hi! I&apos;m Caleb Erickson
					</p>
					<h1 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl">
						<span className="block text-text-secondary">I&apos;m a</span>
						<TypingAnimation
							words={roles}
							loop
							as="span"
							className="mt-1 block min-h-[1.2em] text-brand-accent leading-tight tracking-tight"
							typeSpeed={75}
							deleteSpeed={50}
							pauseDelay={1800}
						/>
					</h1>
					<p className="mt-6 max-w-md leading-relaxed text-text-secondary sm:text-lg">
						I design and build thoughtful software, from polished interfaces to
						intelligent systems, with a focus on clarity, craft, and real-world impact.
					</p>
				</div>

				{/* Right side */}
				<div className="flex flex-1 items-center justify-center px-4 py-8">
					<BackgroundGradient
						containerClassName="w-2/3 max-w-[18rem] sm:w-full sm:max-w-xs md:max-w-sm"
						className="rounded-2xl bg-background p-1"
					>
						<div className="relative aspect-4/5 overflow-hidden rounded-2xl">
							<img
								src={headshot}
								alt="Caleb Erickson"
								className="h-full w-full object-cover object-[center_20%]"
							/>
						</div>
					</BackgroundGradient>
				</div>
			</section>

			<FeaturedProjects />
		</div>
	);
};
