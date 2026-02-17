"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useRef } from "react";

export default function CVMaker() {
    // Hardcoded data for the CV to ensure it looks perfect and static for the PDF
    const cvData = {
        name: "Prastita Yudha, S.H.",
        role: "Senior Administrative Professional",
        contact: {
            email: "prastitayudha@gmail.com",
            phone: "+62 853 3357 41996",
            location: "Jawa Timur, Indonesia",
            instagram: "instagram.com/prastita.yudha"
        },
        summary: "Dedicated Administrative Professional with a strong legal background (S.H.) and over 7 years of experience in office management, inventory control, and operational efficiency. Proven track record of improving workflows, maintaining compliance, and supporting executive teams in high-paced environments.",
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
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10 print:bg-white print:p-0">
            {/* Control Panel - Hidden when printing */}
            <div className="fixed top-0 left-0 right-0 bg-navy-900 text-white p-4 flex justify-between items-center print:hidden z-50 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="font-semibold">CV Generator</p>
                    <div className="flex gap-4">
                        <Button onClick={() => window.history.back()} variant="ghost" className="text-white hover:text-gold-500">
                            Back
                        </Button>
                        <Button onClick={handlePrint} className="bg-gold-500 text-navy-900 hover:bg-gold-600">
                            Print / Save as PDF
                        </Button>
                    </div>
                </div>
            </div>

            {/* A4 Page */}
            <div className="mx-auto bg-white shadow-xl w-[210mm] min-h-[297mm] p-[10mm] md:p-[15mm] print:shadow-none print:w-full print:p-0 text-navy-900 leading-relaxed mt-12 print:mt-0">

                {/* Header */}
                <header className="border-b-2 border-navy-900 pb-6 mb-6">
                    <h1 className="text-4xl font-bold text-navy-900 uppercase tracking-tight mb-2">{cvData.name}</h1>
                    <p className="text-xl text-gold-600 font-medium tracking-wide mb-4">{cvData.role}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                            📧 {cvData.contact.email}
                        </span>
                        <span className="flex items-center gap-1">
                            📱 {cvData.contact.phone}
                        </span>
                        <span className="flex items-center gap-1">
                            📍 {cvData.contact.location}
                        </span>
                        {/* <span className="flex items-center gap-1">
                            🔗 {cvData.contact.instagram}
                        </span> */}
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">Professional Summary</h2>
                    <p className="text-slate-700 text-justify text-sm">
                        {cvData.summary}
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-4">Work Experience</h2>
                    <div className="space-y-6">
                        {cvData.experience.map((job, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-baseline mb-1">
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

                <div className="grid grid-cols-2 gap-8">
                    {/* Skills */}
                    <section>
                        <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">Core Competencies</h2>
                        <ul className="text-sm text-slate-700 grid grid-cols-1 gap-1">
                            {cvData.competencies.map((skill, idx) => (
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
                            <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">Education</h2>
                            <div className="space-y-4">
                                {cvData.education.map((edu, idx) => (
                                    <div key={idx}>
                                        <h3 className="font-bold text-sm text-navy-900">{edu.degree}</h3>
                                        <p className="text-sm text-slate-600">{edu.institution}</p>
                                        <p className="text-xs text-slate-500">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-navy-900 uppercase border-b border-slate-200 pb-1 mb-3">Languages</h2>
                            <ul className="text-sm text-slate-700 space-y-1">
                                {cvData.languages.map((lang, idx) => (
                                    <li key={idx}>{lang}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
}
