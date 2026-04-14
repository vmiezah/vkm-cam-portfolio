"use client"

import PageHeader from "@/components/ui/page-header";
import Link from "next/link"

export default function ResumePage() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/resumes/VKM.Creative.Resume.pdf";
        link.download = 'VKM.Creative.Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <PageHeader title="CREATIVE RESUME" />
            <main className="min-h-screen flex flex-col items-center justify-center">
                <div className="resumeWrapper">
                    <img src="/resumes/VKM.Creative.Resume.jpg" />
                    <span className="hover-text"
                        onClick={() => handleDownload()}
                        style={{ cursor: 'pointer' }}
                    >Click to Download</span>
                </div>
            </main>
        </>
    )
}
