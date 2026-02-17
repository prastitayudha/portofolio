"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
    const { t } = useLanguage();
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-navy-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-navy-900/20 z-10"></div>
                <Image
                    src="/executive-portrait.png"
                    alt="Senior Administrative Professional"
                    fill
                    className="object-cover object-center animate-fade-in duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-transparent z-20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-12">
                <div className="max-w-4xl text-center md:text-left">
                    <h2
                        className="mb-4 text-lg font-medium tracking-wider text-gold-500 uppercase opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '1.5s' }}
                    >
                        {t('hero.role')}
                    </h2>
                    <h1
                        className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '2s' }}
                    >
                        {t('hero.title_start')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {t('hero.title_end')}
                        </span>
                    </h1>
                    <p
                        className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl leading-relaxed opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '2.5s' }}
                    >
                        {t('hero.description')}
                    </p>

                    <div
                        className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '3s' }}
                    >
                        <Link href="/cv">
                            <Button size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600 font-semibold min-w-[200px]">
                                {t('nav.download_cv')}
                            </Button>
                        </Link>
                        <a href="https://wa.me/6285335741996" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900 min-w-[200px]">
                                {t('hero.meet')}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
                    className="text-white/50"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
