"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.competencies': 'Competencies',
        'nav.experience': 'Experience',
        'nav.achievements': 'Achievements',
        'nav.contact': 'Contact',
        'nav.download_cv': 'View CV',
        'nav.back_home': 'Back to Home',
        'nav.download_cv_file': 'Download PDF',

        // Hero
        'hero.role': 'Administrative Professional',
        'hero.title_start': 'Organizing Success',
        'hero.title_end': 'With Precision & Integrity',
        'hero.description': 'Efficient, reliable, and detail-oriented administrative expert aged 27, committed to ensuring seamless operational workflows and organizational excellence.',
        'hero.meet': 'Schedule a Meeting',

        // Executive Summary
        'about.title': 'Executive Summary',
        'about.statement_1': 'I am Prastita Yudha, S.H., a 27-year-old dedicated Administrative Professional with a strong legal background and a passion for organizational order.',
        'about.statement_2': 'My approach combines disciplined execution with forward-thinking strategies to optimize office functions. I thrive in dynamic environments where precision, confidentiality, and adaptability are paramount to success.',
        'about.view_bio': 'View Full Professional Bio',
        'about.card_1_title': 'Office Management',
        'about.card_1_desc': 'Streamlining daily operations and facility management.',
        'about.card_2_title': 'Cost Control',
        'about.card_2_desc': 'Budget monitoring and resource optimization.',
        'about.card_3_title': 'Data Reporting',
        'about.card_3_desc': 'Accurate data analysis and executive reporting.',
        'about.card_4_title': 'Team Leadership',
        'about.card_4_desc': 'Mentoring staff and coordinating workflows.',

        // Bio Modal
        'about.bio_modal_title': 'Professional Profile',
        'about.bio_intro': 'Dedicated Administrative Professional with a strong background in law (S.H.) and over 7 years of hands-on experience in office management and operational efficiency.',
        'about.bio_history': 'My career journey began in the hospitality industry at Verwood Hotel & Residence, where I learned the importance of service excellence and detail orientation. I then transitioned to public service at Kantor Imigrasi Tanjung Perak, serving for six years in a role that demanded high integrity, strict compliance, and meticulous administrative management. Most recently, at PT Life Stone Indonesia, I have further refined my skills in inventory control and digital archiving.',
        'about.bio_philosophy': 'I believe that effective administration is the backbone of any successful organization. My work philosophy centers on precision, reliability, and the continuous improvement of daily workflows to support broader business goals.',
        'about.bio_closing': 'Currently, I am seeking new opportunities to bring my organizational expertise to a forward-thinking team.',

        // Competencies
        'comp.title': 'Core Competencies',
        'comp.subtitle': 'A comprehensive skillset refined through dedicated service in high-demand corporate environments.',

        // Experience
        'exp.title': 'Professional Experience',
        'exp.subtitle': 'A timeline of progressive responsibility and impact across leading organizations.',

        // Achievements
        'ach.title': 'Executive Impact &',
        'ach.subtitle': 'Key Achievements',
        'ach.desc': 'Driving measurable results through strategic initiatives, process improvements, and effective leadership.',
        'ach.metric_1_desc': 'Increase in operational efficiency through strategic process improvements',
        'ach.metric_2_desc': 'Accuracy in inventory management and asset tracking',
        'ach.metric_3_desc': 'Compliance with all internal and external regulatory audits',
        'ach.metric_4_desc': 'Reduction in administrative response time via digital transformation',

        // Experience List
        'exp.job1_role': 'Administration Office',
        'exp.job1_company': 'PT Life Stone Indonesia',
        'exp.job1_period': '2024 - 2025',
        'exp.job1_desc': 'Managed comprehensive office administration including inventory control, digital archiving, and sales support functions.',
        'exp.job1_ach1': 'Optimized inventory tracking and stock management systems.',
        'exp.job1_ach2': 'Streamlined sales administrative workflows for better efficiency.',
        'exp.job1_ach3': 'Implemented digital archiving for rapid document retrieval.',

        // Job 2
        'exp.job2_role': 'Administration Officer',
        'exp.job2_company': 'Kantor Imigrasi Tanjung Perak',
        'exp.job2_period': '2017 - 2023',
        'exp.job2_desc': 'Oversaw general office administration, facility maintenance, inventory management, and hygiene standards compliance.',
        'exp.job2_ach1': 'Ensured 100% facility operational readiness and maintenance.',
        'exp.job2_ach2': 'Managed substantial inventory with high accuracy and accountability.',
        'exp.job2_ach3': 'Enforced strict adherence to cleanliness and safety protocols.',

        // Job 3
        'exp.job3_role': 'Admin Office',
        'exp.job3_company': 'Verwood Hotel & Residence',
        'exp.job3_period': '2016 - 2017',
        'exp.job3_desc': 'Provided administrative support to the back-office team, ensuring smooth daily operations and data accuracy.',
        'exp.job3_ach1': 'Supported daily data entry and filing systems.',
        'exp.job3_ach2': 'Coordinated inter-departmental communications effective.',
        'exp.job3_ach3': 'Assisted in general office management and guest service support.',
        // Contact
        'contact.title': 'Ready to Elevate Your',
        'contact.title_2': 'Organizational Excellence?',
        'contact.desc': 'Open to new opportunities where I can leverage my administrative expertise to drive business success.',
    },
    id: {
        // Navigation
        'nav.about': 'Tentang',
        'nav.competencies': 'Kompetensi',
        'nav.experience': 'Pengalaman',
        'nav.achievements': 'Pencapaian',
        'nav.contact': 'Kontak',
        'nav.download_cv': 'Lihat CV',
        'nav.back_home': 'Kembali ke Beranda',
        'nav.download_cv_file': 'Unduh PDF',

        // Hero
        'hero.role': 'Profesional Administrasi',
        'hero.title_start': 'Mengorganisir Kesuksesan',
        'hero.title_end': 'Dengan Presisi & Integritas',
        'hero.description': 'Ahli administrasi berusia 27 tahun yang efisien, andal, dan berorientasi pada detail, berkomitmen untuk memastikan alur kerja operasional yang mulus dan keunggulan organisasi.',
        'hero.meet': 'Jadwalkan Pertemuan',

        // Executive Summary
        'about.title': 'Ringkasan Eksekutif',
        'about.statement_1': 'Saya Prastita Yudha, S.H., Profesional Administrasi berdedikasi berusia 27 tahun dengan latar belakang hukum yang kuat dan semangat untuk ketertiban organisasi.',
        'about.statement_2': 'Pendekatan saya menggabungkan eksekusi yang disiplin dengan strategi berwawasan ke depan untuk mengoptimalkan fungsi kantor. Saya berkembang di lingkungan dinamis di mana ketepatan, kerahasiaan, dan kemampuan beradaptasi sangat penting.',
        'about.view_bio': 'Lihat Profil Profesional Lengkap',
        'about.card_1_title': 'Manajemen Kantor',
        'about.card_1_desc': 'Merampingkan operasional harian dan manajemen fasilitas.',
        'about.card_2_title': 'Kontrol Biaya',
        'about.card_2_desc': 'Pemantauan anggaran dan optimalisasi sumber daya.',
        'about.card_3_title': 'Pelaporan Data',
        'about.card_3_desc': 'Analisis data akurat dan pelaporan eksekutif.',
        'about.card_4_title': 'Kepemimpinan Tim',
        'about.card_4_desc': 'Mentoring staf dan koordinasi alur kerja.',

        // Bio Modal
        'about.bio_modal_title': 'Profil Profesional',
        'about.bio_intro': 'Profesional Administrasi yang berdedikasi dengan latar belakang hukum (S.H.) dan lebih dari 7 tahun pengalaman praktis dalam manajemen kantor dan efisiensi operasional.',
        'about.bio_history': 'Perjalanan karier saya dimulai di industri perhotelan di Verwood Hotel & Residence, di mana saya belajar pentingnya keunggulan layanan dan orientasi pada detail. Saya kemudian beralih ke layanan publik di Kantor Imigrasi Tanjung Perak, mengabdi selama enam tahun dalam peran yang menuntut integritas tinggi, kepatuhan ketat, dan manajemen administrasi yang teliti. Terakhir, di PT Life Stone Indonesia, saya semakin mengasah kemampuan saya dalam kontrol inventaris dan pengarsipan digital.',
        'about.bio_philosophy': 'Saya percaya bahwa administrasi yang efektif adalah tulang punggung dari setiap organisasi yang sukses. Filosofi kerja saya berpusat pada ketepatan, keandalan, dan perbaikan berkelanjutan dari alur kerja harian untuk mendukung tujuan bisnis yang lebih luas.',
        'about.bio_closing': 'Saat ini, saya mencari peluang baru untuk membawa keahlian organisasi saya ke tim yang berpikiran maju.',

        // Competencies
        'comp.title': 'Kompetensi Inti',
        'comp.subtitle': 'Keterampilan komprehensif yang diasah melalui pengabdian bertahun-tahun di lingkungan korporat yang menuntut.',
        'comp.item_1_title': 'Manajemen Kantor',
        'comp.item_1_desc': 'Pengawasan menyeluruh operasional fasilitas, persediaan, dan protokol administrasi.',
        'comp.item_2_title': 'Analisis Data',
        'comp.item_2_desc': 'Pelaporan tingkat lanjut, pelacakan KPI, dan dukungan pengambilan keputusan berbasis data.',
        'comp.item_3_title': 'Kontrol Dokumen',
        'comp.item_3_desc': 'Penerapan sistem pengarsipan digital dan manajemen dokumentasi kepatuhan.',
        'comp.item_4_title': 'Manajemen Inventaris',
        'comp.item_4_desc': 'Pelacakan aset, strategi pengadaan, dan manajemen hubungan vendor.',
        'comp.item_5_title': 'Optimalisasi Proses',
        'comp.item_5_desc': 'Mengidentifikasi hambatan dan menerapkan SOP untuk meningkatkan efisiensi operasional.',
        'comp.item_6_title': 'Koordinasi Tim',
        'comp.item_6_desc': 'Kolaborasi lintas departemen dan supervisi staf administrasi.',
        'comp.item_7_title': 'Dukungan Eksekutif',
        'comp.item_7_desc': 'Manajemen kalender, perencanaan perjalanan, dan penanganan korespondensi rahasia.',
        'comp.item_8_title': 'Administrasi Sistem',
        'comp.item_8_desc': 'Kemahiran dalam sistem ERP, Admin Microsoft 365, dan alat manajemen proyek.',

        // Experience
        'exp.title': 'Pengalaman Profesional',
        'exp.subtitle': 'Garis waktu tanggung jawab progresif dan dampak di berbagai organisasi terkemuka.',

        // Experience List
        'exp.job1_role': 'Administration Office',
        'exp.job1_company': 'PT Life Stone Indonesia',
        'exp.job1_period': '2024 - 2025',
        'exp.job1_desc': 'Mengelola administrasi kantor yang komprehensif termasuk kontrol inventaris, pengarsipan digital, dan dukungan penjualan.',
        'exp.job1_ach1': 'Mengoptimalkan pelacakan inventaris dan sistem manajemen stok.',
        'exp.job1_ach2': 'Merampingkan alur kerja administrasi penjualan untuk efisiensi yang lebih baik.',
        'exp.job1_ach3': 'Menerapkan pengarsipan digital untuk pengambilan dokumen yang cepat.',

        // Job 2
        'exp.job2_role': 'Administration Officer',
        'exp.job2_company': 'Kantor Imigrasi Tanjung Perak',
        'exp.job2_period': '2017 - 2023',
        'exp.job2_desc': 'Mengawasi administrasi umum kantor, pemeliharaan fasilitas, manajemen inventaris, dan kepatuhan standar kebersihan.',
        'exp.job2_ach1': 'Memastikan kesiapan operasional fasilitas 100% dan pemeliharaannya.',
        'exp.job2_ach2': 'Mengelola inventaris dalam jumlah besar dengan akurasi dan akuntabilitas tinggi.',
        'exp.job2_ach3': 'Menegakkan kepatuhan ketat terhadap protokol kebersihan dan keselamatan.',

        // Job 3
        'exp.job3_role': 'Admin Office',
        'exp.job3_company': 'Verwood Hotel & Residence',
        'exp.job3_period': '2016 - 2017',
        'exp.job3_desc': 'Memberikan dukungan administratif kepada tim back-office, memastikan kelancaran operasional harian dan akurasi data.',
        'exp.job3_ach1': 'Mendukung input data harian dan sistem pengarsipan.',
        'exp.job3_ach2': 'Mengoordinasikan komunikasi antar departemen secara efektif.',
        'exp.job3_ach3': 'Membantu dalam manajemen kantor umum dan dukungan layanan tamu.',

        // Achievements
        'ach.title': 'Dampak Eksekutif &',
        'ach.subtitle': 'Pencapaian Utama',
        'ach.desc': 'Mendorong hasil terukur melalui inisiatif strategis, perbaikan proses, dan kepemimpinan yang efektif.',
        'ach.metric_1_desc': 'Peningkatan efisiensi operasional melalui perbaikan proses strategis',
        'ach.metric_2_desc': 'Akurasi dalam manajemen inventaris dan pelacakan aset',
        'ach.metric_3_desc': 'Kepatuhan terhadap semua audit regulasi internal dan eksternal',
        'ach.metric_4_desc': 'Pengurangan waktu respons administrasi melalui transformasi digital',

        // Contact
        'contact.title': 'Siap Meningkatkan',
        'contact.title_2': 'Keunggulan Organisasi Anda?',
        'contact.desc': 'Terbuka untuk peluang baru di mana saya dapat memanfaatkan keahlian administrasi saya untuk mendorong kesuksesan bisnis.',

        // Competencies List
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('id'); // Default to Indonesian as requested context implies

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
