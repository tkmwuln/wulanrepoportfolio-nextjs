import { b, type ArticleDetail } from "../content-types"

export const articlesB: Record<string, ArticleDetail> = {
  "fintech-onboarding-lessons": {
    sections: [
      {
        h: b("Where we actually started", "Titik awal yang sebenarnya"),
        p: [
          b(
            "When I joined the fintech team, the brief sounded simple: fix onboarding. The dashboards said many people downloaded the app, a smaller group finished sign-up, and a much smaller group ever funded an account. Everyone had a theory. Marketing blamed the ad audience, engineering blamed load time, and design wanted a visual refresh.",
            "Ketika bergabung dengan tim fintech, brief-nya terdengar sederhana: perbaiki onboarding. Dashboard menunjukkan banyak orang mengunduh aplikasi, sebagian kecil menyelesaikan pendaftaran, dan jauh lebih sedikit lagi yang pernah mendanai akun. Semua orang punya teori. Marketing menyalahkan audiens iklan, engineering menyalahkan waktu muat, dan desain ingin tampilan baru.",
          ),
          b(
            "I resisted the redesign. A new coat of paint on a funnel you do not understand is the most expensive way to learn nothing. Instead, I spent the first two weeks instrumenting the flow step by step, watching session recordings, and calling users who had stopped halfway. The result was a map of where people left and, more importantly, a list of questions we could not yet answer.",
            "Saya menolak desain ulang. Mengecat ulang funnel yang tidak kita pahami adalah cara termahal untuk tidak belajar apa-apa. Sebagai gantinya, dua minggu pertama saya pakai untuk memasang pelacakan di setiap langkah, menonton rekaman sesi, dan menelepon pengguna yang berhenti di tengah jalan. Hasilnya adalah peta titik orang pergi, dan yang lebih penting, daftar pertanyaan yang belum bisa kami jawab.",
          ),
        ],
        callout: b(
          "Before you redesign a funnel, instrument it. A drop-off you can name is half solved.",
          "Sebelum mendesain ulang funnel, pasang pelacakan dulu. Titik drop-off yang bisa disebut namanya sudah setengah terpecahkan.",
        ),
      },
      {
        h: b("KYC is not the enemy, surprise is", "KYC bukan musuhnya, kejutan yang jadi masalah"),
        p: [
          b(
            "The biggest cliff was identity verification. In regulated products, KYC is not optional, so the instinct is to treat it as a fixed cost. In the interviews, though, almost nobody said that the ID upload itself was too hard. They said they did not know why we needed it, who would see their photo, and whether they would be rejected after doing all the work.",
            "Jurang terbesar ada di verifikasi identitas. Di produk yang diatur regulator, KYC tidak bisa ditawar, sehingga naluri kita menganggapnya biaya tetap. Namun dalam wawancara, hampir tidak ada yang bilang unggah KTP itu sulit. Mereka bilang tidak tahu mengapa kami memerlukannya, siapa yang akan melihat foto mereka, dan apakah mereka akan ditolak setelah semua usaha itu.",
          ),
          b(
            "So we stopped trying to remove the step and started removing the surprise. We told people what would be asked before the camera opened, explained the reason in one sentence tied to their own protection, and showed what happens to the data. We also added real-time quality checks for blur and glare so a bad photo failed in two seconds rather than in two days.",
            "Jadi kami berhenti mencoba menghapus langkah itu dan mulai menghapus kejutannya. Kami memberi tahu apa yang akan diminta sebelum kamera terbuka, menjelaskan alasannya dalam satu kalimat yang terkait perlindungan pengguna sendiri, dan menunjukkan apa yang terjadi pada datanya. Kami juga menambahkan pengecekan kualitas langsung untuk foto buram dan silau, sehingga foto yang buruk gagal dalam dua detik, bukan dua hari.",
          ),
        ],
        list: [
          b("Say what is coming: documents needed, time required, and what happens next.", "Katakan apa yang akan terjadi: dokumen yang dibutuhkan, waktu yang diperlukan, dan langkah selanjutnya."),
          b("Give one honest reason for each sensitive request, in the user's words, not the regulator's.", "Beri satu alasan jujur untuk setiap permintaan data sensitif, dengan bahasa pengguna, bukan bahasa regulator."),
          b("Validate on the device so errors appear while the user can still fix them.", "Validasi di perangkat agar kesalahan muncul selagi pengguna masih bisa memperbaikinya."),
          b("Let people save progress and return without starting over.", "Biarkan orang menyimpan progres dan kembali tanpa mengulang dari awal."),
        ],
      },
      {
        h: b("Progressive profiling: ask late, ask less", "Progressive profiling: tanya belakangan, tanya lebih sedikit"),
        p: [
          b(
            "The original sign-up asked for everything up front: personal details, employment, income range, and risk preferences. Some of that was truly required before an account could exist. A lot of it was there because a different team might want it someday. Every field we kept had to answer one question: what can the user not do without this?",
            "Pendaftaran awal meminta semuanya di depan: data diri, pekerjaan, rentang penghasilan, dan preferensi risiko. Sebagian memang wajib sebelum akun bisa dibuat. Banyak sisanya ada karena tim lain mungkin membutuhkannya suatu hari nanti. Setiap kolom yang dipertahankan harus menjawab satu pertanyaan: apa yang tidak bisa dilakukan pengguna tanpa data ini?",
          ),
          b(
            "We split the flow into three tiers: what is legally needed to open an account, what is needed to move money, and what only improves personalization. The third tier moved out of sign-up completely and into moments where it made sense, like asking about goals when someone first browsed products. Asking in context also produced better answers, because the question had an obvious purpose.",
            "Kami membagi alur menjadi tiga tingkat: yang diwajibkan hukum untuk membuka akun, yang dibutuhkan untuk memindahkan uang, dan yang hanya meningkatkan personalisasi. Tingkat ketiga kami keluarkan sepenuhnya dari pendaftaran dan dipindahkan ke momen yang masuk akal, misalnya menanyakan tujuan keuangan saat pengguna pertama kali melihat produk. Bertanya dalam konteks juga menghasilkan jawaban yang lebih baik, karena tujuan pertanyaannya jelas.",
          ),
        ],
      },
      {
        h: b("Define the activation moment, not just completion", "Tentukan momen aktivasi, bukan sekadar penyelesaian"),
        p: [
          b(
            "Finishing sign-up is not the goal; it is the entrance. We spent a workshop with product, data and customer support agreeing on the activation moment: the first time a user experiences the core value and is likely to come back. For us that was a first successful funding followed by a first meaningful action with that money, not an approved account.",
            "Menyelesaikan pendaftaran bukan tujuan, itu baru pintu masuk. Kami mengadakan workshop bersama product, data, dan customer support untuk menyepakati momen aktivasi: saat pertama kali pengguna merasakan nilai inti dan besar kemungkinan kembali lagi. Bagi kami itu adalah pendanaan pertama yang berhasil, diikuti tindakan bermakna pertama dengan dana tersebut, bukan akun yang disetujui.",
          ),
          b(
            "Once activation was defined, retention became measurable in a useful way. We tracked D1 and D7 retention by cohort and, crucially, split cohorts by whether people reached activation. That showed us the real problem: many D1 returners were checking on a pending verification and then leaving, which looks like retention on a chart and is actually anxiety.",
            "Setelah aktivasi didefinisikan, retensi menjadi terukur dengan cara yang berguna. Kami melacak retensi D1 dan D7 per kohort dan, yang krusial, memisahkan kohort berdasarkan apakah mereka mencapai aktivasi. Dari situ terlihat masalah sebenarnya: banyak pengguna yang kembali di D1 hanya mengecek status verifikasi lalu pergi. Di grafik itu tampak seperti retensi, padahal itu kecemasan.",
          ),
        ],
        callout: b(
          "A retention curve without a definition of activation is a mood ring. Define the moment first.",
          "Kurva retensi tanpa definisi aktivasi hanya terlihat bagus tanpa makna. Tentukan momennya dulu.",
        ),
      },
      {
        h: b("Behavioral nudges that earned their place", "Dorongan perilaku yang layak dipertahankan"),
        p: [
          b(
            "I use behavioral principles as hypotheses, never as decoration. Three held up. A visible progress indicator with honest step counts reduced the fear of an endless form. Defaults that matched the most common safe choice, like a standard first top-up amount users could edit, lowered decision effort. And a short note after verification that said what to expect and when, replacing silence with a clear timeline.",
            "Saya memakai prinsip perilaku sebagai hipotesis, bukan hiasan. Tiga di antaranya terbukti. Indikator progres yang terlihat dengan jumlah langkah yang jujur mengurangi rasa takut pada formulir tanpa ujung. Nilai default yang sesuai pilihan aman paling umum, seperti nominal top-up pertama standar yang bisa diubah, menurunkan beban keputusan. Lalu catatan singkat setelah verifikasi yang menjelaskan apa yang akan terjadi dan kapan, menggantikan keheningan dengan jadwal yang jelas.",
          ),
          b(
            "The checkout work later in the same product followed the same logic and contributed to a 38% lift in checkout conversion: fewer surprises, clearer totals, and one obvious next action. None of it was clever. It was mostly about removing moments where a reasonable person would stop and wonder if they were about to make a mistake with their money.",
            "Pekerjaan checkout di produk yang sama mengikuti logika serupa dan berkontribusi pada kenaikan konversi checkout sebesar 38%: lebih sedikit kejutan, total yang lebih jelas, dan satu langkah berikutnya yang jelas. Tidak ada yang cerdik di sini. Intinya menghilangkan momen ketika orang yang wajar akan berhenti dan bertanya-tanya apakah mereka sedang salah mengambil keputusan dengan uangnya.",
          ),
        ],
      },
      {
        h: b("What we tried and removed", "Yang kami coba lalu kami hapus"),
        p: [
          b(
            "Not everything worked, and the failures taught me more than the wins. We added streaks and badges for completing profile steps. They produced a little noise in the metrics and no change in activation, and a few users told us it felt strange to be congratulated by a bank. We removed them.",
            "Tidak semuanya berhasil, dan kegagalan mengajari saya lebih banyak daripada keberhasilan. Kami menambahkan streak dan lencana untuk penyelesaian langkah profil. Hasilnya hanya sedikit keributan di metrik dan tidak ada perubahan aktivasi, dan beberapa pengguna merasa aneh diberi selamat oleh layanan keuangan. Kami menghapusnya.",
          ),
          b(
            "We also tried a long educational carousel before sign-up. It tested well in interviews because people said education was important, but in the live experiment most users skipped it. Stated preference and behavior disagreed, which is the oldest lesson in research and still the easiest to forget.",
            "Kami juga mencoba carousel edukasi panjang sebelum pendaftaran. Hasilnya bagus di wawancara karena orang bilang edukasi itu penting, tetapi di eksperimen langsung kebanyakan pengguna melewatinya. Preferensi yang diucapkan dan perilaku nyata tidak sejalan, pelajaran tertua dalam riset yang masih paling mudah dilupakan.",
          ),
        ],
        list: [
          b("Gamification layered onto a serious financial task: removed.", "Gamifikasi di atas tugas keuangan yang serius: dihapus."),
          b("Up-front education carousel: replaced by short explanations at the moment of need.", "Carousel edukasi di awal: diganti penjelasan singkat tepat saat dibutuhkan."),
          b("A single mega-form: replaced by short steps with saved progress.", "Satu formulir raksasa: diganti langkah-langkah pendek dengan progres tersimpan."),
        ],
      },
      {
        h: b("How we ran experiments without fooling ourselves", "Cara kami bereksperimen tanpa menipu diri sendiri"),
        p: [
          b(
            "We ran one change at a time wherever traffic allowed, wrote the hypothesis and the success metric before launching, and agreed in advance what result would make us roll back. That last rule mattered most. Teams are very creative at finding a reason a flat result is secretly good once the work has been shipped.",
            "Kami menjalankan satu perubahan sekali waktu bila trafik memungkinkan, menulis hipotesis dan metrik keberhasilan sebelum rilis, dan menyepakati di muka hasil seperti apa yang membuat kami melakukan rollback. Aturan terakhir itu paling penting. Tim sangat kreatif mencari alasan mengapa hasil yang datar sebenarnya bagus setelah pekerjaannya telanjur dirilis.",
          ),
          b(
            "We paired the numbers with qualitative checks. When a variant won, I wanted to know whether it won because people understood more or because we had simply made it harder to leave. Support tickets and short follow-up calls told us which one it was.",
            "Kami memasangkan angka dengan pengecekan kualitatif. Ketika sebuah varian menang, saya ingin tahu apakah ia menang karena pengguna lebih paham atau karena kami hanya membuatnya lebih sulit untuk keluar. Tiket support dan telepon tindak lanjut singkat memberi tahu mana yang benar.",
          ),
        ],
      },
      {
        h: b("The result, and what I would keep", "Hasilnya, dan yang akan saya pertahankan"),
        p: [
          b(
            "Day-7 retention rose by 61% across the redesigned onboarding. I am cautious about crediting any single change; the gain came from the combination of clearer purpose, less up-front asking, honest waiting states, and a team that kept testing. The bigger win was cultural: small, reversible bets became normal.",
            "Retensi hari ke-7 naik 61% pada onboarding yang didesain ulang. Saya berhati-hati menyebut satu perubahan sebagai penyebab tunggal; kenaikan itu datang dari gabungan tujuan yang lebih jelas, permintaan data yang lebih sedikit di awal, status menunggu yang jujur, dan tim yang terus menguji. Kemenangan yang lebih besar bersifat budaya: taruhan kecil yang bisa dibatalkan menjadi kebiasaan.",
          ),
          b(
            "If I started again tomorrow, I would define activation in week one, talk to drop-offs in week one, and refuse to design anything before we could describe the problem in a sentence a customer would recognize.",
            "Kalau memulai lagi besok, saya akan mendefinisikan aktivasi di minggu pertama, berbicara dengan pengguna yang drop-off di minggu pertama, dan menolak mendesain apa pun sebelum masalahnya bisa dijelaskan dalam satu kalimat yang dikenali pelanggan.",
          ),
        ],
      },
    ],
    takeaways: [
      b("Instrument and interview before you redesign; name the drop-off first.", "Pasang pelacakan dan wawancara sebelum mendesain ulang; namai dulu titik drop-off-nya."),
      b("Reduce surprise around KYC instead of trying to delete it.", "Kurangi kejutan di seputar KYC alih-alih mencoba menghapusnya."),
      b("Use progressive profiling: collect only what the next action needs.", "Gunakan progressive profiling: kumpulkan hanya yang dibutuhkan untuk tindakan berikutnya."),
      b("Define the activation moment, then read D1 and D7 retention against it.", "Definisikan momen aktivasi, lalu baca retensi D1 dan D7 berdasarkan momen itu."),
      b("Treat nudges as hypotheses, and be ready to remove the ones that do not work.", "Perlakukan nudge sebagai hipotesis, dan siap menghapus yang tidak berhasil."),
    ],
  },

  "design-system-from-zero": {
    sections: [
      {
        h: b("Why we needed a system at all", "Mengapa kami butuh sistem desain"),
        p: [
          b(
            "A design system is not a goal. It is an answer to a specific pain: the same button designed five ways, handoffs that need long explanations, and engineers rebuilding patterns that already exist in someone else's file. At WeekndLabs Studio, the pain was real enough that we could name it in a meeting without exaggeration.",
            "Sistem desain bukan tujuan. Ia adalah jawaban atas masalah yang spesifik: tombol yang sama didesain lima versi, handoff yang butuh penjelasan panjang, dan engineer membangun ulang pola yang sudah ada di file orang lain. Di WeekndLabs Studio, masalah itu cukup nyata sehingga bisa kami sebut di rapat tanpa dilebih-lebihkan.",
          ),
          b(
            "Before writing a single component, I wrote down what success would look like in plain terms: faster delivery of new screens, fewer visual inconsistencies in review, and less back-and-forth with engineering. That list became the yardstick for every decision afterward, including what not to build.",
            "Sebelum membuat satu komponen pun, saya menuliskan seperti apa keberhasilan dalam bahasa sederhana: layar baru selesai lebih cepat, lebih sedikit inkonsistensi visual saat review, dan lebih sedikit bolak-balik dengan engineering. Daftar itu menjadi tolok ukur untuk setiap keputusan berikutnya, termasuk apa yang tidak perlu dibuat.",
          ),
        ],
      },
      {
        h: b("Start with an audit, not a library", "Mulai dari audit, bukan pustaka"),
        p: [
          b(
            "I began with an interface inventory. I screenshotted every screen across active products and grouped what I found: buttons, inputs, cards, modals, tables. The point is not to be exhaustive. It is to make the inconsistency visible, so that stakeholders feel the cost instead of hearing about it.",
            "Saya memulai dengan inventaris antarmuka. Saya mengambil tangkapan layar seluruh layar di produk aktif lalu mengelompokkannya: tombol, input, kartu, modal, tabel. Tujuannya bukan kelengkapan, melainkan membuat inkonsistensi terlihat, agar stakeholder merasakan biayanya, bukan hanya mendengarnya.",
          ),
          b(
            "The audit also tells you what to build first. Components that appear everywhere and vary the most are the best candidates. A rarely used, highly specific widget can wait, no matter how interesting it is to design.",
            "Audit juga memberi tahu apa yang harus dibangun lebih dulu. Komponen yang muncul di mana-mana dan paling beragam adalah kandidat terbaik. Widget yang jarang dipakai dan sangat spesifik bisa menunggu, semenarik apa pun untuk didesain.",
          ),
        ],
        callout: b(
          "Build for usage, not for completeness. A system is measured by what teams reach for, not by what it contains.",
          "Bangun berdasarkan pemakaian, bukan kelengkapan. Sistem diukur dari apa yang dipakai tim, bukan dari isinya.",
        ),
      },
      {
        h: b("Tokens and naming come before components", "Token dan penamaan sebelum komponen"),
        p: [
          b(
            "Tokens for color, typography, spacing, radius and elevation were the first thing we shipped. I use two layers. Primitive tokens hold raw values, like a blue at a certain step. Semantic tokens describe intent, such as a primary action color or a surface background, and point to primitives. Components only ever use semantic tokens.",
            "Token warna, tipografi, spasi, radius, dan elevasi adalah hal pertama yang kami rilis. Saya memakai dua lapisan. Token primitif menyimpan nilai mentah, misalnya satu tingkat warna biru. Token semantik menggambarkan maksud, seperti warna aksi utama atau latar permukaan, dan merujuk ke token primitif. Komponen hanya memakai token semantik.",
          ),
          b(
            "That split makes theming, dark mode and rebranding a change in one place instead of a hundred. Naming matters just as much. We used predictable patterns, category then role then state, so that anyone could guess a token name without opening documentation. If people have to search for a name, they will type a hex value instead.",
            "Pemisahan itu membuat tema, dark mode, dan rebranding menjadi perubahan di satu tempat, bukan seratus tempat. Penamaan sama pentingnya. Kami memakai pola yang bisa ditebak, kategori lalu peran lalu status, sehingga siapa pun bisa menebak nama token tanpa membuka dokumentasi. Kalau orang harus mencari nama, mereka akan mengetik kode hex saja.",
          ),
        ],
        list: [
          b("Primitive tokens: raw values, never used directly in components.", "Token primitif: nilai mentah, tidak pernah dipakai langsung di komponen."),
          b("Semantic tokens: named by purpose, so meaning survives a rebrand.", "Token semantik: dinamai berdasarkan fungsi, sehingga maknanya bertahan setelah rebranding."),
          b("Consistent naming grammar: category, role, state.", "Tata bahasa penamaan konsisten: kategori, peran, status."),
        ],
      },
      {
        h: b("Designing the component API", "Merancang API komponen"),
        p: [
          b(
            "A component is an interface for other designers and engineers, so it deserves an API. For each one I defined variants, sizes, states, and content slots, and I kept the property names aligned with what engineering would use in code. When the Figma properties and the code props match, handoff stops being translation.",
            "Komponen adalah antarmuka bagi desainer dan engineer lain, jadi ia pantas punya API. Untuk tiap komponen saya mendefinisikan varian, ukuran, status, dan slot konten, serta menyamakan nama properti dengan yang dipakai engineering di kode. Ketika properti di Figma dan props di kode sama, handoff berhenti menjadi penerjemahan.",
          ),
          b(
            "I am opinionated about restraint. Every extra variant is a decision someone else has to make. We favored composition over giant configurable components, and we wrote down what a component is explicitly not for. Accessibility was part of the definition of done: focus states, contrast, hit targets, and keyboard behavior were checked before a component was marked ready.",
            "Saya cukup tegas soal menahan diri. Setiap varian tambahan adalah keputusan yang harus diambil orang lain. Kami mengutamakan komposisi daripada komponen raksasa yang bisa dikonfigurasi segalanya, dan menuliskan secara eksplisit untuk apa sebuah komponen tidak dimaksudkan. Aksesibilitas masuk definisi selesai: status fokus, kontras, ukuran area sentuh, dan perilaku keyboard dicek sebelum komponen ditandai siap.",
          ),
        ],
      },
      {
        h: b("Governance and a contribution model that people use", "Tata kelola dan model kontribusi yang benar-benar dipakai"),
        p: [
          b(
            "Early on, I made the classic mistake of treating the system as a project that would finish. It is a product with users, and users have requests. We set up a lightweight model: anyone can propose a component, a short request template asks what problem it solves and where it is already used, and a small group reviews weekly.",
            "Di awal, saya membuat kesalahan klasik: memperlakukan sistem sebagai proyek yang akan selesai. Padahal ia produk dengan pengguna, dan pengguna punya permintaan. Kami membuat model ringan: siapa pun boleh mengusulkan komponen, template permintaan singkat menanyakan masalah apa yang diselesaikan dan di mana sudah dipakai, lalu kelompok kecil mereview setiap minggu.",
          ),
          b(
            "A rule that paid off: a component enters the shared library only when at least one real product uses it. That prevented speculative work. We also held regular office hours where product designers could bring half-formed ideas, which turned many would-be forks into contributions.",
            "Satu aturan yang terbukti ampuh: komponen masuk pustaka bersama hanya jika minimal satu produk nyata memakainya. Itu mencegah pekerjaan spekulatif. Kami juga mengadakan office hours rutin tempat desainer produk bisa membawa ide setengah jadi, yang mengubah banyak calon fork menjadi kontribusi.",
          ),
        ],
        callout: b(
          "Ownership beats enthusiasm. Name who decides, who reviews, and who maintains, or the system quietly decays.",
          "Kepemilikan mengalahkan antusiasme. Tentukan siapa yang memutuskan, mereview, dan merawat, atau sistem akan pelan-pelan membusuk.",
        ),
      },
      {
        h: b("Versioning, documentation and change", "Versioning, dokumentasi, dan perubahan"),
        p: [
          b(
            "We followed semantic versioning in spirit. Patch changes fix bugs, minor changes add capabilities, and major changes may break existing usage. Each release had a plain changelog written for designers and engineers, with migration notes for anything breaking. Deprecation came with a grace period, not a surprise.",
            "Kami mengikuti semantic versioning secara prinsip. Perubahan patch memperbaiki bug, minor menambah kemampuan, dan major boleh merusak pemakaian lama. Setiap rilis punya changelog sederhana untuk desainer dan engineer, lengkap dengan catatan migrasi untuk perubahan yang merusak. Deprecation datang dengan masa tenggang, bukan kejutan.",
          ),
          b(
            "Documentation was where good systems quietly fail. We documented each component with when to use it, when not to, real examples from products, and accessibility notes. Examples from real screens persuaded people far more than abstract rules ever did.",
            "Dokumentasi adalah tempat sistem yang bagus diam-diam gagal. Kami mendokumentasikan tiap komponen dengan kapan dipakai, kapan tidak, contoh nyata dari produk, dan catatan aksesibilitas. Contoh dari layar nyata jauh lebih meyakinkan daripada aturan abstrak.",
          ),
        ],
      },
      {
        h: b("Measuring adoption and what failed", "Mengukur adopsi, dan apa yang gagal"),
        p: [
          b(
            "We tracked adoption with a few simple signals: how many screens in each product used system components, how often detached or overridden instances appeared, and how long a new screen took to assemble. The goal was not a perfect score but a trend, and a conversation about why people were detaching.",
            "Kami melacak adopsi dengan beberapa sinyal sederhana: berapa banyak layar di tiap produk yang memakai komponen sistem, seberapa sering instance yang dilepas atau dimodifikasi muncul, dan berapa lama layar baru dirakit. Tujuannya bukan skor sempurna, melainkan tren dan percakapan tentang mengapa orang melepas komponen.",
          ),
          b(
            "The library grew past 200 components, but not everything I built earned its place. Several early components were designed because they looked satisfying, and nobody used them. I now treat an unused component as a bug in my prioritization, not in the adoption of the team.",
            "Pustaka tumbuh melewati 200 komponen, tetapi tidak semua yang saya buat layak ada. Beberapa komponen awal didesain karena terasa memuaskan, dan tidak ada yang memakainya. Sekarang saya menganggap komponen yang tidak terpakai sebagai bug di prioritisasi saya, bukan di adopsi tim.",
          ),
        ],
        list: [
          b("Coverage: share of screens built from system components.", "Cakupan: porsi layar yang dibangun dari komponen sistem."),
          b("Detach rate: how often instances are broken from the source, and why.", "Tingkat detach: seberapa sering instance dilepas dari sumbernya, dan alasannya."),
          b("Time to assemble: how long a new screen takes compared with before.", "Waktu perakitan: berapa lama layar baru dibuat dibanding sebelumnya."),
        ],
      },
    ],
    takeaways: [
      b("Tie the system to a named pain and a plain definition of success.", "Kaitkan sistem dengan masalah yang jelas dan definisi keberhasilan yang sederhana."),
      b("Audit first; build what is used most and varies most.", "Audit dulu; bangun yang paling sering dipakai dan paling beragam."),
      b("Use semantic tokens and a predictable naming grammar.", "Gunakan token semantik dan tata bahasa penamaan yang bisa ditebak."),
      b("Run it as a product: ownership, a contribution path, versioning, and docs with real examples.", "Jalankan sebagai produk: kepemilikan, jalur kontribusi, versioning, dan dokumentasi dengan contoh nyata."),
      b("Measure adoption as a trend and treat unused components as a prioritization signal.", "Ukur adopsi sebagai tren dan anggap komponen tak terpakai sebagai sinyal prioritisasi."),
    ],
  },

  "blockchain-ux-for-non-techies": {
    sections: [
      {
        h: b("The trust gap is the real product problem", "Kesenjangan kepercayaan adalah masalah produk yang sebenarnya"),
        p: [
          b(
            "Across three blockchain products, one pattern stayed constant: most users do not care about the chain. They want to send, receive, or verify something and be sure it worked. Technology that asks them to learn a new vocabulary before they can do that is asking for a favor it has not earned.",
            "Di tiga produk blockchain yang saya kerjakan, satu pola selalu sama: kebanyakan pengguna tidak peduli pada chain-nya. Mereka ingin mengirim, menerima, atau memverifikasi sesuatu dan yakin hal itu berhasil. Teknologi yang meminta mereka belajar kosakata baru lebih dulu sedang meminta bantuan yang belum pantas didapatkannya.",
          ),
          b(
            "The stakes are also different. In a normal app, a mistake can often be undone. On a blockchain, a transfer to the wrong address is usually final. That makes anxiety rational, and it means the design job is less about elegance and more about building confidence at every step.",
            "Taruhannya juga berbeda. Di aplikasi biasa, kesalahan sering bisa dibatalkan. Di blockchain, transfer ke alamat yang salah biasanya final. Itu membuat kecemasan menjadi rasional, dan berarti tugas desain lebih tentang membangun rasa percaya di setiap langkah daripada soal keanggunan.",
          ),
        ],
      },
      {
        h: b("Borrow mental models people already have", "Pinjam model mental yang sudah dimiliki orang"),
        p: [
          b(
            "Users arrive with models from banking, e-wallets and email. We leaned on them where they were accurate enough. A wallet is like an account you control. A transaction is like a receipt that anyone can verify. A public address is like an account number you can share; it is safe to give out.",
            "Pengguna datang dengan model dari perbankan, dompet digital, dan email. Kami bersandar pada model itu selama cukup akurat. Wallet seperti akun yang Anda kendalikan sendiri. Transaksi seperti bukti pembayaran yang bisa diperiksa siapa pun. Alamat publik seperti nomor rekening yang boleh dibagikan; aman untuk diberikan.",
          ),
          b(
            "Analogies have limits, and honesty about the limits is part of good UX. The one place the bank metaphor breaks is recovery: there is no helpline that resets the key. So we introduced that difference at the right moment, with a short explanation and a clear action, not buried in terms and conditions.",
            "Analogi punya batas, dan jujur soal batasnya adalah bagian dari UX yang baik. Satu titik tempat metafora bank gagal adalah pemulihan: tidak ada layanan pelanggan yang bisa mereset kunci. Jadi kami memperkenalkan perbedaan itu pada saat yang tepat, dengan penjelasan singkat dan tindakan yang jelas, bukan disembunyikan di syarat dan ketentuan.",
          ),
        ],
        callout: b(
          "Use the familiar model, then mark honestly where it stops being true.",
          "Pakai model yang familiar, lalu tandai dengan jujur di mana model itu tidak lagi berlaku.",
        ),
      },
      {
        h: b("Keys, wallets and gas in plain language", "Kunci, wallet, dan gas dengan bahasa sederhana"),
        p: [
          b(
            "Three concepts caused most of the confusion. Keys: a private key proves you own the wallet, and whoever has it controls the funds. Recovery phrase: a list of words that can rebuild the wallet if the device is lost. Gas: the network fee for processing a transaction, which changes with demand and goes to the network, not to us.",
            "Tiga konsep menjadi sumber kebingungan terbesar. Kunci: private key membuktikan Anda pemilik wallet, dan siapa pun yang memegangnya mengendalikan dana. Frasa pemulihan: daftar kata yang bisa membangun ulang wallet bila perangkat hilang. Gas: biaya jaringan untuk memproses transaksi, yang berubah mengikuti kepadatan dan masuk ke jaringan, bukan ke kami.",
          ),
          b(
            "We stopped teaching the terms up front and instead explained each at the moment it mattered. Instead of showing a gas estimate with no context, we showed a line like the total cost including network fee, in rupiah when possible, before the person confirmed.",
            "Kami berhenti mengajarkan istilah di depan dan menjelaskan masing-masing pada saat istilah itu relevan. Alih-alih menampilkan estimasi gas tanpa konteks, kami menampilkan baris seperti total biaya termasuk biaya jaringan, dalam rupiah bila memungkinkan, sebelum pengguna mengonfirmasi.",
          ),
        ],
        list: [
          b("Wallet: your account on the network, controlled by you.", "Wallet: akun Anda di jaringan, yang Anda kendalikan sendiri."),
          b("Recovery phrase: the only way back in if you lose your device. Keep it offline.", "Frasa pemulihan: satu-satunya jalan masuk kembali jika perangkat hilang. Simpan secara offline."),
          b("Network fee: a small charge for processing, shown before you confirm.", "Biaya jaringan: biaya kecil untuk pemrosesan, ditampilkan sebelum Anda mengonfirmasi."),
        ],
      },
      {
        h: b("Trust signals that earn confidence", "Sinyal kepercayaan yang membangun keyakinan"),
        p: [
          b(
            "Trust is built from small, repeated proof. We showed clear status for every action: waiting, being processed, done. We gave each completed action a readable receipt, with amount, recipient, time and a reference the user could copy or share. And we made it easy to open the underlying record for people who wanted to verify it themselves.",
            "Kepercayaan dibangun dari bukti kecil yang berulang. Kami menampilkan status yang jelas untuk setiap aksi: menunggu, diproses, selesai. Setiap aksi yang selesai mendapat bukti yang mudah dibaca, berisi jumlah, penerima, waktu, dan nomor referensi yang bisa disalin atau dibagikan. Kami juga memudahkan membuka catatan aslinya bagi yang ingin memverifikasi sendiri.",
          ),
          b(
            "Waiting is where trust leaks. A transaction that takes a minute with no feedback feels like a failure. A progress message that says what is happening and that the money is safe turns the same minute into reassurance.",
            "Menunggu adalah tempat kepercayaan bocor. Transaksi yang butuh satu menit tanpa umpan balik terasa seperti gagal. Pesan progres yang menjelaskan apa yang terjadi dan bahwa dana aman mengubah menit yang sama menjadi rasa tenang.",
          ),
        ],
      },
      {
        h: b("Designing for irreversible actions", "Mendesain untuk tindakan yang tidak bisa dibatalkan"),
        p: [
          b(
            "Where an action cannot be undone, friction becomes a feature. We placed a review step before every send that showed the recipient, the amount and the total cost in the same words as the receipt would use later. For first-time recipients and large amounts, we added a deliberate pause and a plain warning.",
            "Ketika sebuah tindakan tidak bisa dibatalkan, hambatan justru menjadi fitur. Kami menaruh langkah tinjauan sebelum setiap pengiriman yang menampilkan penerima, jumlah, dan total biaya dengan kata-kata yang sama seperti yang nanti dipakai di bukti transaksi. Untuk penerima baru dan jumlah besar, kami menambahkan jeda yang disengaja dan peringatan yang jelas.",
          ),
          b(
            "We also reduced the chance of error at the source: address book with human-readable names, copy-paste checks that highlight the beginning and end of an address, and a small test transfer suggestion for new destinations. Prevention is cheaper than any recovery flow.",
            "Kami juga mengurangi peluang kesalahan dari sumbernya: buku alamat dengan nama yang mudah dibaca, pengecekan salin-tempel yang menyorot awal dan akhir alamat, dan saran transfer uji coba kecil untuk tujuan baru. Pencegahan lebih murah daripada alur pemulihan apa pun.",
          ),
        ],
        callout: b(
          "Add friction only where the action is permanent, and make that friction informative rather than scary.",
          "Tambahkan hambatan hanya pada tindakan yang permanen, dan buat hambatan itu informatif, bukan menakutkan.",
        ),
      },
      {
        h: b("Error recovery and plain Indonesian copy", "Pemulihan kesalahan dan salinan bahasa Indonesia yang sederhana"),
        p: [
          b(
            "Errors on-chain are usually cryptic. Our rule was that every error message must say what happened, whether money is safe, and what to do next. A failed transaction caused by a low network fee, for example, said that the payment did not go through, that the balance was unchanged, and offered a clear button to try again.",
            "Pesan kesalahan di on-chain biasanya membingungkan. Aturan kami: setiap pesan error harus menyebut apa yang terjadi, apakah uang aman, dan apa yang harus dilakukan berikutnya. Transaksi gagal karena biaya jaringan terlalu rendah, misalnya, menyebut bahwa pembayaran belum berhasil, saldo tidak berubah, dan menyediakan tombol jelas untuk mencoba lagi.",
          ),
          b(
            "For Indonesian copy, I avoided stiff literal translations. Kirim, terima and saldo carry more meaning for most users than a translated glossary. Where a technical term is unavoidable, we kept it and explained it in one short sentence, rather than inventing an awkward Indonesian equivalent nobody says out loud.",
            "Untuk salinan bahasa Indonesia, saya menghindari terjemahan harfiah yang kaku. Kirim, terima, dan saldo lebih bermakna bagi kebanyakan pengguna daripada daftar istilah hasil terjemahan. Bila istilah teknis tidak terhindarkan, kami mempertahankannya dan menjelaskannya dalam satu kalimat pendek, daripada menciptakan padanan janggal yang tidak pernah diucapkan siapa pun.",
          ),
        ],
        list: [
          b("Say what happened, whether money is safe, and what to do next.", "Sebutkan apa yang terjadi, apakah uang aman, dan apa yang harus dilakukan."),
          b("Prefer everyday words: kirim, terima, saldo, bukti transaksi.", "Pilih kata sehari-hari: kirim, terima, saldo, bukti transaksi."),
          b("Keep unavoidable jargon, but explain it in one short sentence.", "Pertahankan jargon yang tak terhindarkan, tetapi jelaskan dalam satu kalimat pendek."),
        ],
      },
    ],
    takeaways: [
      b("Design for confidence, not for understanding the chain.", "Desain untuk menumbuhkan rasa percaya, bukan agar pengguna memahami chain-nya."),
      b("Borrow familiar mental models and be honest where they break, especially around recovery.", "Pinjam model mental yang familiar dan jujur di mana model itu tidak berlaku, terutama soal pemulihan."),
      b("Explain keys, recovery phrases and fees at the moment they matter, in plain words.", "Jelaskan kunci, frasa pemulihan, dan biaya tepat saat relevan, dengan kata sederhana."),
      b("Use clear status and readable receipts as trust signals, and add informative friction before irreversible actions.", "Gunakan status yang jelas dan bukti yang mudah dibaca sebagai sinyal kepercayaan, serta hambatan informatif sebelum tindakan permanen."),
      b("Write errors that say what happened, whether money is safe, and what to do next.", "Tulis pesan error yang menyebut apa yang terjadi, apakah uang aman, dan apa langkah berikutnya."),
    ],
  },
}
