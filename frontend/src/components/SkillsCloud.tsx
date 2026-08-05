import { Atom } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { IconCloud } from "@/components/ui/icon-cloud";
import { cn } from "@/lib/utils";
import { getSkillImages, getSkillsByCategory, skillCategories } from "@/data/Skill";
import { surfacePanelClass } from "@/utils/Classes";

const skillImages = getSkillImages();

export const SkillsCloud = () => {
	return (
		<section
			id="skills"
			className="w-full px-6 py-8 sm:px-10 lg:px-16 xl:px-24"
			aria-labelledby="skills-heading"
		>
			<div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
				{/* Header + accordion */}
				<div className="flex flex-col gap-4 lg:col-span-2">
					<div>
						<div className="flex items-center gap-2.5">
							<Atom className="size-6 text-brand-accent" aria-hidden />
							<h2
								id="skills-heading"
								className="text-2xl font-semibold text-text-primary sm:text-3xl"
							>
								Skills &amp; Technologies
							</h2>
						</div>
						<p className="mt-2 text-text-secondary">
							Tools and technologies I use when building + deploying.
						</p>
					</div>

					<Accordion className={cn("border-transparent", surfacePanelClass)}>
						{skillCategories.map((c) => {
							const categorySkills = getSkillsByCategory(c.id);

							return (
								<AccordionItem
									key={c.id}
									value={c.id}
									className="border-text-secondary/10 data-open:bg-brand-accent/5"
								>
									<AccordionTrigger className="text-text-primary hover:no-underline">
										<span className="flex items-center gap-2">
											<span
												className="size-2.5 shrink-0 rounded-full border-2 border-brand-accent bg-brand-accent/20 transition-colors group-aria-expanded/accordion-trigger:bg-brand-accent"
												aria-hidden
											/>
											{c.label}
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-text-secondary">
										<ul className="flex flex-wrap gap-1.5">
											{categorySkills.map((skill) => (
												<li
													key={skill.id}
													className="rounded-full border border-text-secondary/15 bg-background/70 px-3 py-0.5 text-xs text-text-primary"
												>
													{skill.label}
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>

				{/* Icon cloud */}
				<div className="relative flex items-center justify-center lg:col-span-3 lg:min-h-0">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-[8%] rounded-full bg-brand-accent/15 blur-3xl"
					/>

					<div className="relative w-full max-w-md lg:absolute lg:inset-0 lg:mx-auto lg:flex lg:max-w-none lg:items-center lg:justify-center">
						<div className="w-full lg:aspect-square lg:h-full lg:w-auto lg:max-w-full">
							<IconCloud
								images={skillImages}
								showControl={false}
								size={560}
								iconSize={56}
								className="block h-full w-full [&_canvas]:h-full [&_canvas]:w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
