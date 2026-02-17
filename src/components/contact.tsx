"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-50 text-navy-900 border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-6">
                    {t('contact.title')} <br className="hidden md:block" />
                    {t('contact.title_2')}
                </h2>
                <div className="h-1 w-20 bg-gold-500 rounded-full mx-auto mb-8"></div>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {t('contact.desc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Instagram */}
                    <a href="https://instagram.com/prastita.yudha" target="_blank" rel="noopener noreferrer" className="group p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-gold-500/30 transition-all duration-300">
                        <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                        <p className="text-slate-500 text-sm">@prastita.yudha</p>
                    </a>

                    {/* Email */}
                    <a href="mailto:prastitayudha@gmail.com" className="group p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-gold-500/30 transition-all duration-300">
                        <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-slate-500 text-sm">prastitayudha@gmail.com</p>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/6285335741996" target="_blank" rel="noopener noreferrer" className="group p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-gold-500/30 transition-all duration-300">
                        <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                        <p className="text-slate-500 text-sm">+62 853 3357 41996</p>
                    </a>
                </div>

                <div className="mt-16 text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Senior Administrative Professional. All Rights Reserved.
                </div>
            </div>
        </section>
    );
}
