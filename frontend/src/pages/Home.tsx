import { useState } from "react";
import { Link } from "react-router";

import { BlurFade } from "@/components/ui/blur-fade";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { FeaturedExperience } from "@/components/FeaturedExperience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { accentButtonClass, outlineButtonClass } from "@/utils/classes";

import headshot from "@/assets/headshot.jpg";

const roles = ["Software Engineer", "AI Researcher", "Full-Stack Developer", "Problem Solver"];

function startsWithVowel(word: string) {
	return /^[aeiou]/i.test(word);
}

export const Home = () => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const article = startsWithVowel(roles[currentWordIndex] ?? "") ? "an" : "a";

	return (
		<div className="flex min-h-full flex-col">
			{/* Landing hero */}
			<section className="flex min-h-[calc(100dvh-4.5rem)] flex-1 flex-col-reverse md:flex-row">
				{/* Left side */}
				<div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:px-10 md:items-start md:text-left lg:px-16 xl:px-24">
					<BlurFade delay={0.15} duration={0.75} direction="up" offset={18}>
						<p className="text-xl font-medium tracking-wide text-brand-accent">
							Hi! I&apos;m Caleb Erickson
						</p>
						<h1 className="mt-3 text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl">
							<span className="block text-text-secondary">I&apos;m {article}</span>
							<TypingAnimation
								words={roles}
								loop
								as="span"
								currentWordIndex={currentWordIndex}
								onWordIndexChange={setCurrentWordIndex}
								className="mt-1 block min-h-[1.2em] text-brand-accent leading-tight tracking-tight"
								typeSpeed={75}
								deleteSpeed={75}
								pauseDelay={1800}
							/>
						</h1>
						<p className="mt-6 max-w-md leading-relaxed text-text-secondary sm:text-lg">
							I design and build thoughtful software, from polished interfaces to
							intelligent systems, with a focus on clarity, craft, and real-world
							impact.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
							<Link to="/experience" className={accentButtonClass}>
								View my work
							</Link>
							<Link to="/contact" className={outlineButtonClass}>
								Contact me
							</Link>
						</div>
					</BlurFade>
				</div>

				{/* Right side */}
				<div className="flex flex-1 items-center justify-center px-4 py-8">
					<BlurFade delay={0.35} duration={0.85} direction="up" offset={18}>
						<div className="relative mx-auto w-56 sm:w-64 md:w-72 lg:w-80">
							<div
								aria-hidden
								className="absolute top-[18%] left-1/2 size-[85%] -translate-x-1/2 rounded-full bg-brand-accent/30 blur-3xl dark:bg-brand-accent/40"
							/>
							<img
								src={headshot}
								alt="Caleb Erickson"
								className="relative z-10 w-full rounded-2xl object-cover object-[center_20%] shadow-xl shadow-brand-accent/20 ring-1 ring-text-secondary/10"
							/>
						</div>
					</BlurFade>
				</div>
			</section>

			{/* Page highlights */}
			<BlurFade inView direction="up" offset={20} duration={1.25}>
				<FeaturedProjects />
			</BlurFade>
			<BlurFade inView direction="up" offset={20} duration={1.25} delay={0.15}>
				<FeaturedExperience />
			</BlurFade>
		</div>
	);
};
