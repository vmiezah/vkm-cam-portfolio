"use client"

import Link from "next/link"

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
            <header className="fixed top-0 left-0 w-full p-6 grid grid-cols-3 items-center  backdrop-blur-sm z-50">
                {/* 1. Left side: Back Button */}
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="border border-white/20 px-3 py-2 font-mono text-xs text-white/80 transition-colors hover:border-white/40 hover:text-white"
                    >
                        BACK
                    </Link>
                </div>

                {/* 2. Center: Title */}
                <div className="flex justify-center">
                    <h1 className="font-mono text-sm tracking-[0.3em] text-hud-green">MY RESUME</h1>
                </div>
                {/* 3. Right side: Invisible Spacer (mirrors the button width) */}
            </header>
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
