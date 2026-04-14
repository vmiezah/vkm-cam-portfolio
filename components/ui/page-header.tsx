import Link from "next/link"

type HeaderProps = {
    title: string;
};

export default function PageHeader({ title }: HeaderProps): React.JSX.Element {
    return (
        <header className="fixed top-0 left-0 w-full p-6 grid grid-cols-3 items-center  backdrop-blur-sm z-50">
            {/* Left side: Back Button */}
            <div className="flex justify-start">
                <Link
                    href="/"
                    className="border border-white/20 px-3 py-2 font-mono text-xs text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                    BACK
                </Link>
            </div>

            {/* Center: Title */}
            <div className="flex justify-center">
                <h1 className="font-mono text-sm tracking-[0.3em] text-hud-green">{title}</h1>
            </div>
            {/* Right side: Invisible Spacer (mirrors the button width) */}
        </header>
    )
}