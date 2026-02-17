"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { Modal } from "@/components/ui/modal";
import React from "react";

export function ExecutiveSummary() {
    const { t } = useLanguage();
    const [isBioOpen, setIsBioOpen] = React.useState(false);

    return (
        <section id="about" className="py-20 md:py-32 bg-white text-navy-900">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Leadership Statement */}
                    <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900">
                            {t('about.title')}
                        </h2>
                        <div className="h-1 w-20 bg-gold-500 rounded-full"></div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('about.statement_1')}
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('about.statement_2')}
                        </p>

                        <div className="pt-4">
                            <Button
                                variant="outline"
                                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
                                onClick={() => setIsBioOpen(true)}
                            >
                                {t('about.view_bio')}
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Highlight 1 */}
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-10 w-10 bg-navy-900/10 rounded-lg flex items-center justify-center mb-4 text-navy-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{t('about.card_1_title')}</h3>
                            <p className="text-sm text-slate-500">{t('about.card_1_desc')}</p>
                        </div>

                        {/* Highlight 2 */}
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-10 w-10 bg-navy-900/10 rounded-lg flex items-center justify-center mb-4 text-navy-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{t('about.card_2_title')}</h3>
                            <p className="text-sm text-slate-500">{t('about.card_2_desc')}</p>
                        </div>

                        {/* Highlight 3 */}
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-10 w-10 bg-navy-900/10 rounded-lg flex items-center justify-center mb-4 text-navy-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{t('about.card_3_title')}</h3>
                            <p className="text-sm text-slate-500">{t('about.card_3_desc')}</p>
                        </div>

                        {/* Highlight 4 */}
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-10 w-10 bg-navy-900/10 rounded-lg flex items-center justify-center mb-4 text-navy-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{t('about.card_4_title')}</h3>
                            <p className="text-sm text-slate-500">{t('about.card_4_desc')}</p>
                        </div>

                    </div>
                </div>
            </div>

            <Modal isOpen={isBioOpen} onClose={() => setIsBioOpen(false)} title={t('about.bio_modal_title')}>
                <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
                    <p className="font-medium text-navy-900">
                        {t('about.bio_intro')}
                    </p>
                    <p>
                        {t('about.bio_history')}
                    </p>
                    <p>
                        {t('about.bio_philosophy')}
                    </p>
                    <p className="italic text-slate-500 pt-2 border-t border-slate-100 mt-4">
                        {t('about.bio_closing')}
                    </p>
                </div>
            </Modal>
        </section>
    );
}
