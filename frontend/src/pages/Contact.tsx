import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import {
	contactEmail,
	contactIntro,
	contactMethods,
	type ContactMethodInterface,
} from "@/data/Contact";
import {
	contactFieldClass,
	contactFormClass,
	contactMethodCardClass,
	contactMethodCardInteractiveClass,
	contactMethodValueAccentClass,
	contactMethodValueClass,
	contactSubmitClass,
	contactTextareaClass,
} from "@/utils/Classes";
import { cn } from "@/lib/utils";

type ContactFormStateType = {
	name: string;
	subject: string;
	message: string;
};

const initialFormState: ContactFormStateType = {
	name: "",
	subject: "",
	message: "",
};

const ContactMethodCard = ({ method }: { method: ContactMethodInterface }) => {
	const Icon = method.icon;
	const valueClass = method.accentValue ? contactMethodValueAccentClass : contactMethodValueClass;

	const content = (
		<>
			<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
				<Icon className="size-4" aria-hidden />
			</div>
			<div className="min-w-0">
				<p className="text-sm font-medium text-text-primary">{method.label}</p>
				<p className={valueClass}>{method.value}</p>
			</div>
		</>
	);

	const cardClass = cn(contactMethodCardClass, method.href && contactMethodCardInteractiveClass);

	if (!method.href) {
		return <div className={cardClass}>{content}</div>;
	}

	return (
		<a
			href={method.href}
			download={method.download}
			target={method.external ? "_blank" : undefined}
			rel={method.external ? "noopener noreferrer" : undefined}
			className={cardClass}
		>
			{content}
		</a>
	);
};

export const Contact = () => {
	const [form, setForm] = useState<ContactFormStateType>(initialFormState);

	const updateField = (field: keyof ContactFormStateType, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const subject = form.subject.trim() || "Portfolio inquiry";
		const body = [
			form.message.trim(),
			"",
			"—",
			form.name.trim() ? `Name: ${form.name.trim()}` : null,
		]
			.filter(Boolean)
			.join("\n");

		const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
	};

	return (
		<section
			className="flex w-full flex-1 flex-col px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-24"
			aria-labelledby="contact-heading"
		>
			<div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
				{/* Left: intro + contact methods */}
				<BlurFade delay={0.1} duration={0.7} direction="up" offset={16}>
					<div>
						<h1
							id="contact-heading"
							className="text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl"
						>
							{contactIntro.heading}
						</h1>
						<p className="mt-4 max-w-md text-text-secondary sm:text-lg">
							{contactIntro.subtext}
						</p>

						<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
							{contactMethods.map((method) => (
								<ContactMethodCard key={method.id} method={method} />
							))}
						</div>
					</div>
				</BlurFade>

				{/* Right: contact form */}
				<BlurFade delay={0.2} duration={0.75} direction="up" offset={16}>
					<form
						onSubmit={handleSubmit}
						className={contactFormClass}
						aria-label="Contact form"
					>
						<div>
							<label htmlFor="contact-name" className="text-sm text-text-secondary">
								Name
							</label>
							<input
								id="contact-name"
								name="name"
								type="text"
								autoComplete="name"
								required
								placeholder="Your name"
								value={form.name}
								onChange={(event) => updateField("name", event.target.value)}
								className={contactFieldClass}
							/>
						</div>

						<div>
							<label
								htmlFor="contact-subject"
								className="text-sm text-text-secondary"
							>
								Subject
							</label>
							<input
								id="contact-subject"
								name="subject"
								type="text"
								required
								placeholder="What's this regarding?"
								value={form.subject}
								onChange={(event) => updateField("subject", event.target.value)}
								className={contactFieldClass}
							/>
						</div>

						<div>
							<label
								htmlFor="contact-message"
								className="text-sm text-text-secondary"
							>
								Message
							</label>
							<textarea
								id="contact-message"
								name="message"
								required
								rows={5}
								placeholder="Your message"
								value={form.message}
								onChange={(event) => updateField("message", event.target.value)}
								className={contactTextareaClass}
							/>
						</div>

						<Button type="submit" size="lg" className={contactSubmitClass}>
							Send Message
							<ArrowRight className="size-4" aria-hidden />
						</Button>
					</form>
				</BlurFade>
			</div>
		</section>
	);
};
