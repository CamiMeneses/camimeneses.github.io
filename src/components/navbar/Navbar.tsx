
import React, { useState, useEffect } from "react";
import { useTranslation } from "i18n";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { Nav, Logo, Menu, MenuItem, MobileMenuButton, MobileMenu } from "./Navbar.styles";

const Navbar = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: "#welcome" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.education, href: "#education" },
        { name: t.nav.experience, href: "#experience" },
        { name: t.nav.contact, href: "#contact" },
    ];

    return (
        <Nav $scrolled={scrolled}>
            <Logo href="#welcome">
                &lt;Cami<span>Meneses</span> /&gt;
            </Logo>

            <Menu>
                {navLinks.map((link) => (
                    <MenuItem key={link.name} href={link.href}>
                        {link.name}
                    </MenuItem>
                ))}
            </Menu>

            <MobileMenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <FiX /> : <FiMenu />}
            </MobileMenuButton>

            <AnimatePresence>
                {isOpen && (
                    <MobileMenu
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <MenuItem
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </MenuItem>
                        ))}
                    </MobileMenu>
                )}
            </AnimatePresence>
        </Nav>
    );
};

export default Navbar;
