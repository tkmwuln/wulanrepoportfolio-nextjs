import type { Lang } from "./index"

const map: Record<string, string> = {
  // filters & labels
  All: "Semua",
  Featured: "Pilihan",
  "Read article": "Baca artikel",
  "Product, experience, and service design.": "Desain produk, pengalaman, dan layanan.",
  "Connect on LinkedIn": "Terhubung di LinkedIn",
  Govtech: "Govtech",
  "Design System": "Design System",
  Website: "Website",
  "Case Study": "Studi Kasus",
  "Design Tools": "Alat Desain",
  "Product Strategy": "Strategi Produk",
  "Product Management": "Manajemen Produk",
  Government: "Pemerintahan",
  "Component Library": "Pustaka Komponen",
  Development: "Pengembangan",
  Onboarding: "Onboarding",
  Strategy: "Strategi",
  Library: "Pustaka",
  Product: "Produk",
  Develop: "Pengembangan",
  "Restaurant · Website": "Restoran · Website",
  "Govtech · E-Health": "Govtech · E-Health",
  "Fine Dining · UI & Development": "Fine Dining · UI & Pengembangan",
  "Live Experience": "Pengalaman Langsung",
  "National Scale": "Skala Nasional",
  "3 Products": "3 Produk",
  "+38% Conversion": "+38% Konversi",
  "+61% D7 Retention": "+61% Retensi D7",
  "200+ Components": "200+ Komponen",
  "10M+ Users": "10 Jt+ Pengguna",
  "50k+ MAU": "50 rb+ MAU",
  "Products Shipped": "Produk yang Dirilis",
  "Collaborated With": "Berkolaborasi Dengan",
  Expertise: "Keahlian",
  "Exp.": "Peng.",
  Rating: "Rating",
  "8yr": "8 th",
  "Avg Conversion Lift": "Rata-rata Kenaikan Konversi",
  "Retention Impact": "Dampak Retensi",
  "Users Impacted": "Pengguna Terdampak",
  "Components Built": "Komponen Dibangun",
  "across checkout projects": "di seluruh proyek checkout",
  "D7 retention - Fintech onboarding": "Retensi D7 - onboarding Fintech",
  "monthly active users": "pengguna aktif bulanan",
  "design system tokens": "token design system",
  Portfolio: "Portofolio",
  "Featured Projects": "Proyek Pilihan",
  "View all": "Lihat semua",
  Health: "Kesehatan",
  "Restaurant Website": "Website Restoran",
  "Designer & Developer": "Desainer & Developer",
  "UI, UX & Development": "UI, UX & Pengembangan",
  "Responsive Web": "Web Responsif",
  // portfolio titles / descriptions
  "E-Health Platform — SIMRS Kesehatan": "Platform E-Health — SIMRS Kesehatan",
  "Strategic CX Platform": "Platform CX Strategis",
  "Government Procurement UX": "UX Pengadaan Pemerintah",
  "Fintech Onboarding — D7 Retention": "Onboarding Fintech — Retensi D7",
  "Design System — 200+ Components": "Design System — 200+ Komponen",
  "INA DIGITAL — PM & Design": "INA DIGITAL — PM & Desain",
  "INA DIGITAL — National Identity Platform": "INA DIGITAL — Platform Identitas Nasional",
  "Blockchain Service Design": "Desain Layanan Blockchain",
  "EMR & Vaccination Ecosystem": "Ekosistem EMR & Vaksinasi",
  "Le Nusa Paris — Digital Experience": "Le Nusa Paris — Pengalaman Digital",
  "End-to-end UX design for a hospital management system serving 50k+ monthly users across Indonesia's health ecosystem.":
    "Desain UX end-to-end untuk sistem manajemen rumah sakit yang melayani 50 rb+ pengguna bulanan di ekosistem kesehatan Indonesia.",
  "Designed and led UX for Telkom's customer experience platform, improving conversion across checkout flows through research-driven redesign.":
    "Merancang dan memimpin UX platform customer experience Telkom, meningkatkan konversi di alur checkout lewat redesain berbasis riset.",
  "Service design and UX lead for LKPP's digital procurement platform, streamlining complex government procurement flows.":
    "Memimpin service design dan UX platform pengadaan digital LKPP, menyederhanakan alur pengadaan pemerintah yang kompleks.",
  "Redesigned a fintech onboarding flow that improved 7-day retention using cognitive psychology and behavior-driven design.":
    "Mendesain ulang alur onboarding fintech yang meningkatkan retensi 7 hari dengan psikologi kognitif dan desain berbasis perilaku.",
  "Built a comprehensive design system with 200+ tokens and components, documentation, and a governance framework.":
    "Membangun design system komprehensif dengan 200+ token dan komponen, dokumentasi, serta kerangka tata kelola.",
  "Leading product management and design for Indonesia's national digital identity and government service platform.":
    "Memimpin manajemen produk dan desain untuk platform identitas digital nasional dan layanan pemerintah Indonesia.",
  "UX and service design for blockchain-based government services, simplifying decentralized workflows for non-technical users.":
    "UX dan service design untuk layanan pemerintah berbasis blockchain, menyederhanakan alur terdesentralisasi bagi pengguna non-teknis.",
  "Electronic Medical Records and vaccination management UX, part of Indonesia's Satu Sehat digital health initiative.":
    "UX rekam medis elektronik dan manajemen vaksinasi, bagian dari inisiatif kesehatan digital Satu Sehat Indonesia.",
  "An immersive restaurant website where Indonesian culinary heritage, cultural storytelling, and a seamless reservation journey meet.":
    "Website restoran imersif yang mempertemukan warisan kuliner Indonesia, cerita budaya, dan alur reservasi yang mulus.",
  // blog
  "How Cognitive Psychology Makes Better UX": "Bagaimana Psikologi Kognitif Membuat UX Lebih Baik",
  "Service Design in Indonesian Govtech: What Works": "Service Design di Govtech Indonesia: Apa yang Berhasil",
  "AI Product Management in 2025: A PM's Perspective": "Manajemen Produk AI di 2025: Perspektif Seorang PM",
  "61% Retention Boost: Lessons from Fintech Onboarding": "Retensi Naik 61%: Pelajaran dari Onboarding Fintech",
  "Building a Design System from Zero to 200+ Components": "Membangun Design System dari Nol hingga 200+ Komponen",
  "Making Blockchain UX Accessible to Non-Tech Users": "Membuat UX Blockchain Mudah Diakses Pengguna Non-Teknis",
  "Most UX problems don't come from bad design — they come from skipping steps. Exploring how behavioral models, cognitive load, and progressive disclosure create delightful products.":
    "Sebagian besar masalah UX bukan karena desain buruk — melainkan karena melewatkan langkah. Mengulas bagaimana model perilaku, beban kognitif, dan progressive disclosure menciptakan produk yang menyenangkan.",
  "Lessons from designing government digital services for millions of Indonesians across different levels of technology literacy.":
    "Pelajaran dari merancang layanan digital pemerintah untuk jutaan orang Indonesia dengan beragam tingkat literasi teknologi.",
  "Beyond the buzzwords: how AI changes the PM role, which skills matter, and how to approach building AI-powered products.":
    "Melampaui istilah populer: bagaimana AI mengubah peran PM, keterampilan apa yang penting, dan cara membangun produk berbasis AI.",
  "A behind-the-scenes look at the research, behavioral design decisions, mistakes, and changes that moved the needle.":
    "Sekilas di balik layar tentang riset, keputusan desain perilaku, kesalahan, dan perubahan yang menggerakkan angka.",
  "What worked, what failed, and the collaboration and governance model that helped the system grow.":
    "Apa yang berhasil, apa yang gagal, serta model kolaborasi dan tata kelola yang membantu sistem berkembang.",
  "Simplifying decentralized workflows with plain Indonesian language, familiar mental models, and trust-first design.":
    "Menyederhanakan alur terdesentralisasi dengan bahasa Indonesia sederhana, mental model yang familier, dan desain yang mengutamakan kepercayaan.",
  // about
  "AI Product Manager · Service Designer · UX Lead": "AI Product Manager · Service Designer · UX Lead",
  "AI Product Manager & Service Designer": "AI Product Manager & Service Designer",
  "UX Design": "Desain UX",
  "UX Research": "Riset UX",
  "Service Design": "Desain Layanan",
  "Project Management": "Manajemen Proyek",
  "Interaction Design": "Desain Interaksi",
  "Web Design": "Desain Web",
  "CX Design": "Desain CX",
  "End-to-end user experience design from research to delivery":
    "Desain pengalaman pengguna end-to-end dari riset hingga pengiriman",
  "Qualitative and quantitative research, usability testing": "Riset kualitatif dan kuantitatif, usability testing",
  "Service blueprints, journey maps, and systems thinking": "Service blueprint, journey map, dan systems thinking",
  "Agile PM, roadmaps, and stakeholder alignment": "Agile PM, roadmap, dan penyelarasan pemangku kepentingan",
  "Micro-interactions, prototyping, and motion design": "Mikro-interaksi, prototyping, dan motion design",
  "Responsive web design and scalable design systems": "Desain web responsif dan design system yang skalabel",
  "Product Manager & Design": "Product Manager & Desain",
  "UX Designer Lead": "Lead UX Designer",
  "Digital Experience Designer": "Digital Experience Designer",
  "UIX Designer": "UIX Designer",
  "Oct 2025 – Present": "Okt 2025 – Sekarang",
  "Oct 2022 – Sept 2025": "Okt 2022 – Sep 2025",
  "Dec 2020 – Oct 2022": "Des 2020 – Okt 2022",
  "May 2019 – Nov 2020": "Mei 2019 – Nov 2020",
  "Dec 2018 – Apr 2019": "Des 2018 – Apr 2019",
  "Led product requirements and delivery, enabling Puskesmas to track preventive healthcare screening across patient life cycles. Ensured personal data protection compliance and supported national health mapping and regulatory decision-making.":
    "Memimpin kebutuhan produk dan pengiriman, memungkinkan Puskesmas melacak skrining kesehatan preventif sepanjang siklus hidup pasien. Memastikan kepatuhan pelindungan data pribadi serta mendukung pemetaan kesehatan nasional dan pengambilan keputusan regulasi.",
  "Managed CKG and routine screening programs spanning NCDs, substance abuse, mental, adolescent, geriatric and environmental health, and smoking cessation. Developed Ayo CKG for self-registration and initial screening, plus program evaluation and reporting dashboards.":
    "Mengelola program CKG dan skrining rutin yang mencakup PTM, penyalahgunaan zat, kesehatan jiwa, remaja, lansia, dan lingkungan, serta berhenti merokok. Mengembangkan Ayo CKG untuk pendaftaran mandiri dan skrining awal, beserta dasbor evaluasi dan pelaporan program.",
  "Worked with working units, District Health Offices, vendors and primary healthcare providers, alongside cross-functional engineering, security, QA, product, design, research, content, marketing and support teams.":
    "Bekerja dengan unit kerja, Dinas Kesehatan Kabupaten/Kota, vendor, dan penyedia layanan kesehatan primer, bersama tim lintas fungsi: engineering, keamanan, QA, produk, desain, riset, konten, pemasaran, dan dukungan.",
  "Handled requirements, sprint planning, alignment, report updates, product versions, error management and research evaluation, using NPS, CSAT and UTAUT to guide feature improvements.":
    "Menangani kebutuhan, perencanaan sprint, penyelarasan, pembaruan laporan, versi produk, manajemen error, dan evaluasi riset, memakai NPS, CSAT, dan UTAUT untuk memandu perbaikan fitur.",
  "Leading solution designer for complex digital products, driven by research, and orchestrating all stakeholders.":
    "Solution designer utama untuk produk digital yang kompleks, berbasis riset, serta mengorkestrasi seluruh pemangku kepentingan.",
  "This journey is built on a passion for product design centered on good user experiences.":
    "Perjalanan ini dibangun atas passion pada desain produk yang berpusat pada pengalaman pengguna yang baik.",
  "In my role, I collaborate with product teams, technology teams, other stakeholders, and customers to gather, understand, and define requirements, and ultimately design exceptional user experiences.":
    "Dalam peran saya, saya berkolaborasi dengan tim produk, tim teknologi, pemangku kepentingan lain, dan pelanggan untuk mengumpulkan, memahami, dan mendefinisikan kebutuhan, lalu merancang pengalaman pengguna yang luar biasa.",
  "Coordinate and align with other teams to ensure that research will impact users, business objectives, and the organization.":
    "Berkoordinasi dan menyelaraskan dengan tim lain agar riset berdampak pada pengguna, tujuan bisnis, dan organisasi.",
  "Responsible for developing a design system focused on simplicity and efficiency, eliminating inconsistency, and increasing speed to produce new products.":
    "Bertanggung jawab mengembangkan design system yang berfokus pada kesederhanaan dan efisiensi, menghilangkan inkonsistensi, dan mempercepat produksi produk baru.",
  "Redesigning the mobile banking project.": "Mendesain ulang proyek mobile banking.",
  "Conduct research to explore and identify user pain points.": "Melakukan riset untuk menggali dan mengidentifikasi pain point pengguna.",
  "Worked as a user experience designer, conducting research to explore and identify user problems with user flow and process flow, and developing wireframes on the Pulse Apps project by Prudential.":
    "Bekerja sebagai user experience designer, melakukan riset untuk menggali masalah pengguna pada user flow dan process flow, serta membuat wireframe untuk proyek Pulse Apps oleh Prudential.",
  "Cognitive Psychology": "Psikologi Kognitif",
  "System Thinking": "Berpikir Sistem",
  "Design Strategy": "Strategi Desain",
  Prototyping: "Prototyping",
  "User Testing": "Uji Pengguna",
  "Stakeholder Management": "Manajemen Pemangku Kepentingan",
  "Design Systems": "Design System",
  "Information Architecture": "Arsitektur Informasi",
  "AI Product Management": "Manajemen Produk AI",
  "Design Sys.": "Design Sys.",
  // lenusa
  "An immersive restaurant website for Le Nusa Paris, where Indonesia's culinary heritage, cultural artistry, and a seamless reservation journey meet.":
    "Website restoran imersif untuk Le Nusa Paris, tempat warisan kuliner, seni budaya Indonesia, dan alur reservasi yang mulus bertemu.",
  "Featured project · 2025": "Proyek pilihan · 2025",
  "Visit live website": "Kunjungi website langsung",
  Reservation: "Reservasi",
  Menu: "Menu",
  Story: "Cerita",
  Contact: "Kontak",
  Role: "Peran",
  "Project type": "Jenis proyek",
  Services: "Layanan",
  Platform: "Platform",
  "The overview": "Gambaran umum",
  "A digital taste of Indonesia in the heart of Paris.": "Cita rasa digital Indonesia di jantung kota Paris.",
  "The challenge": "Tantangan",
  "Make culture tangible without slowing the journey.": "Membuat budaya terasa nyata tanpa memperlambat perjalanan pengguna.",
  "The process": "Proses",
  "From restaurant story to digital experience": "Dari cerita restoran menjadi pengalaman digital",
  "Key deliverables": "Hasil utama",
  "A complete journey from discovery to reservation.": "Perjalanan lengkap dari penemuan hingga reservasi.",
  "The outcome": "Hasil akhir",
  "A sensorial digital home for Le Nusa Paris.": "Rumah digital yang menggugah indra untuk Le Nusa Paris.",
  "Discuss a project": "Diskusikan proyek",
  "Putri Wulandari · Portfolio": "Putri Wulandari · Portofolio",
  "Next: Explore all projects": "Berikutnya: Jelajahi semua proyek",
  "Responsive · Desktop & Mobile": "Responsif · Desktop & Mobile",
  "The very best of Indonesia's culinary heritage.": "Yang terbaik dari warisan kuliner Indonesia.",
  "Express Indonesian culture through a premium visual language": "Mengekspresikan budaya Indonesia lewat bahasa visual premium",
  "Showcase dishes through an accessible menu carousel and viewer": "Menampilkan hidangan lewat carousel dan penampil menu yang mudah diakses",
  "Turn the restaurant story into an editorial experience": "Mengubah cerita restoran menjadi pengalaman editorial",
  "Create frictionless reservation and location journeys": "Menciptakan alur reservasi dan lokasi yang tanpa hambatan",
  Discover: "Temukan",
  Structure: "Susun",
  Design: "Desain",
  "Translated Le Nusa's restaurant experience, Indonesian heritage, and practical guest needs into a focused digital brief.":
    "Menerjemahkan pengalaman restoran Le Nusa, warisan Indonesia, dan kebutuhan praktis tamu menjadi brief digital yang terfokus.",
  "Organized the menu, food story, reservation, location, and contact journeys into clear, effortless navigation.":
    "Menata menu, cerita makanan, reservasi, lokasi, dan kontak menjadi navigasi yang jelas dan mudah.",
  "Combined editorial food photography, cultural motifs, and warm natural tones into an immersive restaurant experience.":
    "Memadukan fotografi makanan editorial, motif budaya, dan nuansa alami yang hangat menjadi pengalaman restoran yang imersif.",
  "Built responsive carousels, accessible modals, a menu viewer, reservation flow, and location interactions.":
    "Membangun carousel responsif, modal yang aksesibel, penampil menu, alur reservasi, dan interaksi lokasi.",
  "The experience balances emotional storytelling with practical tasks throughout every stage of the guest journey.":
    "Pengalaman ini menyeimbangkan cerita yang menyentuh dengan tugas praktis di setiap tahap perjalanan tamu.",
  "Le Nusa is an Indonesian fine-dining restaurant at 36 rue Fabert, Paris. Its name means “archipelago,” reflecting an experience where culinary excellence meets the rich artistic heritage of Indonesia.":
    "Le Nusa adalah restoran fine-dining Indonesia di 36 rue Fabert, Paris. Namanya berarti “nusantara”, mencerminkan pengalaman di mana keunggulan kuliner bertemu kekayaan warisan seni Indonesia.",
  "The website translates that sensorial experience into a digital journey—from discovering signature dishes and cultural stories to finding the restaurant and reserving a table.":
    "Website ini menerjemahkan pengalaman yang menggugah indra itu menjadi perjalanan digital—dari menemukan hidangan andalan dan cerita budaya hingga menemukan restoran dan memesan meja.",
  "The experience needed to celebrate Indonesian food, batik, weaving, suntiang, and gebyok while still helping international guests quickly browse the menu, check opening hours, find the Paris location, and reserve.":
    "Pengalaman ini harus merayakan kuliner, batik, tenun, suntiang, dan gebyok Indonesia, sambil tetap membantu tamu internasional menelusuri menu, mengecek jam buka, menemukan lokasi di Paris, dan memesan dengan cepat.",
  "The final product pairs rich imagery and cultural detail with practical features for menu discovery, storytelling, restaurant information, and table booking.":
    "Produk akhir memadukan visual yang kaya dan detail budaya dengan fitur praktis untuk menjelajah menu, bercerita, informasi restoran, dan pemesanan meja.",
  "The result presents the best of Indonesia's culinary heritage through a responsive, interactive experience—while giving guests clear access to the menu, restaurant story, opening hours, Paris location, WhatsApp contact, and reservations.":
    "Hasilnya menyajikan yang terbaik dari warisan kuliner Indonesia lewat pengalaman responsif dan interaktif—sekaligus memberi tamu akses jelas ke menu, cerita restoran, jam buka, lokasi Paris, kontak WhatsApp, dan reservasi.",
  "Responsive UI": "UI Responsif",
  "Menu Carousel & Viewer": "Carousel & Penampil Menu",
  "Food Story Modal": "Modal Cerita Makanan",
  "Reservation Flow": "Alur Reservasi",
  "Location & Contact": "Lokasi & Kontak",
  "Information Architecture ": "Arsitektur Informasi",
}

const months: Record<string, string> = {
  January: "Januari", February: "Februari", March: "Maret", May: "Mei", June: "Juni",
  July: "Juli", August: "Agustus", October: "Oktober", December: "Desember",
}

export function tr(lang: Lang, s: string): string {
  if (lang !== "id" || !s) return s
  const hit = map[s]
  if (hit) return hit
  const read = s.match(/^(\d+) min read$/)
  if (read) return `${read[1]} menit baca`
  const date = s.match(/^([A-Za-z]+) (\d+), (\d{4})$/)
  if (date) return `${date[2]} ${months[date[1]] ?? date[1]} ${date[3]}`
  const impact = s.match(/^(.+) impact · (.+)$/)
  if (impact) return `Dampak ${impact[1]} · ${impact[2]}`
  if (s.startsWith("across 6 industries")) return s.replace("across 6 industries", "di 6 industri")
  return s
}
