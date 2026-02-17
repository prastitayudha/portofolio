"use client"

import { useLanguage } from "@/lib/i18n";

export function Competencies() {
    const { t } = useLanguage();

    const competencies = [
        {
            title: t('comp.item_1_title'),
            description: t('comp.item_1_desc'),
        },
        {
            title: t('comp.item_2_title'),
            description: t('comp.item_2_desc'),
        },
        {
            title: t('comp.item_3_title'),
            description: t('comp.item_3_desc'),
        },
        {
            title: t('comp.item_4_title'),
            description: t('comp.item_4_desc'),
        },
        {
            title: t('comp.item_5_title'),
            description: t('comp.item_5_desc'),
        },
        {
            title: t('comp.item_6_title'),
            description: t('comp.item_6_desc'),
        },
        {
            title: t('comp.item_7_title'),
            description: t('comp.item_7_desc'),
        },
        {
            title: t('comp.item_8_title'),
            description: t('comp.item_8_desc'),
        },
    ];

    return (
        <section id="competencies" className="py-20 md:py-32 bg-slate-50 text-navy-900 border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">
                        {t('comp.title')}
                    </h2>
                    <div className="h-1 w-20 bg-gold-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600">
                        {t('comp.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {competencies.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-gold-500/30 transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
