"use client"

import { usePathname } from "next/navigation";

export default function DropdownMenu() {
    const path = usePathname();

    return (
        <nav className="absolute top-12 right-10 z-50 bg-[var(--white)] border border-[var(--light-grey)] rounded-md py-2 px-6">
            <ul className="flex-col float-right">
                <li className="py-1">
                    <a href="/" className={path === "/" ? "active" : ""}>
                        Home
                    </a>
                </li>
                <li className="py-1">
                    <a href="/about" className={path === "/about/" ? "active" : ""}>
                        About
                    </a>
                </li>
                <li className="py-1">
                    <a href="/contact" className={path === "/contact/" ? "active" : ""}>
                        Contact
                    </a>
                </li>
                <li className="py-1">
                    <a href="/blog" className={path === "/blog/" ? "active" : ""}>
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
}