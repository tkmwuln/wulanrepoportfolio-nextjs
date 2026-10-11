import { b, type ArticleDetail } from "../content-types"

export const articlesA: Record<string, ArticleDetail> = {
  "cognitive-psychology-ux-design": {
    sections: [
      {
        h: b("Most UX problems are skipped steps, not bad pixels", "Kebanyakan masalah UX adalah langkah yang terlewat, bukan visual yang jelek"),
        p: [
          b(
            "After eight years of working across govtech, e-health, fintech and B2B SaaS, I have noticed a pattern. When a product feels confusing, the interface is rarely the root cause. The screens look fine, the components are consistent, the brand is on point. What is missing is an honest model of the person using it: what they know, what they are worried about, and how much attention they can actually spare at that moment.",
            "Setelah delapan tahun bekerja di govtech, e-health, fintech, dan B2B SaaS, saya melihat satu pola. Ketika sebuah produk terasa membingungkan, biasanya akar masalahnya bukan di antarmuka. Layarnya rapi, komponennya konsisten, brand-nya kuat. Yang hilang adalah model yang jujur tentang pengguna: apa yang mereka tahu, apa yang mereka khawatirkan, dan seberapa banyak perhatian yang benar-benar bisa mereka berikan saat itu.",
          ),
          b(
            "Cognitive psychology gives us that model. I do not treat it as academic decoration or a checklist of laws to quote in a presentation. I treat it as a set of constraints, like screen size or network speed, that every design has to respect. Human attention is limited, memory is unreliable, and people are almost never reading your interface the way you imagine they are.",
            "Psikologi kognitif memberi kita model itu. Saya tidak memperlakukannya sebagai hiasan akademis atau daftar hukum untuk dikutip di presentasi. Saya memperlakukannya sebagai batasan, seperti ukuran layar atau kecepatan jaringan, yang harus dihormati setiap desain. Perhatian manusia terbatas, ingatan tidak bisa diandalkan, dan hampir tidak pernah ada orang yang membaca antarmuka Anda seperti yang Anda bayangkan.",
          ),
          b(
            "In this article I will walk through the handful of concepts I reach for most often, how I apply them in real projects, and where I think designers misuse them.",
            "Di artikel ini saya akan membahas beberapa konsep yang paling sering saya pakai, bagaimana saya menerapkannya di proyek nyata, dan di mana menurut saya para desainer sering salah menggunakannya.",
          ),
        ],
        callout: b(
          "A screen is not good because it is clean. It is good because it asks the right amount of effort from the right person at the right moment.",
          "Sebuah layar tidak bagus karena bersih. Ia bagus karena meminta jumlah usaha yang tepat, dari orang yang tepat, pada saat yang tepat.",
        ),
      },
      {
        h: b("Cognitive load: the budget nobody tracks", "Cognitive load: anggaran yang tidak pernah dicatat"),
        p: [
          b(
            "Cognitive load is the amount of mental effort a task demands. A useful way to break it down is into three kinds. Intrinsic load comes from the task itself, such as applying for a loan. Extraneous load is the effort we add through poor design: unclear labels, inconsistent patterns, decorative noise. Germane load is the productive effort of learning how the product works. Our job is to minimise the second, respect the first, and invest carefully in the third.",
            "Cognitive load adalah jumlah usaha mental yang dibutuhkan sebuah tugas. Cara yang berguna untuk memecahnya adalah tiga jenis. Intrinsic load berasal dari tugas itu sendiri, misalnya mengajukan pinjaman. Extraneous load adalah usaha tambahan akibat desain yang buruk: label tidak jelas, pola tidak konsisten, dekorasi yang mengganggu. Germane load adalah usaha produktif untuk memahami cara kerja produk. Tugas kita adalah menekan yang kedua, menghormati yang pertama, dan berinvestasi dengan hati-hati pada yang ketiga.",
          ),
          b(
            "Teams track engineering budgets and marketing budgets, but almost nobody tracks the attention budget. Yet it is the one users spend on every screen. I like to run a simple audit on any flow: count the decisions, the new terms, the fields, and the things the user has to remember from a previous step. If a screen has more than a few of any of them, something should move, merge or disappear.",
            "Tim melacak anggaran engineering dan anggaran marketing, tetapi hampir tidak ada yang melacak anggaran perhatian. Padahal itulah yang dibelanjakan pengguna di setiap layar. Saya suka melakukan audit sederhana pada alur apa pun: hitung keputusan, istilah baru, kolom isian, dan hal yang harus diingat pengguna dari langkah sebelumnya. Kalau satu layar punya terlalu banyak dari semua itu, ada yang harus dipindah, digabung, atau dihapus.",
          ),
        ],
        list: [
          b("Count the decisions per screen, not just the elements.", "Hitung jumlah keputusan per layar, bukan sekadar jumlah elemen."),
          b("Replace internal jargon with the words users already say out loud.", "Ganti jargon internal dengan kata yang sudah dipakai pengguna sehari-hari."),
          b("Never make people remember information from one step to use in the next. Carry it forward on screen.", "Jangan minta pengguna mengingat informasi dari satu langkah untuk dipakai di langkah berikutnya. Bawa informasinya ke layar berikutnya."),
          b("Treat stress, fatigue and distraction as reducing everyone's capacity, especially in health and finance.", "Anggap stres, kelelahan, dan distraksi sebagai pengurang kapasitas semua orang, terutama di bidang kesehatan dan keuangan."),
        ],
      },
      {
        h: b("Progressive disclosure is a sequencing decision", "Progressive disclosure adalah keputusan soal urutan"),
        p: [
          b(
            "Progressive disclosure is often described as hiding complexity, and that undersells it. It is really a decision about sequence: what does the person need now, what will they need later, and what will only a small group ever need? Done well, the interface feels simple because it is paced to the user, not because the product is simple.",
            "Progressive disclosure sering dijelaskan sebagai menyembunyikan kompleksitas, dan itu terlalu menyederhanakan. Sebenarnya ini keputusan tentang urutan: apa yang dibutuhkan orang ini sekarang, apa yang akan dibutuhkan nanti, dan apa yang hanya dibutuhkan segelintir orang? Jika dilakukan dengan baik, antarmuka terasa sederhana karena temponya mengikuti pengguna, bukan karena produknya sederhana.",
          ),
          b(
            "In the fintech onboarding I led, which contributed to a 61% lift in day-7 retention, one of the biggest shifts was moving everything that was not required to reach the first moment of value out of the sign-up path. Identity verification detail, notification preferences and profile enrichment all still existed. They simply arrived when the user had a reason to care. We did not remove steps so much as reorder them around motivation.",
            "Pada onboarding fintech yang saya pimpin, yang berkontribusi pada kenaikan retensi D7 sebesar 61%, salah satu perubahan terbesar adalah memindahkan semua hal yang tidak wajib untuk mencapai momen nilai pertama keluar dari jalur pendaftaran. Detail verifikasi identitas, preferensi notifikasi, dan pelengkapan profil tetap ada. Semuanya hanya muncul ketika pengguna punya alasan untuk peduli. Kami tidak sekadar menghapus langkah, melainkan menyusun ulang langkah di sekitar motivasi.",
          ),
          b(
            "The trap is hiding things people actually need. If users repeatedly open the same advanced panel, it is not advanced. Let usage data and research decide what belongs at which layer, and review it regularly.",
            "Jebakannya adalah menyembunyikan hal yang sebenarnya dibutuhkan orang. Kalau pengguna berulang kali membuka panel lanjutan yang sama, berarti panel itu bukan lanjutan. Biarkan data penggunaan dan riset yang menentukan apa yang masuk di lapisan mana, lalu tinjau secara berkala.",
          ),
        ],
      },
      {
        h: b("Hick's law and the cost of choice", "Hick's law dan harga sebuah pilihan"),
        p: [
          b(
            "Hick's law says that the time it takes to make a decision grows as the number and complexity of choices increases. It is not a rule to always show fewer options. It is a reminder that every additional option has a cost, and that cost is paid by the user in hesitation, errors and abandonment.",
            "Hick's law menyatakan bahwa waktu untuk mengambil keputusan bertambah seiring bertambahnya jumlah dan kompleksitas pilihan. Ini bukan aturan untuk selalu menampilkan lebih sedikit opsi. Ini pengingat bahwa setiap opsi tambahan punya harga, dan harga itu dibayar pengguna lewat keraguan, kesalahan, dan keputusan untuk meninggalkan produk.",
          ),
          b(
            "On a checkout redesign that improved conversion by 38%, we did not simply trim the page. We grouped payment methods by how people actually pay, put the most common one first with a sensible default, and collapsed the long tail behind a single clear entry point. Choice was still available. It just stopped competing for attention with the one action we wanted to complete.",
            "Pada redesain checkout yang menaikkan konversi sebesar 38%, kami tidak sekadar memangkas halaman. Kami mengelompokkan metode pembayaran berdasarkan cara orang benar-benar membayar, menaruh yang paling umum di urutan pertama dengan default yang masuk akal, lalu melipat sisanya di balik satu titik masuk yang jelas. Pilihan tetap tersedia. Hanya saja ia tidak lagi bersaing dengan satu aksi yang ingin kami selesaikan.",
          ),
        ],
        list: [
          b("Offer a recommended default when you know what most people want.", "Tawarkan default yang direkomendasikan bila Anda tahu apa yang diinginkan kebanyakan orang."),
          b("Chunk long lists into meaningful categories rather than alphabetical dumps.", "Kelompokkan daftar panjang ke dalam kategori bermakna, bukan sekadar urutan abjad."),
          b("Make the primary action visually and structurally obvious, and demote the rest.", "Buat aksi utama jelas secara visual dan struktural, lalu turunkan prioritas yang lain."),
        ],
      },
      {
        h: b("Peak-end rule: design the moments people remember", "Peak-end rule: rancang momen yang diingat orang"),
        p: [
          b(
            "People do not remember an experience as an average of every second. They tend to judge it by its most intense moment and by how it ended. This is the peak-end rule, and it changes where I spend polish. A flawless middle with a confusing confirmation screen will be remembered as a confusing experience.",
            "Orang tidak mengingat sebuah pengalaman sebagai rata-rata dari setiap detiknya. Mereka cenderung menilainya dari momen paling intens dan dari bagaimana pengalaman itu berakhir. Inilah peak-end rule, dan ia mengubah di mana saya menaruh energi untuk polesan. Bagian tengah yang sempurna dengan layar konfirmasi yang membingungkan akan diingat sebagai pengalaman yang membingungkan.",
          ),
          b(
            "In e-health, the end of a flow is often a booking, a result or a prescription. Those moments carry emotional weight, so I design them deliberately: plain language, a clear statement of what happens next, and an obvious path if something went wrong. In fintech, the first successful transaction is the peak I try to reach as fast and as calmly as possible.",
            "Di e-health, akhir sebuah alur sering berupa pemesanan janji, hasil pemeriksaan, atau resep. Momen-momen itu membawa bobot emosional, jadi saya merancangnya dengan sengaja: bahasa yang lugas, penjelasan tegas tentang apa yang terjadi selanjutnya, dan jalur yang jelas bila ada yang salah. Di fintech, transaksi pertama yang berhasil adalah puncak yang saya usahakan tercapai secepat dan setenang mungkin.",
          ),
          b(
            "Error states deserve the same attention. A failed payment handled with empathy and a clear recovery step can build more trust than a flow that never failed at all.",
            "Kondisi error layak mendapat perhatian yang sama. Pembayaran gagal yang ditangani dengan empati dan langkah pemulihan yang jelas bisa membangun kepercayaan lebih besar daripada alur yang tidak pernah gagal sama sekali.",
          ),
        ],
        callout: b(
          "Polish the ending and the worst moment first. Everything else is the part people forget.",
          "Poles dulu akhir dan momen terburuknya. Sisanya adalah bagian yang akan dilupakan orang.",
        ),
      },
      {
        h: b("Mental models, recognition and the cost of being clever", "Mental model, pengenalan, dan harga dari bersikap kreatif"),
        p: [
          b(
            "People arrive with mental models built from every other product they have used. Jakob's law captures this: users spend most of their time on other products, so they expect yours to work in a similar way. Novelty has a price, and it is paid in learning effort. I am happy to be inventive where it creates real value and conventional everywhere else.",
            "Orang datang dengan mental model yang terbentuk dari semua produk lain yang pernah mereka pakai. Jakob's law merangkumnya: pengguna menghabiskan sebagian besar waktunya di produk lain, jadi mereka berharap produk Anda bekerja dengan cara yang mirip. Kebaruan ada harganya, yang dibayar lewat usaha belajar. Saya senang berinovasi di tempat yang menciptakan nilai nyata dan konvensional di tempat lainnya.",
          ),
          b(
            "Closely related is the principle of recognition over recall. It is far easier to pick something from a visible set than to retrieve it from memory. That is why search suggestions, recent items, inline hints and visible labels beat icon-only toolbars and hidden gestures. This is also one reason a well-built design system pays off. With 200+ components behind a consistent pattern language, users learn an interaction once and recognise it everywhere.",
            "Berkaitan erat dengan itu adalah prinsip recognition over recall. Jauh lebih mudah memilih dari sekumpulan opsi yang terlihat daripada mengingatnya dari memori. Itulah mengapa saran pencarian, item terbaru, petunjuk inline, dan label yang terlihat mengalahkan toolbar berisi ikon saja dan gestur tersembunyi. Ini juga salah satu alasan design system yang baik terasa manfaatnya. Dengan 200+ komponen di balik bahasa pola yang konsisten, pengguna cukup belajar satu interaksi sekali lalu mengenalinya di mana-mana.",
          ),
        ],
        list: [
          b("Prefer labelled actions over icon-only buttons for anything non-trivial.", "Pilih aksi berlabel daripada tombol ikon saja untuk hal yang tidak sepele."),
          b("Use familiar patterns for forms, navigation and payments. Save originality for your core value.", "Gunakan pola yang familier untuk formulir, navigasi, dan pembayaran. Simpan orisinalitas untuk nilai inti produk."),
          b("Show recent and suggested options so people can recognise rather than recall.", "Tampilkan opsi terbaru dan yang disarankan agar orang bisa mengenali, bukan mengingat."),
        ],
      },
      {
        h: b("Where designers misuse these ideas", "Di mana para desainer salah memakai konsep ini"),
        p: [
          b(
            "The most common misuse is treating psychology as a rulebook. Hick's law does not mean fewer buttons is always better, and progressive disclosure does not mean hiding the things power users need. These are lenses, not laws of physics. They help you ask better questions, but they do not replace testing with real people.",
            "Kesalahan yang paling umum adalah memperlakukan psikologi sebagai buku aturan. Hick's law tidak berarti tombol yang lebih sedikit selalu lebih baik, dan progressive disclosure tidak berarti menyembunyikan hal yang dibutuhkan pengguna mahir. Semua ini adalah lensa, bukan hukum fisika. Mereka membantu kita mengajukan pertanyaan yang lebih baik, tetapi tidak menggantikan pengujian dengan orang sungguhan.",
          ),
          b(
            "The second misuse is manipulation. The same knowledge that helps me reduce friction could be used to build dark patterns: false urgency, confusing opt-outs, guilt-laden copy. I draw a firm line. If a design works only because the user does not understand what is happening, it is not a good design, and it will cost trust that is very hard to rebuild.",
            "Kesalahan kedua adalah manipulasi. Pengetahuan yang sama yang membantu saya mengurangi friksi bisa dipakai untuk membangun dark pattern: urgensi palsu, opsi berhenti yang membingungkan, copy yang menyalahkan pengguna. Saya menarik garis tegas. Jika sebuah desain hanya berhasil karena pengguna tidak paham apa yang terjadi, itu bukan desain yang baik, dan ia akan menghabiskan kepercayaan yang sangat sulit dibangun kembali.",
          ),
        ],
      },
      {
        h: b("A practical workflow you can start this week", "Alur kerja praktis yang bisa Anda mulai minggu ini"),
        p: [
          b(
            "You do not need a research lab to apply any of this. Start by writing down, in one sentence, what the user is trying to do and what state they are in when they do it. Then walk the flow screen by screen with the attention budget in mind and mark every place where the person has to decide, remember or interpret something.",
            "Anda tidak membutuhkan laboratorium riset untuk menerapkan semua ini. Mulailah dengan menuliskan dalam satu kalimat apa yang ingin dilakukan pengguna dan dalam kondisi apa mereka melakukannya. Lalu telusuri alurnya layar demi layar dengan mengingat anggaran perhatian, dan tandai setiap titik di mana orang harus memutuskan, mengingat, atau menafsirkan sesuatu.",
          ),
          b(
            "Next, test with five people and watch for hesitation rather than listening to opinions. A pause, a re-read or a back-tap tells you more than a polite comment. Fix the biggest source of hesitation, then test again. Over time this becomes a habit, and your team starts to ask the cognitive questions before the visual ones.",
            "Selanjutnya, uji dengan lima orang dan perhatikan keraguan mereka, bukan mendengarkan opini. Jeda, membaca ulang, atau menekan tombol kembali memberi tahu Anda lebih banyak daripada komentar sopan. Perbaiki sumber keraguan terbesar, lalu uji lagi. Lama-kelamaan ini menjadi kebiasaan, dan tim Anda mulai mengajukan pertanyaan kognitif sebelum pertanyaan visual.",
          ),
          b(
            "That shift, from asking whether a screen looks good to asking what it costs the person using it, is the most valuable change I have seen a team make.",
            "Pergeseran itu, dari bertanya apakah sebuah layar terlihat bagus menjadi bertanya apa harganya bagi orang yang memakainya, adalah perubahan paling berharga yang pernah saya lihat dilakukan sebuah tim.",
          ),
        ],
        list: [
          b("Write the user's goal and state in one sentence.", "Tulis tujuan dan kondisi pengguna dalam satu kalimat."),
          b("Audit each screen for decisions, new terms and memory demands.", "Audit setiap layar untuk jumlah keputusan, istilah baru, dan tuntutan ingatan."),
          b("Test with five people and log every hesitation.", "Uji dengan lima orang dan catat setiap keraguan."),
          b("Fix the largest friction first, then retest.", "Perbaiki friksi terbesar lebih dulu, lalu uji ulang."),
        ],
      },
    ],
    takeaways: [
      b("Most UX issues come from skipping a realistic model of the user, not from weak visual design.", "Sebagian besar masalah UX berasal dari tidak adanya model pengguna yang realistis, bukan dari visual yang lemah."),
      b("Treat attention as a budget and audit decisions, jargon and memory demands on every screen.", "Perlakukan perhatian sebagai anggaran dan audit keputusan, jargon, serta tuntutan ingatan di setiap layar."),
      b("Use progressive disclosure to sequence information around motivation, not to hide what people need.", "Gunakan progressive disclosure untuk menyusun informasi berdasarkan motivasi, bukan untuk menyembunyikan yang dibutuhkan orang."),
      b("Spend your polish on peaks and endings, including error states.", "Curahkan polesan pada momen puncak dan akhir alur, termasuk kondisi error."),
      b("Use psychology to reduce friction, never to manipulate, and validate every assumption with real users.", "Gunakan psikologi untuk mengurangi friksi, bukan untuk memanipulasi, dan validasi setiap asumsi dengan pengguna sungguhan."),
    ],
  },

  "service-design-govtech-indonesia": {
    sections: [
      {
        h: b("Why government services are a different design problem", "Mengapa layanan pemerintah adalah masalah desain yang berbeda"),
        p: [
          b(
            "Designing a consumer app and designing a government service can look similar on a Figma board, but they are very different jobs. A consumer app competes for attention and can lose a user without consequence. A government service is often the only option, the stakes are high, and the person using it may be applying for something they urgently need. If the service fails, there is no alternative provider to fall back on.",
            "Mendesain aplikasi konsumen dan mendesain layanan pemerintah mungkin tampak mirip di papan Figma, tetapi keduanya pekerjaan yang sangat berbeda. Aplikasi konsumen bersaing memperebutkan perhatian dan bisa kehilangan pengguna tanpa konsekuensi serius. Layanan pemerintah sering kali satu-satunya pilihan, taruhannya tinggi, dan penggunanya mungkin sedang mengurus sesuatu yang mendesak. Jika layanannya gagal, tidak ada penyedia lain untuk beralih.",
          ),
          b(
            "In Indonesia the challenge is amplified by scale and diversity. A single service may need to work for a civil servant in Jakarta with a laptop and a fibre connection, and for a village resident on a shared, low-end phone with intermittent data. Digital literacy, language, trust in institutions and access to devices all vary enormously, sometimes within one household.",
            "Di Indonesia, tantangannya diperbesar oleh skala dan keragaman. Satu layanan bisa harus bekerja untuk aparatur sipil negara di Jakarta dengan laptop dan koneksi serat optik, sekaligus untuk warga desa dengan ponsel bersama berspesifikasi rendah dan data yang putus-putus. Literasi digital, bahasa, kepercayaan pada institusi, dan akses perangkat sangat beragam, kadang dalam satu rumah tangga yang sama.",
          ),
          b(
            "That is why I approach govtech through service design rather than screen design. The screen is only one touchpoint in a chain that also includes forms, counters, call centres, regulations and people.",
            "Karena itu saya mendekati govtech lewat service design, bukan sekadar desain layar. Layar hanyalah satu titik sentuh dalam rantai yang juga mencakup formulir, loket, pusat panggilan, regulasi, dan manusia.",
          ),
        ],
        callout: b(
          "In govtech, the interface is the visible tip of a service. If you only design the tip, the rest of the iceberg will sink it.",
          "Di govtech, antarmuka hanyalah puncak yang terlihat dari sebuah layanan. Jika Anda hanya mendesain puncaknya, bagian lain dari gunung es itulah yang akan menenggelamkannya.",
        ),
      },
      {
        h: b("Start with the journey, not the app", "Mulai dari perjalanan, bukan dari aplikasi"),
        p: [
          b(
            "A journey map traces what a person does, thinks and feels from the moment they realise they need a service until the problem is actually resolved. In government work, that journey almost always starts long before any app is opened and ends long after the submit button. People ask a neighbour, visit a sub-district office, photocopy documents, wait, return, and sometimes give up.",
            "Journey map menelusuri apa yang dilakukan, dipikirkan, dan dirasakan seseorang sejak menyadari ia membutuhkan sebuah layanan hingga masalahnya benar-benar selesai. Dalam pekerjaan pemerintahan, perjalanan itu hampir selalu dimulai jauh sebelum aplikasi dibuka dan berakhir jauh setelah tombol kirim ditekan. Orang bertanya ke tetangga, datang ke kantor kelurahan, memfotokopi dokumen, menunggu, kembali lagi, dan kadang menyerah.",
          ),
          b(
            "I map the as-is journey with real people, not with workshop assumptions. Walking through it with a citizen who has just completed the process reveals the true pain points: the document nobody told them they needed, the counter that closes at noon, the status they cannot check without visiting in person. These findings are far more persuasive to stakeholders than any usability score.",
            "Saya memetakan perjalanan kondisi saat ini bersama orang sungguhan, bukan berdasarkan asumsi di workshop. Menelusurinya bersama warga yang baru saja menyelesaikan prosesnya mengungkap titik sakit yang sebenarnya: dokumen yang tidak pernah diberi tahu harus dibawa, loket yang tutup saat siang, status yang tidak bisa dicek tanpa datang langsung. Temuan seperti ini jauh lebih meyakinkan bagi stakeholder daripada skor usability mana pun.",
          ),
        ],
        list: [
          b("Interview recent users and the front-line staff who help them.", "Wawancarai pengguna yang baru menyelesaikan proses dan petugas garis depan yang membantu mereka."),
          b("Map emotions as well as actions. Anxiety about rejection is a design input.", "Petakan emosi, bukan hanya aksi. Kecemasan akan penolakan adalah masukan desain."),
          b("Mark every offline step, because that is where most drop-off hides.", "Tandai setiap langkah offline, karena di sanalah kebanyakan pengguna berguguran."),
        ],
      },
      {
        h: b("Service blueprints: seeing frontstage and backstage together", "Service blueprint: melihat frontstage dan backstage sekaligus"),
        p: [
          b(
            "Once the journey is clear, I build a service blueprint. It extends the journey map with the layers that users never see. Frontstage covers the visible interactions: the app, the counter, the SMS. Backstage covers the people and tasks behind them: the verifier who checks a document, the officer who approves. Below that sit the support systems, such as databases, integrations with other agencies, and the policies that dictate each rule.",
            "Setelah perjalanan jelas, saya membuat service blueprint. Ini memperluas journey map dengan lapisan yang tidak pernah dilihat pengguna. Frontstage mencakup interaksi yang terlihat: aplikasi, loket, SMS. Backstage mencakup orang dan tugas di baliknya: verifikator yang memeriksa dokumen, petugas yang menyetujui. Di bawahnya ada sistem pendukung, seperti basis data, integrasi dengan instansi lain, dan kebijakan yang mengatur setiap aturan.",
          ),
          b(
            "The blueprint is where govtech projects usually change shape. A beautiful online form is meaningless if the backstage process still prints it, stamps it and walks it down a corridor. Plotting the line of visibility makes this undeniable and lets the team see where digitising the front would simply move the queue to the back.",
            "Blueprint adalah tempat proyek govtech biasanya berubah bentuk. Formulir online yang cantik tidak berarti apa-apa jika proses di backstage masih mencetaknya, membubuhkan stempel, dan membawanya berjalan di lorong kantor. Menggambar garis visibilitas membuat hal ini tak terbantahkan dan membantu tim melihat di mana digitalisasi bagian depan hanya memindahkan antrean ke bagian belakang.",
          ),
          b(
            "I also use the blueprint as a shared language. Policy, IT, operations and design can all point at the same box and argue about the same thing.",
            "Saya juga memakai blueprint sebagai bahasa bersama. Tim kebijakan, TI, operasional, dan desain bisa sama-sama menunjuk kotak yang sama dan berdebat tentang hal yang sama.",
          ),
        ],
      },
      {
        h: b("Designing for a wide range of digital literacy", "Mendesain untuk rentang literasi digital yang lebar"),
        p: [
          b(
            "Low digital literacy is not a user failing. It is a design constraint, and a predictable one. In my experience the most effective moves are unglamorous: plain Bahasa Indonesia instead of bureaucratic language, one task per screen, large touch targets, visible labels, and instructions placed exactly where the question arises rather than in a separate help page.",
            "Literasi digital yang rendah bukan kesalahan pengguna. Ini batasan desain, dan bisa diprediksi. Dari pengalaman saya, langkah yang paling efektif justru tidak glamor: bahasa Indonesia yang lugas, bukan bahasa birokratis; satu tugas per layar; area sentuh yang besar; label yang terlihat; dan petunjuk diletakkan tepat di tempat pertanyaan muncul, bukan di halaman bantuan terpisah.",
          ),
          b(
            "I also assume that many people will not complete a task alone. Family members, village staff and community helpers often act as intermediaries. Designing for assisted use, such as a clear summary a helper can read aloud, a shareable status link, or a mode that lets one person submit on behalf of another with proper consent, extends reach more than any marketing campaign.",
            "Saya juga berasumsi banyak orang tidak akan menyelesaikan tugas sendirian. Anggota keluarga, perangkat desa, dan pendamping komunitas sering menjadi perantara. Merancang untuk penggunaan berbantuan, seperti ringkasan jelas yang bisa dibacakan pendamping, tautan status yang bisa dibagikan, atau mode yang memungkinkan satu orang mengajukan atas nama orang lain dengan persetujuan yang semestinya, memperluas jangkauan lebih daripada kampanye pemasaran mana pun.",
          ),
          b(
            "Network and device realities matter as much as literacy. Lightweight pages, forgiving forms that save progress, and clear offline or retry states are accessibility features in practice.",
            "Kenyataan jaringan dan perangkat sama pentingnya dengan literasi. Halaman yang ringan, formulir yang menyimpan progres, dan kondisi offline atau coba lagi yang jelas adalah fitur aksesibilitas dalam praktik.",
          ),
        ],
        list: [
          b("Write in everyday language and test comprehension aloud with real residents.", "Tulis dengan bahasa sehari-hari dan uji pemahamannya secara lisan dengan warga sungguhan."),
          b("Keep to one question per screen and show progress clearly.", "Cukup satu pertanyaan per layar dan tunjukkan progres dengan jelas."),
          b("Design assisted-use paths for helpers and family members.", "Rancang jalur penggunaan berbantuan untuk pendamping dan anggota keluarga."),
          b("Save partial progress so a dropped connection never means starting over.", "Simpan progres sebagian agar koneksi yang terputus tidak berarti mengulang dari awal."),
        ],
      },
      {
        h: b("Working with civil servants, not around them", "Bekerja bersama aparatur, bukan di belakang mereka"),
        p: [
          b(
            "Civil servants are often portrayed as the obstacle in govtech. In my experience they are the people who understand why the process looks the way it does, and many are quietly frustrated by it. Treat them as co-designers. Bring them into research sessions, show them the blueprint early and ask which parts are legally fixed and which are habits that grew over time.",
            "Aparatur sipil sering digambarkan sebagai penghambat di govtech. Menurut pengalaman saya, merekalah yang paham mengapa proses terlihat seperti sekarang, dan banyak di antara mereka diam-diam frustrasi dengan proses itu. Perlakukan mereka sebagai co-designer. Libatkan dalam sesi riset, tunjukkan blueprint sejak dini, dan tanyakan bagian mana yang tetap secara hukum dan mana yang hanya kebiasaan yang menumpuk seiring waktu.",
          ),
          b(
            "That distinction is crucial. Regulations are real constraints, but a surprising number of steps are conventions that nobody has questioned. When a regulation does block a better experience, the right move is to document the cost to citizens clearly and take it to the people who can change it, rather than designing a workaround that quietly breaks policy.",
            "Pembedaan itu krusial. Regulasi adalah batasan yang nyata, tetapi ada banyak langkah yang ternyata hanya konvensi yang belum pernah dipertanyakan. Ketika regulasi memang menghalangi pengalaman yang lebih baik, langkah yang tepat adalah mendokumentasikan dampaknya bagi warga dengan jelas lalu membawanya kepada pihak yang bisa mengubahnya, bukan membuat jalan pintas yang diam-diam melanggar kebijakan.",
          ),
          b(
            "Also remember that staff are users too. The internal tools that officers use to review applications deserve the same research and care as the public-facing side, because a slow or confusing back office becomes the citizen's waiting time.",
            "Ingat pula bahwa petugas juga pengguna. Alat internal yang dipakai petugas untuk memeriksa permohonan layak mendapat riset dan perhatian yang sama dengan sisi publik, karena back office yang lambat atau membingungkan akan menjadi waktu tunggu warga.",
          ),
        ],
        callout: b(
          "Design with the people who run the service, and you inherit their knowledge. Design around them, and you inherit their resistance.",
          "Rancang bersama orang yang menjalankan layanan, dan Anda mewarisi pengetahuan mereka. Rancang di belakang mereka, dan Anda mewarisi resistensi mereka.",
        ),
      },
      {
        h: b("Trust, transparency and the status problem", "Kepercayaan, transparansi, dan masalah status"),
        p: [
          b(
            "Trust is the currency of any public service. Citizens need to know that their data is safe, that the system is legitimate and that a submission has not vanished into a void. The single most requested feature in almost every government service I have studied is some form of status visibility: where is my application, what is pending, and what do I do if it is stuck?",
            "Kepercayaan adalah mata uang setiap layanan publik. Warga perlu tahu bahwa datanya aman, sistemnya sah, dan permohonan mereka tidak hilang entah ke mana. Fitur yang paling sering diminta di hampir semua layanan pemerintah yang pernah saya pelajari adalah semacam visibilitas status: di mana permohonan saya, apa yang masih tertunda, dan apa yang harus saya lakukan bila macet?",
          ),
          b(
            "Good status design is simple. Use a small number of clear stages, explain each in plain language, give an honest expectation of timing, and name a human or a channel for follow-up. Honest is the key word. An accurate slow estimate builds more trust than an optimistic one that is missed.",
            "Desain status yang baik sederhana. Gunakan sedikit tahap yang jelas, jelaskan masing-masing dengan bahasa lugas, beri perkiraan waktu yang jujur, dan sebutkan orang atau kanal untuk tindak lanjut. Kata kuncinya jujur. Perkiraan lambat yang akurat membangun lebih banyak kepercayaan daripada perkiraan optimis yang meleset.",
          ),
        ],
        list: [
          b("Show where the request is in the process, in a few named stages.", "Tunjukkan posisi permohonan dalam proses, lewat beberapa tahap yang diberi nama."),
          b("Explain why a document is rejected and exactly how to fix it.", "Jelaskan mengapa sebuah dokumen ditolak dan persis bagaimana memperbaikinya."),
          b("Give a clear fallback, such as an office, a hotline or a helper, for when digital fails.", "Sediakan jalur cadangan yang jelas, seperti kantor, hotline, atau pendamping, ketika jalur digital gagal."),
        ],
      },
      {
        h: b("Piloting, measuring and scaling responsibly", "Piloting, mengukur, dan memperluas secara bertanggung jawab"),
        p: [
          b(
            "Big-bang launches are risky when millions of people depend on a service. I prefer to pilot with a limited region or a single service line, keep the old channel open in parallel, and watch carefully. The goal of a pilot is not a successful demo. It is to find the failure modes while they are still cheap to fix.",
            "Peluncuran serentak berisiko ketika jutaan orang bergantung pada sebuah layanan. Saya lebih suka melakukan pilot di wilayah terbatas atau satu lini layanan, membiarkan kanal lama tetap terbuka secara paralel, dan mengamati dengan cermat. Tujuan pilot bukan demo yang sukses, melainkan menemukan titik gagal selagi masih murah untuk diperbaiki.",
          ),
          b(
            "For metrics I look beyond downloads and sign-ups. Completion rate, time to resolution, rate of rejected submissions, repeat visits to an office and calls to the helpline say much more about whether the service works. In my e-health work on a platform that now serves 50k+ monthly active users, the signals that mattered most were whether people finished what they came to do and whether they needed to ask for help.",
            "Untuk metrik, saya melihat lebih jauh dari jumlah unduhan dan pendaftaran. Tingkat penyelesaian, waktu hingga masalah selesai, rasio pengajuan yang ditolak, kunjungan ulang ke kantor, dan panggilan ke helpline jauh lebih menunjukkan apakah layanan berjalan. Dalam pekerjaan e-health saya pada platform yang kini melayani 50k+ pengguna aktif bulanan, sinyal yang paling penting adalah apakah orang menyelesaikan apa yang mereka tuju dan apakah mereka perlu meminta bantuan.",
          ),
          b(
            "Scaling then becomes an operations question as much as a design one: training for staff, support channels, content maintenance and a feedback loop that actually reaches the people who can act on it.",
            "Setelah itu, memperluas layanan menjadi pertanyaan operasional sama seperti pertanyaan desain: pelatihan petugas, kanal bantuan, pemeliharaan konten, dan lingkaran umpan balik yang benar-benar sampai ke orang yang bisa bertindak.",
          ),
        ],
      },
      {
        h: b("What I would tell a team starting today", "Yang akan saya sampaikan kepada tim yang baru mulai hari ini"),
        p: [
          b(
            "Spend your first weeks away from the screen. Sit in the sub-district office, listen to the helpline, shadow the officer who processes the forms. You will come back with a sharper brief than any kickoff document can provide.",
            "Habiskan minggu-minggu pertama jauh dari layar. Duduklah di kantor kelurahan, dengarkan helpline, dampingi petugas yang memproses formulir. Anda akan kembali dengan brief yang lebih tajam daripada dokumen kickoff mana pun.",
          ),
          b(
            "Be patient with the pace and uncompromising about the user. Progress in government is incremental, and the teams that last are the ones who keep delivering small, visible improvements that build credibility. Every shorter queue and every clearer notice is evidence that digital public services can work for everyone, not only for the most connected.",
            "Bersabarlah dengan tempo, tetapi tidak berkompromi soal pengguna. Kemajuan di pemerintahan bersifat bertahap, dan tim yang bertahan adalah yang terus menghadirkan perbaikan kecil yang terlihat dan membangun kredibilitas. Setiap antrean yang lebih pendek dan setiap pemberitahuan yang lebih jelas adalah bukti bahwa layanan publik digital bisa bekerja untuk semua orang, bukan hanya yang paling terkoneksi.",
          ),
        ],
      },
    ],
    takeaways: [
      b("Design the whole service, including offline steps and backstage work, not just the app.", "Rancang seluruh layanan, termasuk langkah offline dan kerja backstage, bukan hanya aplikasinya."),
      b("Use journey maps and service blueprints built with real citizens and staff to expose where the real problems sit.", "Gunakan journey map dan service blueprint yang disusun bersama warga dan petugas sungguhan untuk menemukan letak masalah sebenarnya."),
      b("Treat low digital literacy as a design constraint: plain language, one task per screen, assisted-use paths.", "Perlakukan literasi digital rendah sebagai batasan desain: bahasa lugas, satu tugas per layar, jalur penggunaan berbantuan."),
      b("Co-design with civil servants and separate real legal constraints from inherited habits.", "Co-design bersama aparatur dan bedakan batasan hukum yang nyata dari kebiasaan turun-temurun."),
      b("Pilot first and measure resolution, not downloads, with honest status and a human fallback.", "Mulai dengan pilot dan ukur penyelesaian masalah, bukan unduhan, dengan status yang jujur dan jalur cadangan manusia."),
    ],
  },

  "ai-product-management-2025": {
    sections: [
      {
        h: b("Beyond the buzzwords: what actually changes", "Melampaui jargon: apa yang sebenarnya berubah"),
        p: [
          b(
            "Every product conversation I join now includes AI, and many of them skip the question that matters most: what problem are we solving, and is a probabilistic system the right tool? Over the past years as an AI product manager, my main learning is that the fundamentals of product work have not changed. Users, outcomes and trade-offs still run the show. What has changed is the material we build with.",
            "Hampir setiap percakapan produk yang saya ikuti sekarang menyertakan AI, dan banyak yang melewatkan pertanyaan terpenting: masalah apa yang sedang kita selesaikan, dan apakah sistem probabilistik adalah alat yang tepat? Selama beberapa tahun terakhir sebagai AI product manager, pelajaran utama saya adalah bahwa dasar-dasar pekerjaan produk tidak berubah. Pengguna, hasil, dan trade-off tetap yang memegang kendali. Yang berubah adalah bahan yang kita pakai untuk membangun.",
          ),
          b(
            "Traditional software is deterministic: the same input gives the same output, and a bug is a deviation from a spec. AI features are probabilistic. The same input can give different outputs, quality is a distribution rather than a pass or fail, and some failures are subtle enough that nobody notices until a user complains. That single difference reshapes discovery, specification, testing and launch.",
            "Perangkat lunak tradisional bersifat deterministik: input yang sama menghasilkan output yang sama, dan bug adalah penyimpangan dari spesifikasi. Fitur AI bersifat probabilistik. Input yang sama bisa menghasilkan output berbeda, kualitas berupa distribusi dan bukan lulus atau gagal, dan sebagian kegagalan cukup halus sehingga tidak ada yang sadar sampai pengguna mengeluh. Perbedaan tunggal itu membentuk ulang discovery, spesifikasi, pengujian, dan peluncuran.",
          ),
        ],
        callout: b(
          "AI does not replace product thinking. It raises the price of not having any.",
          "AI tidak menggantikan cara berpikir produk. Ia hanya membuat harga dari ketiadaannya jadi lebih mahal.",
        ),
      },
      {
        h: b("Discovery when outputs are probabilistic", "Discovery ketika output bersifat probabilistik"),
        p: [
          b(
            "In classic discovery you validate that a problem exists and that a solution is usable. With AI there is a third question: can the model do this well enough, often enough? That is a feasibility question you can test cheaply before any engineering. I start by collecting real examples of the task, run them through a capable model with a draft prompt, and read the outputs with the people who do the job today.",
            "Dalam discovery klasik, Anda memvalidasi bahwa masalah itu ada dan solusinya bisa digunakan. Dengan AI ada pertanyaan ketiga: apakah model mampu melakukannya dengan cukup baik dan cukup sering? Ini pertanyaan kelayakan yang bisa diuji murah sebelum ada pekerjaan engineering. Saya mulai dengan mengumpulkan contoh nyata dari tugas tersebut, menjalankannya lewat model yang mumpuni dengan draf prompt, lalu membaca hasilnya bersama orang yang saat ini mengerjakan tugas itu.",
          ),
          b(
            "Those sessions are gold. Domain experts will tell you within minutes which errors are harmless and which are unacceptable, something no benchmark can. They also reveal where a human-in-the-loop design is needed, and where the real opportunity is not automation but assistance.",
            "Sesi-sesi itu sangat berharga. Pakar domain akan memberi tahu dalam hitungan menit kesalahan mana yang tidak berbahaya dan mana yang tidak bisa diterima, sesuatu yang tidak bisa diberikan benchmark mana pun. Sesi itu juga menunjukkan di mana desain human-in-the-loop dibutuhkan, dan di mana peluang sebenarnya bukan otomatisasi melainkan bantuan.",
          ),
        ],
        list: [
          b("Collect 30 to 50 real examples of the task, including the ugly edge cases.", "Kumpulkan 30 sampai 50 contoh nyata dari tugas tersebut, termasuk kasus tepi yang berantakan."),
          b("Have domain experts rate outputs and explain what makes one acceptable.", "Minta pakar domain menilai output dan menjelaskan apa yang membuat sebuah hasil layak."),
          b("Ask what happens when the model is wrong and who notices.", "Tanyakan apa yang terjadi saat model salah dan siapa yang menyadarinya."),
          b("Decide the success bar before you see the results, not after.", "Tentukan batas keberhasilan sebelum melihat hasil, bukan sesudahnya."),
        ],
      },
      {
        h: b("Evaluation sets are the new acceptance criteria", "Evaluation set adalah acceptance criteria yang baru"),
        p: [
          b(
            "If I could only change one habit across AI teams, it would be to build an evaluation set early. An eval set is a curated collection of inputs paired with what a good output looks like, run against every change to the prompt, model or retrieval setup. It plays the role that acceptance criteria and regression tests play in conventional software.",
            "Kalau hanya boleh mengubah satu kebiasaan di tim AI, saya akan memilih membangun evaluation set sejak dini. Eval set adalah kumpulan input terkurasi yang dipasangkan dengan gambaran output yang baik, dijalankan pada setiap perubahan prompt, model, atau konfigurasi retrieval. Fungsinya sama dengan acceptance criteria dan regression test pada perangkat lunak konvensional.",
          ),
          b(
            "Without it, teams argue from anecdotes. One person tries a prompt change on three examples, it looks better, and it ships. Two weeks later a different category of input quietly gets worse. With an eval set, a change is judged on the full spread of cases, and trade-offs become visible: this version is better at summaries but worse at refusals.",
            "Tanpa itu, tim berdebat berdasarkan anekdot. Seseorang mencoba perubahan prompt pada tiga contoh, hasilnya tampak lebih baik, lalu dirilis. Dua minggu kemudian kategori input lain diam-diam memburuk. Dengan eval set, setiap perubahan dinilai pada seluruh sebaran kasus, dan trade-off menjadi terlihat: versi ini lebih bagus untuk ringkasan tetapi lebih buruk dalam menolak permintaan.",
          ),
          b(
            "A PM should own the question of what good means, even if engineers own the tooling. That means writing the rubric, choosing representative cases, and refreshing the set with real failures from production.",
            "Seorang PM sebaiknya memegang pertanyaan tentang apa arti baik, meskipun engineer yang memegang perangkatnya. Artinya menulis rubrik, memilih kasus yang representatif, dan memperbarui set dengan kegagalan nyata dari produksi.",
          ),
        ],
        callout: b(
          "If you cannot describe how you would measure a good answer, you are not ready to build the feature.",
          "Jika Anda tidak bisa menjelaskan bagaimana mengukur jawaban yang baik, Anda belum siap membangun fiturnya.",
        ),
      },
      {
        h: b("Writing specs and prompts as product artifacts", "Menulis spesifikasi dan prompt sebagai artefak produk"),
        p: [
          b(
            "A prompt is not a magic phrase. It is a specification written for a very literal, very fast collaborator. The skills of a good PRD writer transfer directly: define the audience, the goal, the constraints, the format of the output and what to do when information is missing. Vague instructions yield vague behaviour.",
            "Prompt bukanlah mantra. Ia adalah spesifikasi yang ditulis untuk kolaborator yang sangat harfiah dan sangat cepat. Keterampilan penulis PRD yang baik berlaku langsung: tentukan audiens, tujuan, batasan, format output, dan apa yang harus dilakukan ketika informasi tidak lengkap. Instruksi yang kabur menghasilkan perilaku yang kabur.",
          ),
          b(
            "I treat prompts as versioned product artifacts. They live in source control, have an owner, a change log and linked eval results. When something breaks, we can see which change caused it. I also write down the intended behaviour in plain language, including tone, refusal rules and escalation conditions, so that design, legal and support can review it without reading code.",
            "Saya memperlakukan prompt sebagai artefak produk yang diberi versi. Ia disimpan di source control, punya pemilik, catatan perubahan, dan hasil eval yang tertaut. Ketika ada yang rusak, kita bisa melihat perubahan mana penyebabnya. Saya juga menuliskan perilaku yang dimaksud dalam bahasa biasa, termasuk nada, aturan penolakan, dan kondisi eskalasi, sehingga desain, hukum, dan tim dukungan bisa meninjaunya tanpa membaca kode.",
          ),
        ],
        list: [
          b("State the role, the audience and the goal of the output explicitly.", "Nyatakan peran, audiens, dan tujuan output secara eksplisit."),
          b("Give examples of good and bad outputs, not only rules.", "Berikan contoh output yang baik dan buruk, bukan hanya aturan."),
          b("Specify what the model should do when it does not know.", "Tentukan apa yang harus dilakukan model ketika ia tidak tahu."),
          b("Version prompts and tie every change to an eval run.", "Beri versi pada prompt dan kaitkan setiap perubahan dengan hasil eval."),
        ],
      },
      {
        h: b("Hallucination, trust and human-in-the-loop", "Halusinasi, kepercayaan, dan human-in-the-loop"),
        p: [
          b(
            "Language models can produce fluent, confident and wrong answers. You cannot eliminate this entirely, so you design around it. The first lever is grounding: give the model trusted source material and ask it to answer from that material, ideally with citations the user can check. The second is scope: a narrow assistant that handles a defined task is far easier to make reliable than an open-ended one.",
            "Model bahasa bisa menghasilkan jawaban yang fasih, percaya diri, dan salah. Hal ini tidak bisa dihilangkan sepenuhnya, jadi kita merancang di sekitarnya. Tuas pertama adalah grounding: berikan model materi sumber tepercaya dan minta ia menjawab dari materi itu, idealnya dengan kutipan yang bisa diperiksa pengguna. Tuas kedua adalah cakupan: asisten sempit yang menangani tugas terdefinisi jauh lebih mudah dibuat andal daripada yang serba bisa.",
          ),
          b(
            "The third lever is human-in-the-loop, and it should be a deliberate design choice rather than an apology. Decide which actions the system may take alone, which need a person to approve, and which it should never attempt. In a health or finance context the bar for autonomy should be high, and the interface should make review fast: show the source, highlight what changed, and make rejection as easy as acceptance.",
            "Tuas ketiga adalah human-in-the-loop, dan ini seharusnya menjadi pilihan desain yang disengaja, bukan permintaan maaf. Tentukan tindakan mana yang boleh dilakukan sistem sendiri, mana yang perlu persetujuan manusia, dan mana yang tidak boleh dicoba sama sekali. Dalam konteks kesehatan atau keuangan, standar untuk otonomi harus tinggi, dan antarmuka harus membuat peninjauan cepat: tampilkan sumbernya, sorot apa yang berubah, dan buat penolakan semudah penerimaan.",
          ),
          b(
            "Finally, design for graceful failure. Let the system say it is unsure, offer a path to a human, and give users an easy way to flag a bad answer. Those flags feed the eval set and close the loop.",
            "Terakhir, rancang kegagalan yang anggun. Biarkan sistem menyatakan ia tidak yakin, sediakan jalur ke manusia, dan beri pengguna cara mudah untuk menandai jawaban yang buruk. Tanda-tanda itu masuk ke eval set dan menutup lingkaran umpan balik.",
          ),
        ],
      },
      {
        h: b("Cost, latency and the trade-offs nobody puts on the roadmap", "Biaya, latensi, dan trade-off yang tak pernah masuk roadmap"),
        p: [
          b(
            "Every AI feature sits on a triangle of quality, latency and cost. A larger model may give better answers but respond slowly and cost many times more per request. A smaller model may be fast and cheap but fail on harder cases. There is no universally right point, only the right point for a given user moment.",
            "Setiap fitur AI berada di atas segitiga kualitas, latensi, dan biaya. Model yang lebih besar mungkin memberi jawaban lebih baik tetapi lambat dan beberapa kali lebih mahal per permintaan. Model yang lebih kecil mungkin cepat dan murah tetapi gagal pada kasus yang sulit. Tidak ada titik yang benar secara universal, hanya titik yang tepat untuk momen pengguna tertentu.",
          ),
          b(
            "This is where a PM earns their place. Ask how long a user will tolerate waiting, and design the experience around it: streaming responses, progress indicators, or doing the work in the background. Ask which requests really need the strongest model and which can be routed to a cheaper one. Model unit economics early, because a feature that delights users but loses money on every call is a liability that grows with its success.",
            "Di sinilah peran PM terbukti. Tanyakan seberapa lama pengguna mau menunggu, lalu rancang pengalaman di sekitarnya: respons streaming, indikator progres, atau pekerjaan di latar belakang. Tanyakan permintaan mana yang benar-benar membutuhkan model terkuat dan mana yang bisa dialihkan ke model yang lebih murah. Hitung unit economics sejak awal, karena fitur yang disukai pengguna tetapi merugi di setiap panggilan adalah beban yang tumbuh seiring suksesnya.",
          ),
        ],
        list: [
          b("Define a latency budget per interaction and design the waiting experience.", "Tetapkan anggaran latensi per interaksi dan rancang pengalaman menunggunya."),
          b("Route simple requests to smaller models and reserve large ones for hard cases.", "Alihkan permintaan sederhana ke model kecil dan sisakan model besar untuk kasus sulit."),
          b("Track cost per successful task, not just cost per call.", "Lacak biaya per tugas yang berhasil, bukan hanya biaya per panggilan."),
        ],
      },
      {
        h: b("The PM skills that matter most now", "Keterampilan PM yang paling penting sekarang"),
        p: [
          b(
            "The AI PM role does not demand that you train models. It demands enough technical fluency to have honest conversations about what is feasible, and enough humility to accept that you will be wrong about it. I find that the strongest skills are the ones that were always valuable: sharp problem framing, clear writing, taste, and the ability to turn ambiguous user needs into testable bets.",
            "Peran AI PM tidak menuntut Anda melatih model. Peran ini menuntut kefasihan teknis yang cukup untuk berdiskusi jujur tentang apa yang layak, dan kerendahan hati untuk menerima bahwa Anda akan keliru soal itu. Menurut saya keterampilan terkuat adalah yang memang selalu berharga: kemampuan membingkai masalah dengan tajam, menulis dengan jelas, selera, dan kemampuan mengubah kebutuhan pengguna yang ambigu menjadi taruhan yang bisa diuji.",
          ),
          b(
            "Add to that a comfort with experimentation, an instinct for risk and responsible design, and the habit of reading raw outputs yourself every week. Dashboards summarise, but reading fifty real conversations tells you what is actually happening. My background in UX and service design helps here, because AI products succeed or fail in the experience wrapped around the model as much as in the model itself.",
            "Tambahkan kenyamanan dengan eksperimen, naluri terhadap risiko dan desain yang bertanggung jawab, serta kebiasaan membaca sendiri output mentah setiap minggu. Dasbor merangkum, tetapi membaca lima puluh percakapan nyata memberi tahu apa yang sebenarnya terjadi. Latar belakang saya di UX dan service design membantu di sini, karena produk AI berhasil atau gagal pada pengalaman yang membungkus model sama besarnya dengan pada modelnya sendiri.",
          ),
          b(
            "If you are early in your journey, build something small, write an eval set for it and ship it to a handful of real users. That single loop will teach you more than any amount of reading.",
            "Jika Anda baru memulai, bangun sesuatu yang kecil, tulis eval set untuknya, lalu rilis ke segelintir pengguna nyata. Satu putaran itu akan mengajarkan lebih banyak daripada bacaan sebanyak apa pun.",
          ),
        ],
        callout: b(
          "The best AI PMs I know are not the most technical. They are the most precise about what good looks like.",
          "AI PM terbaik yang saya kenal bukan yang paling teknis. Mereka yang paling presisi soal seperti apa hasil yang baik.",
        ),
      },
    ],
    takeaways: [
      b("Start from the user problem and decide honestly whether a probabilistic system is the right tool.", "Mulailah dari masalah pengguna dan putuskan secara jujur apakah sistem probabilistik adalah alat yang tepat."),
      b("Build an evaluation set early. It is your acceptance criteria and your regression test.", "Bangun evaluation set sejak awal. Itu acceptance criteria sekaligus regression test Anda."),
      b("Treat prompts as versioned specs and design for hallucination with grounding, narrow scope and human review.", "Perlakukan prompt sebagai spesifikasi berversi dan rancang untuk halusinasi lewat grounding, cakupan sempit, dan peninjauan manusia."),
      b("Manage the quality, latency and cost triangle deliberately, and model unit economics before launch.", "Kelola segitiga kualitas, latensi, dan biaya secara sadar, dan hitung unit economics sebelum peluncuran."),
      b("Core PM skills matter more than ever: problem framing, clear writing, taste and reading real outputs yourself.", "Keterampilan inti PM semakin penting: membingkai masalah, menulis jelas, selera, dan membaca sendiri output nyata."),
    ],
  },
}
