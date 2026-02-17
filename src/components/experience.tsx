"use client"

import { useLanguage } from "@/lib/i18n";

export function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            company: t('exp.job1_company'),
            role: t('exp.job1_role'),
            period: t('exp.job1_period'),
            description: t('exp.job1_desc'),
            achievements: [
                t('exp.job1_ach1'),
                t('exp.job1_ach2'),
                t('exp.job1_ach3'),
            ],
        },
        {
            company: t('exp.job2_company'),
            role: t('exp.job2_role'),
            period: t('exp.job2_period'),
            description: t('exp.job2_desc'),
            achievements: [
                t('exp.job2_ach1'),
                t('exp.job2_ach2'),
                t('exp.job2_ach3'),
            ],
        },
        {
            company: t('exp.job3_company'),
            role: t('exp.job3_role'),
            period: t('exp.job3_period'),
            description: t('exp.job3_desc'),
            achievements: [
                t('exp.job3_ach1'),
                t('exp.job3_ach2'),
                t('exp.job3_ach3'),
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 md:py-32 bg-white text-navy-900">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

                    {/* Header */}
                    <div className="md:w-1/3 md:sticky md:top-24 animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">
                            {t('exp.title')}
                        </h2>
                        <div className="h-1 w-20 bg-gold-500 rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 mb-6">
                            {t('exp.subtitle')}
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="md:w-2/3 space-y-12">
                        {experiences.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-0 group">
                                {/* Timeline Line (Desktop) */}
                                <div className="hidden md:block absolute left-[-29px] top-2 bottom-[-48px] w-px bg-slate-200 group-last:bottom-0"></div>

                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:block absolute left-[-33px] top-2.5 h-2.5 w-2.5 rounded-full border-2 border-gold-500 bg-white group-hover:bg-gold-500 transition-colors z-10"></div>

                                {/* Mobile Border Left */}
                                <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200"></div>
                                <div className="md:hidden absolute left-[-4px] top-2.5 h-2.5 w-2.5 rounded-full border-2 border-gold-500 bg-white group-hover:bg-gold-500 transition-colors z-10"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-navy-900">{item.role}</h3>
                                    <span className="text-gold-600 font-medium whitespace-nowrap">{item.period}</span>
                                </div>

                                <h4 className="text-lg text-slate-700 font-medium mb-4">{item.company}</h4>

                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {item.description}
                                </p>

                                <ul className="space-y-2">
                                    {item.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start text-slate-600 text-sm">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-gold-500"></span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
