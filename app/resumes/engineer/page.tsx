"use client"

import PageHeader from "@/components/ui/page-header";

export default function ResumePage() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/resumes/Victor-Eng-Resume-copy.pdf";
        link.download = 'Victor-Eng-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <PageHeader title="ENGINEER RESUME"/>
            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="resumeWrapper">
                    <img src="/resumes/Victor-Eng-Resume-img.jpg" />
                    <span className="hover-text"
                        onClick={() => handleDownload()}
                        style={{ cursor: 'pointer' }}
                    >Click to Download</span>
                </div>
            </main>
        </>
    )
}
