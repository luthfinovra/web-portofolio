import React, { useState } from 'react';

type Section = "hero" | "projects" | "experiences" | "about";

type NavbarProps = {
    setActiveSection: (section: Section) => void;
    activeSection: Section;
};

export default function Navbar({ setActiveSection, activeSection }: NavbarProps) {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 text-white text-sm md:text-md lg:text-lg">
            <div className="px-12 2xl:px-72 xl:px-56 lg:px-32">
                <div className="flex items-center justify-between h-16">
                    {/* <span className="text-2xl dark:text-white font-semibold">nvr_luthfi</span> */}
                    <div className="flex space-x-4 font-bold dark:text-white">
                        <NavLink
                            onClick={() => setActiveSection("hero")}
                            active={activeSection === "hero"}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            onClick={() => setActiveSection("projects")}
                            active={activeSection === "projects"}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            onClick={() => setActiveSection("experiences")}
                            active={activeSection === "experiences"}
                        >
                            Experiences
                        </NavLink>
                        <NavLink
                            onClick={() => setActiveSection("about")}
                            active={activeSection === "about"}
                        >
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

type NavLinkProps = {
    onClick: () => void;
    active: boolean;
    children: React.ReactNode; // Ensure children prop is defined correctly
};

const NavLink: React.FC<NavLinkProps> = ({ onClick, active, children }) => (
    <a
        href="#"
        className={`dark:hover:text-green-300 ${active ? "gradient-text" : ""}`}
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
    >
        {children}
    </a>
);
