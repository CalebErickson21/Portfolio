import { useEffect } from "react";

import ResumeFile from "@/assets/downloadables/CalebEricksonResume.pdf";

export const ResumeDownloader = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    useEffect(() => {
        const link = document.createElement("a");
        link.href = ResumeFile;
        link.download = "Caleb_Erickson_Resume.pdf";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return <>{children}</>;
};
