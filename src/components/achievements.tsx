"use client"

import { useLanguage } from "@/lib/i18n";

export function Achievements() {
    const { t } = useLanguage();

    return (
        <section id="achievements" className="py-20 md:py-32 bg-navy-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            {t('ach.title')} <br />
                            <span className="text-gold-500">{t('ach.subtitle')}</span>
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                            {t('ach.desc')}
                        </p>
                    </div>

                    {/* Right: Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Metric 1 */}
                        <div className="bg-navy-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors">
                            <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">40%</div>
                            <p className="text-slate-300 font-medium">{t('ach.metric_1_desc')}</p>
                        </div>

                        {/* Metric 2 */}
                        <div className="bg-navy-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors">
                            <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">100%</div>
                            <p className="text-slate-300 font-medium">{t('ach.metric_2_desc')}</p>
                        </div>

                        {/* Metric 3 */}
                        <div className="bg-navy-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors">
                            <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">100%</div>
                            <p className="text-slate-300 font-medium">{t('ach.metric_3_desc')}</p>
                        </div>

                        {/* Metric 4 */}
                        <div className="bg-navy-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors">
                            <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">50%</div>
                            <p className="text-slate-300 font-medium">{t('ach.metric_4_desc')}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
