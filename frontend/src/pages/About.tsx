import { BookOpen, GraduationCap, Heart } from "lucide-react";

import { SkillsCloud } from "@/components/SkillsCloud";
import { BlurFade } from "@/components/ui/blur-fade";
import {
	aboutGallery,
	aboutHeadshot,
	aboutIntro,
	education,
	hobbies,
	pillars,
	publications,
} from "@/data/About";
import { infoCardClass } from "@/utils/Classes";

export const About = () => {
	return (
		<div className="flex min-h-full flex-col">
			{/* Hero */}
			<section
				className="flex w-full flex-col gap-10 px-6 py-8 sm:px-10 md:flex-row md:items-center md:gap-12 lg:gap-16 lg:px-16 xl:px-24"
				aria-labelledby="about-heading"
			>
				<div className="flex flex-1 flex-col">
					<BlurFade delay={0.1} duration={0.7} direction="up" offset={16}>
						<h1
							id="about-heading"
							className="text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl"
						>
							About Me
						</h1>
						{aboutIntro.map((paragraph, index) => (
							<p
								key={paragraph}
								className={`max-w-xl leading-relaxed text-text-secondary sm:text-lg ${index === 0 ? "mt-5" : "mt-4"}`}
							>
								{paragraph}
							</p>
						))}

						<div className="mt-10 grid gap-6 sm:grid-cols-3">
							{pillars.map(({ icon: Icon, title, description }) => (
								<div key={title} className="flex flex-col gap-2.5">
									<div className="flex items-center gap-2.5">
										<h2 className="font-semibold text-text-primary">{title}</h2>
										<div className="flex size-9 shrink-0 items-center justify-center text-brand-accent">
											<Icon className="size-4" aria-hidden />
										</div>
									</div>
									<p className="text-sm leading-relaxed text-text-secondary">
										{description}
									</p>
								</div>
							))}
						</div>
					</BlurFade>
				</div>

				<div className="flex flex-1 items-center justify-center md:justify-end">
					{/* Soft glow */}
					<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
						<div
							aria-hidden
							className="pointer-events-none absolute top-1/2 left-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/25 blur-3xl"
						/>

						{/* Small screens: headshot only */}
						<BlurFade
							delay={0.2}
							duration={0.8}
							direction="up"
							offset={16}
							className="relative mx-auto w-56 sm:w-64 md:hidden"
						>
							<img
								src={aboutHeadshot.src}
								alt={aboutHeadshot.alt}
								className="w-full rounded-2xl object-contain shadow-xl shadow-brand-accent/20 ring-1 ring-text-secondary/10"
							/>
						</BlurFade>

						{/* md+: loose 2×2 grid, each image fully visible */}
						<div className="relative hidden grid-cols-2 items-start gap-3 md:grid lg:gap-4">
							{aboutGallery.map((image) => (
								<BlurFade
									key={image.src}
									delay={image.delay}
									duration={0.85}
									direction="up"
									offset={18}
									className={image.className}
								>
									<img
										src={image.src}
										alt={image.alt}
										className="w-full rounded-2xl object-contain shadow-lg shadow-brand-accent/15 ring-1 ring-text-secondary/10"
									/>
								</BlurFade>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<BlurFade inView direction="up" offset={20} duration={1}>
				<SkillsCloud />
			</BlurFade>

			{/* Education / Publications / Hobbies */}
			<BlurFade inView direction="up" offset={20} duration={1} delay={0.1}>
				<section
					className="grid w-full gap-5 px-6 py-8 sm:px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-16 xl:px-24"
					aria-label="Education, publications, and interests"
				>
					{/* Education */}
					<article className={infoCardClass}>
						<div className="flex items-center gap-2.5">
							<div className="flex size-9 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
								<GraduationCap className="size-5" aria-hidden />
							</div>
							<h2 className="text-lg font-semibold text-text-primary">Education</h2>
						</div>
						<ul className="mt-5 space-y-5">
							{education.map(({ degree, school, dates, concentration, gpa }) => (
								<li key={`${degree}-${school}`} className="space-y-1.5">
									<p className="font-medium text-text-primary">{degree}</p>
									{concentration && (
										<p className="text-sm text-text-secondary">
											Concentration:{" "}
											<span className="text-text-primary">
												{concentration}
											</span>
										</p>
									)}
									<p className="text-text-secondary">{school}</p>
									<p className="text-sm text-text-secondary">{dates}</p>
									{gpa && (
										<p className="pt-1 text-sm text-text-secondary">
											GPA: <span className="text-text-primary">{gpa}</span>
										</p>
									)}
								</li>
							))}
						</ul>
					</article>

					{/* Publications */}
					<article className={infoCardClass}>
						<div className="flex items-center gap-2.5">
							<div className="flex size-9 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
								<BookOpen className="size-5" aria-hidden />
							</div>
							<h2 className="text-lg font-semibold text-text-primary">Publications</h2>
						</div>
						<ul className="mt-5 space-y-5">
							{publications.map(({ id, title, authors, venue, year, href }) => (
								<li key={id} className="space-y-1.5">
									{href ? (
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-text-primary transition-colors hover:text-brand-accent"
										>
											{title}
										</a>
									) : (
										<p className="font-medium text-text-primary">{title}</p>
									)}
									<p className="text-sm text-text-secondary">{authors}</p>
									<p className="text-sm text-text-secondary">
										{venue} · {year}
									</p>
								</li>
							))}
						</ul>
					</article>

					{/* Hobbies */}
					<article className={`${infoCardClass} md:col-span-2 lg:col-span-1`}>
						<div className="flex items-center gap-2.5">
							<div className="flex size-9 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
								<Heart className="size-5" aria-hidden />
							</div>
							<h2 className="text-lg font-semibold text-text-primary">
								Hobbies &amp; Interests
							</h2>
						</div>
						<ul className="mt-5 space-y-4">
							{hobbies.map(({ icon: Icon, title, description }) => (
								<li key={title} className="flex gap-3">
									<div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg text-brand-accent">
										<Icon className="size-4" aria-hidden />
									</div>
									<div>
										<p className="font-medium text-text-primary">{title}</p>
										<p className="text-sm text-text-secondary">{description}</p>
									</div>
								</li>
							))}
						</ul>
					</article>
				</section>
			</BlurFade>
		</div>
	);
};
