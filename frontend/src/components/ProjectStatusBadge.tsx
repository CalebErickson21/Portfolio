import type { ProjectStatusType } from "@/utils/Types";

const STATUS_LABELS: Record<ProjectStatusType, string> = {
	"in-progress": "In Progress",
};

export const ProjectStatusBadge = ({ status }: { status?: ProjectStatusType }) => {
	if (!status) return null;

	return (
		<span className="inline-flex rounded-full bg-brand-accent/15 px-2.5 py-0.5 text-xs font-medium text-brand-accent">
			{STATUS_LABELS[status]}
		</span>
	);
};
