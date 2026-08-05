import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { ProjectDialog } from "@/components/ProjectDialog";
import { getProjectById } from "@/data/Project";

export const ProjectDetail = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const project = id ? getProjectById(id) : undefined;

	useEffect(() => {
		if (!project) {
			navigate("/projects", { replace: true });
		}
	}, [project, navigate]);

	if (!project) {
		return null;
	}

	return (
		<ProjectDialog
			project={project}
			open
			onOpenChange={(nextOpen) => {
				if (!nextOpen) {
					navigate("/projects");
				}
			}}
		/>
	);
};
