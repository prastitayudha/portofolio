"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";

export default function CVPage() {
    const { t, language } = useLanguage();

    // Data from CVMaker - duplicated here for consistency in preview
    const cvData = {
        en: {
            name: "Prastita Yudha, S.H.",
            role: "Senior Administrative Professional",
            contact: {
                email: "prastitayudha@gmail.com",
                phone: "+62 853 3357 41996",
                location: "Jawa Timur, Indonesia",
                instagram: "instagram.com/prastita.yudha"
            },
            summary: "Dedicated Administrative Professional with a strong legal background (S.H.) and over 7 years of experience in office management, inventory control, and operational efficiency. Proven track record of improving workflows, maintaining compliance, and supporting executive teams in high-paced environments.",
            section_titles: {
                summary: "Professional Summary",
                experience: "Work Experience",
                competencies: "Core Competencies",
                education: "Education",
                languages: "Languages"
            },
            experience: [
                {
                    company: "PT Life Stone Indonesia",
                    role: "Administration Office",
                    period: "2024 - 2025",
                    achievements: [
                        "Managed comprehensive office administration including inventory control and digital archiving.",
                        "Optimized inventory tracking system, reducing discrepancies by 100%.",
                        "Streamlined sales administrative workflows, increasing response time by 50%.",
                        "Implemented digital archiving for rapid document retrieval."
                    ]
                },
                {
                    company: "Kantor Imigrasi Tanjung Perak",
                    role: "Administration Officer",
                    period: "2017 - 2023",
                    achievements: [
                        "Oversaw general office administration, facility maintenance, and hygiene standards.",
                        "Ensured 100% facility operational readiness and maintenance compliance.",
                        "Managed substantial inventory with high accuracy and accountability.",
                        "Enforced strict adherence to cleanliness and safety protocols during daily operations."
                    ]
                },
                {
                    company: "Verwood Hotel & Residence",
                    role: "Admin Office",
                    period: "2016 - 2017",
                    achievements: [
                        "Provided administrative support to back-office team ensuring data accuracy.",
                        "Supported daily data entry and filing systems with zero errors.",
                        "Coordinated inter-departmental communications effectively.",
                        "Assisted in general office management and guest service support."
                    ]
                }
            ],
            competencies: [
                "Office Management", "Inventory Control", "Data Analysis",
                "Document Control", "Process Optimization", "Team Coordination",
                "Executive Support", "System Administration (ERP, Office 365)"
            ],
            education: [
                {
                    degree: "Bachelor of Law (Sarjana Hukum)",
                    institution: "Universitas Bojonegoro",
                    year: "2023"
                },
                {
                    degree: "Natural Sciences (IPA)",
                    institution: "SMA Muhammadiyah 1 Jombang",
                    year: "2016"
                }
            ],
            languages: ["Bahasa Indonesia (Native)", "English (Professional Working Proficiency)"]
        },
        id: {
            name: "Prastita Yudha, S.H.",
            role: "Profesional Administrasi Senior",
            contact: {
                email: "prastitayudha@gmail.com",
                phone: "+62 853 3357 41996",
                location: "Jawa Timur, Indonesia",
                instagram: "instagram.com/prastita.yudha"
            },
            summary: "Profesional Administrasi yang berdedikasi dengan latar belakang hukum yang kuat (S.H.) dan lebih dari 7 tahun pengalaman dalam manajemen kantor, kontrol inventaris, dan efisiensi operasional. Memiliki rekam jejak terbukti dalam meningkatkan alur kerja, menjaga kepatuhan, dan mendukung tim eksekutif di lingkungan kerja yang cepat.",
            section_titles: {
                summary: "Ringkasan Profesional",
                experience: "Pengalaman Kerja",
                competencies: "Kompetensi Inti",
                education: "Pendidikan",
                languages: "Bahasa"
            },
            experience: [
                {
                    company: "PT Life Stone Indonesia",
                    role: "Staf Administrasi",
                    period: "2024 - 2025",
                    achievements: [
                        "Mengelola administrasi kantor secara menyeluruh termasuk kontrol inventaris dan pengarsipan digital.",
                        "Mengoptimalkan sistem pelacakan inventaris, mengurangi ketidaksesuaian hingga 100%.",
                        "Merampingkan alur kerja administrasi penjualan, meningkatkan waktu respons sebesar 50%.",
                        "Menerapkan pengarsipan digital untuk pengambilan dokumen yang cepat."
                    ]
                },
                {
                    company: "Kantor Imigrasi Tanjung Perak",
                    role: "Petugas Administrasi",
                    period: "2017 - 2023",
                    achievements: [
                        "Mengawasi administrasi umum kantor, pemeliharaan fasilitas, dan standar kebersihan.",
                        "Memastikan kesiapan operasional fasilitas 100% dan kepatuhan pemeliharaan.",
                        "Mengelola inventaris dalam jumlah besar dengan akurasi dan akuntabilitas tinggi.",
                        "Menegakkan kepatuhan ketat terhadap protokol kebersihan dan keselamatan selama operasional harian."
                    ]
                },
                {
                    company: "Verwood Hotel & Residence",
                    role: "Admin Office",
                    period: "2016 - 2017",
                    achievements: [
                        "Memberikan dukungan administratif kepada tim back-office untuk memastikan akurasi data.",
                        "Mendukung input data harian dan sistem pengarsipan tanpa kesalahan.",
                        "Mengoordinasikan komunikasi antar departemen secara efektif.",
                        "Membantu dalam manajemen kantor umum dan dukungan layanan tamu."
                    ]
                }
            ],
            competencies: [
                "Manajemen Kantor", "Kontrol Inventaris", "Analisis Data",
                "Kontrol Dokumen", "Optimalisasi Proses", "Koordinasi Tim",
                "Dukungan Eksekutif", "Administrasi Sistem (ERP, Office 365)"
            ],
            education: [
                {
                    degree: "Sarjana Hukum (S.H.)",
                    institution: "Universitas Bojonegoro",
                    year: "2023"
                },
                {
                    degree: "Ilmu Pengetahuan Alam (IPA)",
                    institution: "SMA Muhammadiyah 1 Jombang",
                    year: "2016"
                }
            ],
            languages: ["Bahasa Indonesia (Penutur Asli)", "Bahasa Inggris (Profesional)"]
        }
    };

    const data = cvData[language];

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-navy-900 text-white flex items-center justify-between px-6 z-50 shadow-md print:hidden">
                <Link href="/" className="text-xl font-bold tracking-wider uppercase">
                    PY <span className="text-gold-500">.</span>
                </Link>
                <div className="flex gap-4">
                    {/* Language Switcher could go here if needed, but main nav has it */}
                    <Link href="/">
                        <Button variant="ghost" className="text-white hover:text-gold-500 hover:bg-white/10">
                            {t('nav.back_home') || 'Back to Home'}
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24 pb-24 px-4 flex justify-center bg-slate-100 overflow-y-auto">
                <div className="bg-white shadow-xl w-full max-w-[210mm] min-h-[297mm] p-8 md:p-12 text-navy-900 leading-relaxed origin-top scale-[0.8] md:scale-100 transition-transform">

                    {/* CV Header */}
                    <header className="border-b-2 border-navy-900 pb-6 mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 uppercase tracking-tight mb-2">{data.name}</h1>
                        <p className="text-xl text-gold-600 font-medium tracking-wide mb-4">{data.role}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                                📧 {data.contact.email}
                            </span>
                            <span className="flex items-center gap-1">
                                📱 {data.contact.phone}
                            </span>
                            <span className="flex items-center gap-1">
                                📍 {data.contact.location}
                            </span>
                        </div>
                    </header>

                    {/* Summary */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">{data.section_titles.summary}</h2>
                        <p className="text-slate-700 text-justify text-sm">
                            {data.summary}
                        </p>
                    </section>

                    {/* Experience */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-4">{data.section_titles.experience}</h2>
                        <div className="space-y-6">
                            {data.experience.map((job, idx) => (
                                <div key={idx}>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                                        <h3 className="font-bold text-base text-navy-900">{job.role}</h3>
                                        <span className="text-sm text-slate-500 font-medium">{job.period}</span>
                                    </div>
                                    <div className="text-sm text-gold-600 font-medium mb-2">{job.company}</div>
                                    <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                                        {job.achievements.map((ach, i) => (
                                            <li key={i}>{ach}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Skills */}
                        <section>
                            <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">{data.section_titles.competencies}</h2>
                            <ul className="text-sm text-slate-700 grid grid-cols-1 gap-1">
                                {data.competencies.map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 bg-gold-500 rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Education & Languages */}
                        <div className="space-y-6">
                            <section>
                                <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">{data.section_titles.education}</h2>
                                <div className="space-y-4">
                                    {data.education.map((edu, idx) => (
                                        <div key={idx}>
                                            <h3 className="font-bold text-sm text-navy-900">{edu.degree}</h3>
                                            <p className="text-sm text-slate-600">{edu.institution}</p>
                                            <p className="text-xs text-slate-500">{edu.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">{data.section_titles.languages}</h2>
                                <ul className="text-sm text-slate-700 space-y-1">
                                    {data.languages.map((lang, idx) => (
                                        <li key={idx}>{lang}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                </div>
            </main>

            {/* Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex justify-center items-center gap-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] print:hidden">
                <a href="/cv.pdf" download="Prastita_Yudha_CV.pdf">
                    <Button size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600 font-bold px-8 shadow-lg shadow-gold-500/20">
                        {t('nav.download_cv_file') || 'Download PDF'}
                    </Button>
                </a>
            </div>
        </div>
    );
}
