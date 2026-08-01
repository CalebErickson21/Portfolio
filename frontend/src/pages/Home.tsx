import { useState } from "react";
import { Link } from "react-router";

import { BackgroundGradient } from "@/components/ui/background-gradient";
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
					<BlurFade
						delay={0.35}
						duration={0.85}
						direction="up"
						offset={18}
						className="w-2/3 max-w-[18rem] sm:w-full sm:max-w-xs md:max-w-sm"
					>
						<BackgroundGradient
							containerClassName="w-full"
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
