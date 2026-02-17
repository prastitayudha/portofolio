"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function Navigation() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const { language, setLanguage, t } = useLanguage()

    const navItems = [
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.competencies'), href: "#competencies" },
        { name: t('nav.experience'), href: "#experience" },
        { name: t('nav.achievements'), href: "#achievements" },
        { name: t('nav.contact'), href: "#contact" },
    ]

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsMobileMenuOpen(false)
        }
    }

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'id' : 'en')
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

                {/* Logo / Name */}
                <Link
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className={cn(
                        "text-xl font-bold tracking-wider uppercase",
                        isScrolled ? "text-navy-900" : "text-white"
                    )}
                >
                    PY <span className="text-gold-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-gold-500",
                                isScrolled ? "text-navy-900" : "text-white/90"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                    <Link href="/cv">
                        <Button
                            size="sm"
                            className={cn(
                                "ml-4 font-semibold",
                                isScrolled
                                    ? "bg-navy-900 text-white hover:bg-navy-800"
                                    : "bg-white text-navy-900 hover:bg-slate-100"
                            )}
                        >
                            {t('nav.download_cv')}
                        </Button>
                    </Link>

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className={cn(
                            "ml-2 flex items-center gap-1 text-xs font-bold uppercase tracking-wide px-2 py-1 rounded transition-colors",
                            isScrolled
                                ? "text-navy-900 hover:bg-slate-100"
                                : "text-white hover:bg-white/20"
                        )}
                        aria-label="Switch Language"
                    >
                        <span className={language === 'en' ? "text-gold-500" : "opacity-50"}>EN</span>
                        <span className="opacity-50">/</span>
                        <span className={language === 'id' ? "text-gold-500" : "opacity-50"}>ID</span>
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className={cn(
                            "text-xs font-bold uppercase tracking-wide px-2 py-1 rounded transition-colors",
                            isScrolled
                                ? "text-navy-900 hover:bg-slate-100"
                                : "text-white hover:bg-white/20"
                        )}
                    >
                        <span className={language === 'en' ? "text-gold-500" : "opacity-80"}>EN</span>
                        <span className="opacity-50">/</span>
                        <span className={language === 'id' ? "text-gold-500" : "opacity-80"}>ID</span>
                    </button>

                    <button
                        className="p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={isScrolled ? "text-navy-900" : "text-white"}
                        >
                            {isMobileMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {
                isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 md:hidden animate-fade-in-up">
                        <nav className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="text-navy-900 font-medium hover:text-gold-500 py-2 border-b border-slate-100 last:border-0"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <Link href="/cv" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full bg-navy-900 text-white hover:bg-navy-800">
                                        {t('nav.download_cv')}
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )
            }
        </header >
    )
}
