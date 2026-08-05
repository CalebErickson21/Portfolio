import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { ExperienceDialog } from "@/components/ExperienceDialog";
import { getExperienceById } from "@/data/Experience";

export const ExperienceDetail = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const experience = id ? getExperienceById(id) : undefined;

	useEffect(() => {
		if (!experience) {
			navigate("/experience", { replace: true });
		}
	}, [experience, navigate]);

	if (!experience) {
		return null;
	}

	return (
		<ExperienceDialog
			experience={experience}
			open
			onOpenChange={(nextOpen) => {
				if (!nextOpen) {
					navigate("/experience");
				}
			}}
		/>
	);
};
