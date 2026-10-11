import { b, type ProjectDetail } from "../content-types"

export const projectsA: Record<string, ProjectDetail> = {
  "simrs-kesehatan": {
    role: b("UX Design Lead", "UX Design Lead"),
    duration: b("2024 · Ongoing, rolled out in phases", "2024 · Berjalan, dirilis bertahap"),
    team: b(
      "Led a team of 4 designers and 1 researcher, working with product managers, a clinical advisory group and engineers from three squads",
      "Memimpin tim 4 desainer dan 1 peneliti, bekerja bersama product manager, kelompok penasihat klinis, dan engineer dari tiga squad",
    ),
    overview: [
      b(
        "Hospital information systems (SIMRS) in Indonesia have grown over decades, usually one module at a time. Registration, outpatient, inpatient, pharmacy, laboratory and billing often live in separate screens built in different eras, with different vocabularies and different logins. Clinicians compensate with paper notes, WhatsApp groups and memory, which creates duplicate entry and real risk for patient safety.",
        "Sistem informasi rumah sakit (SIMRS) di Indonesia tumbuh selama puluhan tahun, biasanya satu modul demi satu modul. Pendaftaran, rawat jalan, rawat inap, farmasi, laboratorium, dan penagihan sering berada di layar terpisah yang dibangun di era berbeda, dengan istilah dan login yang berbeda pula. Tenaga medis menutupi celah ini dengan catatan kertas, grup WhatsApp, dan ingatan, sehingga muncul input ganda dan risiko nyata bagi keselamatan pasien.",
      ),
      b(
        "As UX Design Lead at Telkom Indonesia, I owned the experience strategy for a modernised SIMRS platform that serves 50k+ monthly active users across Indonesia's health ecosystem. The product is a modular web application: each hospital unit gets the modules it needs, but every module shares the same patient context, navigation model and design system. My job was to make a very large system feel like one coherent tool, without asking hospitals to stop operating while we changed it.",
        "Sebagai UX Design Lead di Telkom Indonesia, saya memegang strategi pengalaman untuk platform SIMRS yang dimodernisasi dan melayani 50 ribu+ pengguna aktif bulanan di ekosistem kesehatan Indonesia. Produknya adalah aplikasi web modular: setiap unit rumah sakit mendapat modul yang dibutuhkan, tetapi semuanya berbagi konteks pasien, model navigasi, dan design system yang sama. Tugas saya membuat sistem yang sangat besar terasa seperti satu alat yang utuh, tanpa meminta rumah sakit berhenti beroperasi selama perubahan berlangsung.",
      ),
    ],
    goals: [
      b(
        "Give every role a single, persistent patient context so staff never re-enter identity or visit data between modules.",
        "Memberi setiap peran satu konteks pasien yang persisten sehingga staf tidak perlu mengisi ulang identitas atau data kunjungan antarmodul.",
      ),
      b(
        "Shorten the most frequent tasks (registration, record lookup, e-prescription) for staff working under time pressure.",
        "Mempersingkat tugas yang paling sering dilakukan (pendaftaran, pencarian rekam medis, resep elektronik) bagi staf yang bekerja di bawah tekanan waktu.",
      ),
      b(
        "Build a modular design system so new hospital units can be onboarded without redesigning screens.",
        "Membangun design system modular agar unit rumah sakit baru dapat di-onboard tanpa mendesain ulang layar.",
      ),
      b(
        "Reduce training burden by making screens predictable, so a nurse moving between wards recognises the same patterns.",
        "Mengurangi beban pelatihan dengan layar yang konsisten, sehingga perawat yang berpindah bangsal mengenali pola yang sama.",
      ),
    ],
    users: [
      {
        name: b("Nurses and doctors", "Perawat dan dokter"),
        need: b(
          "Fast, scannable access to patient history and orders at the bedside or between consultations, with minimal typing.",
          "Akses cepat dan mudah dipindai ke riwayat serta order pasien di sisi tempat tidur atau di sela konsultasi, dengan sedikit pengetikan.",
        ),
      },
      {
        name: b("Registration and billing staff", "Petugas pendaftaran dan kasir"),
        need: b(
          "High-volume, keyboard-friendly flows that handle insurance rules (BPJS and private) without errors at the counter.",
          "Alur bervolume tinggi yang ramah keyboard dan menangani aturan penjamin (BPJS maupun swasta) tanpa kesalahan di loket.",
        ),
      },
      {
        name: b("Hospital administrators", "Administrator rumah sakit"),
        need: b(
          "A shared, near real-time view of patient flow, bed availability and queue length to make staffing decisions.",
          "Gambaran bersama yang hampir real-time tentang alur pasien, ketersediaan tempat tidur, dan panjang antrean untuk keputusan penjadwalan staf.",
        ),
      },
    ],
    challenge: b(
      "The new platform had to replace fragmented legacy modules while hospitals kept running, so we could not ship a big-bang redesign. Staff were fast on the old system because they had memorised its shortcuts, which meant any change that looked cleaner but cost them keystrokes would be rejected. On top of that, clinical safety requirements, BPJS integration rules and uneven hospital hardware limited what we could simplify.",
      "Platform baru harus menggantikan modul lama yang terpecah sementara rumah sakit tetap beroperasi, sehingga redesain sekaligus tidak mungkin dilakukan. Staf sudah cepat memakai sistem lama karena hafal pintasannya, jadi perubahan yang tampak lebih rapi tetapi menambah ketukan tombol pasti ditolak. Selain itu, persyaratan keselamatan klinis, aturan integrasi BPJS, dan perangkat rumah sakit yang tidak seragam membatasi apa yang bisa kami sederhanakan.",
    ),
    research: [
      {
        finding: b("Staff re-enter the same data three or more times", "Staf mengisi data yang sama tiga kali atau lebih"),
        detail: b(
          "Across 18 shadowing sessions in registration, outpatient and inpatient units, we logged patient identity being retyped between modules or copied onto paper. Each re-entry was a small delay and a chance for a mismatched record.",
          "Dari 18 sesi shadowing di unit pendaftaran, rawat jalan, dan rawat inap, kami mencatat identitas pasien diketik ulang antarmodul atau disalin ke kertas. Setiap pengisian ulang menambah waktu dan membuka peluang data tidak cocok.",
        ),
      },
      {
        finding: b("Speed comes from keyboards and habit, not from mouse-friendly screens", "Kecepatan datang dari keyboard dan kebiasaan, bukan layar yang ramah mouse"),
        detail: b(
          "Registration staff processed patients with Tab, Enter and function keys. In 14 interviews they told us they would rather keep an ugly fast screen than adopt a pretty slow one.",
          "Petugas pendaftaran melayani pasien dengan Tab, Enter, dan tombol fungsi. Dalam 14 wawancara, mereka lebih memilih layar jelek yang cepat daripada layar cantik yang lambat.",
        ),
      },
      {
        finding: b("Clinicians read before they type", "Tenaga medis membaca dulu sebelum mengetik"),
        detail: b(
          "Doctors spent most of a consultation scanning history, allergies and recent results. Dense but well-ordered summaries mattered more than data entry forms, and allergy alerts were frequently missed in the old layout.",
          "Dokter menghabiskan sebagian besar konsultasi untuk memindai riwayat, alergi, dan hasil terbaru. Ringkasan yang padat namun tertata lebih penting daripada formulir input, dan peringatan alergi sering terlewat di tata letak lama.",
        ),
      },
      {
        finding: b("Hardware and connectivity vary widely between sites", "Perangkat dan konektivitas sangat bervariasi antarlokasi"),
        detail: b(
          "Some wards used shared 1366x768 desktops and older browsers, others used tablets on patchy Wi-Fi. A survey of 9 sites shaped our performance budget and our decision to design offline-tolerant drafts for ward tablets.",
          "Sebagian bangsal memakai desktop bersama berukuran 1366x768 dan browser lama, sebagian lain memakai tablet dengan Wi-Fi tidak stabil. Survei di 9 lokasi menentukan anggaran performa kami dan keputusan merancang draf yang toleran offline untuk tablet bangsal.",
        ),
      },
    ],
    approach: [
      {
        title: b("Research on the ward", "Riset di bangsal"),
        body: b(
          "We shadowed nurses, doctors, pharmacists and registration staff in 18 sessions and ran 14 follow-up interviews. Each session was turned into a task timeline that showed where staff switched screens, used paper or asked a colleague. These timelines became the evidence base for every prioritisation debate later.",
          "Kami mengikuti perawat, dokter, apoteker, dan petugas pendaftaran dalam 18 sesi dan menjalankan 14 wawancara lanjutan. Setiap sesi diubah menjadi timeline tugas yang menunjukkan di mana staf berpindah layar, memakai kertas, atau bertanya ke rekan. Timeline ini menjadi dasar bukti untuk setiap diskusi prioritas berikutnya.",
        ),
      },
      {
        title: b("Service blueprint and patient-flow map", "Service blueprint dan peta alur pasien"),
        body: b(
          "We connected the front-stage patient journey (arrival, queue, consultation, pharmacy, payment) with back-stage clinical and administrative processes. Marking handoffs where information was lost showed that three of them accounted for most of the rework. We used this to pick the first modules to rebuild rather than following the org chart.",
          "Kami menghubungkan perjalanan pasien di depan layar (kedatangan, antrean, konsultasi, farmasi, pembayaran) dengan proses klinis dan administrasi di belakang layar. Menandai titik serah terima tempat informasi hilang menunjukkan bahwa tiga di antaranya menyebabkan sebagian besar pekerjaan ulang. Dari sini kami memilih modul pertama yang dibangun ulang, bukan mengikuti struktur organisasi.",
        ),
      },
      {
        title: b("Patient context shell and navigation model", "Shell konteks pasien dan model navigasi"),
        body: b(
          "We designed a persistent patient banner with name, age, allergies and payer status that stays visible across every module. Navigation was split into a slim module rail and task tabs inside each patient record, so staff always know where they are. We wireframed three structures and tested them with 10 staff before committing.",
          "Kami merancang banner pasien yang tetap terlihat di semua modul berisi nama, usia, alergi, dan status penjamin. Navigasi dibagi menjadi rail modul yang ramping dan tab tugas di dalam rekam pasien, sehingga staf selalu tahu posisi mereka. Kami membuat wireframe tiga struktur dan mengujinya dengan 10 staf sebelum memutuskan.",
        ),
      },
      {
        title: b("Modular design system", "Design system modular"),
        body: b(
          "We built reusable modules for registration, records, orders and billing on top of a token-based design system with dense table, form and alert components. Each module shipped with states for empty, loading, error and read-only, plus accessibility notes for contrast on older monitors. New hospital units can now be composed from modules instead of designed from scratch.",
          "Kami membangun modul yang bisa dipakai ulang untuk pendaftaran, rekam medis, order, dan penagihan di atas design system berbasis token dengan komponen tabel, formulir, dan alert yang padat. Setiap modul dilengkapi state kosong, loading, error, dan read-only, serta catatan aksesibilitas untuk kontras di monitor lama. Unit rumah sakit baru kini dapat disusun dari modul, bukan dirancang dari nol.",
        ),
      },
      {
        title: b("Pilot, measure, expand", "Pilot, ukur, perluas"),
        body: b(
          "We released to 5 pilot sites with a clinician champion at each, running weekly feedback huddles and short usability tests on the live build. Issues were triaged into safety, speed and polish, and only the first two blocked expansion. Rollout to further sites followed a checklist of training material and keyboard shortcut parity.",
          "Kami merilis ke 5 lokasi pilot dengan seorang champion klinis di tiap lokasi, menjalankan huddle umpan balik mingguan dan usability test singkat pada build yang aktif. Masalah dipilah menjadi keselamatan, kecepatan, dan kerapian, dan hanya dua yang pertama menghambat perluasan. Peluncuran ke lokasi lain mengikuti daftar periksa materi pelatihan dan kesetaraan pintasan keyboard.",
        ),
      },
    ],
    decisions: [
      {
        title: b("Keep dense tables and keyboard shortcuts", "Pertahankan tabel padat dan pintasan keyboard"),
        body: b(
          "A spacious, card-based layout tested better in a first impression, but registration staff lost speed. We kept dense tables, preserved the old shortcut map and added visible shortcut hints, accepting a less modern look in exchange for zero retraining on the counter.",
          "Layout berbasis kartu yang lega tampak lebih baik pada kesan pertama, tetapi petugas pendaftaran kehilangan kecepatan. Kami mempertahankan tabel padat, memakai ulang peta pintasan lama, dan menambah petunjuk pintasan yang terlihat, dengan konsekuensi tampilan yang kurang modern demi nol pelatihan ulang di loket.",
        ),
      },
      {
        title: b("A persistent allergy and alert banner", "Banner alergi dan peringatan yang selalu tampil"),
        body: b(
          "Engineering preferred alerts as dismissible modals, which is cheaper to build. Clinicians told us modals get dismissed by reflex, so we chose a persistent banner with severity levels and reserved interrupting dialogs for high-risk drug interactions only.",
          "Engineering lebih memilih peringatan berupa modal yang bisa ditutup karena lebih murah dibangun. Tenaga medis menyampaikan bahwa modal ditutup secara refleks, jadi kami memilih banner persisten dengan tingkat keparahan dan hanya memakai dialog yang menginterupsi untuk interaksi obat berisiko tinggi.",
        ),
      },
      {
        title: b("Phased module rollout instead of a big-bang redesign", "Peluncuran modul bertahap, bukan redesain sekaligus"),
        body: b(
          "We cut a unified dashboard for administrators from phase one because it depended on data pipelines that were not ready. Shipping registration and records first delivered visible value sooner and let us learn from real use, at the cost of living with two visual styles side by side for a few months.",
          "Kami menunda dashboard terpadu untuk administrator dari fase pertama karena bergantung pada pipeline data yang belum siap. Merilis pendaftaran dan rekam medis lebih dulu memberi nilai terlihat lebih cepat dan memungkinkan belajar dari pemakaian nyata, dengan konsekuensi dua gaya visual berdampingan selama beberapa bulan.",
        ),
      },
    ],
    metrics: [
      { value: "50k+", label: b("Monthly active users", "Pengguna aktif bulanan") },
      { value: "18", label: b("Ward shadowing sessions", "Sesi shadowing di bangsal") },
      { value: "5", label: b("Pilot hospital sites", "Lokasi rumah sakit pilot") },
      { value: "4", label: b("Core modules in the design system", "Modul inti dalam design system") },
    ],
    outcomes: [
      b(
        "The platform serves 50k+ monthly active users across the health ecosystem.",
        "Platform melayani 50 ribu+ pengguna aktif bulanan di ekosistem kesehatan.",
      ),
      b(
        "Registration and record-lookup flows need fewer screen changes because patient context carries across modules.",
        "Alur pendaftaran dan pencarian rekam medis membutuhkan lebih sedikit perpindahan layar karena konteks pasien terbawa antarmodul.",
      ),
      b(
        "Pilot sites kept their keyboard-driven speed, which removed the main objection to adopting the new system.",
        "Lokasi pilot mempertahankan kecepatan berbasis keyboard, sehingga keberatan utama terhadap sistem baru hilang.",
      ),
      b(
        "A modular design system now lets new hospital units be assembled from tested components.",
        "Design system modular kini memungkinkan unit rumah sakit baru disusun dari komponen yang sudah teruji.",
      ),
      b(
        "Clinical advisors became ongoing design partners, giving the team a reliable channel for safety review.",
        "Penasihat klinis menjadi mitra desain berkelanjutan, memberi tim saluran yang andal untuk tinjauan keselamatan.",
      ),
    ],
    learnings: [
      b(
        "In expert tools, speed is the usability metric that matters most; respect existing muscle memory before proposing improvements.",
        "Pada alat untuk ahli, kecepatan adalah metrik kegunaan terpenting; hormati memori otot yang sudah ada sebelum mengusulkan perbaikan.",
      ),
      b(
        "Clinician champions inside each site turn feedback from complaints into collaboration and make rollout far smoother.",
        "Champion klinis di setiap lokasi mengubah umpan balik dari keluhan menjadi kolaborasi dan membuat peluncuran jauh lebih lancar.",
      ),
      b(
        "Sequencing is a design decision: choosing what to ship first shaped trust more than any single screen did.",
        "Urutan rilis adalah keputusan desain: memilih apa yang dirilis lebih dulu membentuk kepercayaan lebih besar daripada layar mana pun.",
      ),
    ],
    tools: ["Figma", "Miro", "Maze", "Jira", "Confluence"],
  },

  "cx-platform": {
    role: b("UX Design Lead", "UX Design Lead"),
    duration: b("2023 · 9 months", "2023 · 9 bulan"),
    team: b(
      "Led 2 designers and 1 researcher, partnering with a product owner, a data analyst, and front-end and payment engineers",
      "Memimpin 2 desainer dan 1 peneliti, bersama product owner, analis data, serta engineer front-end dan pembayaran",
    ),
    overview: [
      b(
        "Telkom's strategic customer experience platform is where customers browse, subscribe to and pay for connectivity and digital services. Over several years, different business units had added their own checkout steps, promo logic and confirmation pages. The result was a flow that worked technically but felt like several products stitched together, with different wording, price presentation and error behaviour at each step.",
        "Platform customer experience strategis Telkom adalah tempat pelanggan menelusuri, berlangganan, dan membayar layanan konektivitas serta digital. Selama beberapa tahun, berbagai unit bisnis menambahkan langkah checkout, logika promo, dan halaman konfirmasi sendiri. Hasilnya adalah alur yang berfungsi secara teknis tetapi terasa seperti beberapa produk yang dijahit bersama, dengan bahasa, penyajian harga, dan perilaku error yang berbeda di tiap langkah.",
      ),
      b(
        "As UX Design Lead, I owned the research-driven redesign of the checkout journey from plan selection to payment confirmation. The work covered the end-to-end flow on mobile web and desktop, a shared set of checkout components, and an experimentation plan so every change could be measured. The redesign contributed to a +38% lift in conversion across checkout flows.",
        "Sebagai UX Design Lead, saya memegang redesain checkout berbasis riset, dari pemilihan paket hingga konfirmasi pembayaran. Pekerjaan mencakup alur menyeluruh di mobile web dan desktop, kumpulan komponen checkout bersama, dan rencana eksperimen agar setiap perubahan bisa diukur. Redesain ini berkontribusi pada kenaikan konversi 38% di seluruh alur checkout.",
      ),
    ],
    goals: [
      b(
        "Locate where and why customers abandon checkout, then fix the highest-impact steps first.",
        "Menemukan di mana dan mengapa pelanggan meninggalkan checkout, lalu memperbaiki langkah berdampak terbesar lebih dulu.",
      ),
      b(
        "Make pricing, fees and promo effects understandable before the payment step.",
        "Membuat harga, biaya, dan efek promo mudah dipahami sebelum langkah pembayaran.",
      ),
      b(
        "Unify checkout patterns so other Telkom products can reuse them.",
        "Menyatukan pola checkout agar produk Telkom lainnya dapat memakainya ulang.",
      ),
      b(
        "Validate every major change with usability tests or A/B tests before full rollout.",
        "Memvalidasi setiap perubahan besar dengan usability test atau A/B test sebelum rilis penuh.",
      ),
    ],
    users: [
      {
        name: b("First-time buyers on mobile", "Pembeli pertama di mobile"),
        need: b(
          "A short, reassuring flow with a clear total price and familiar payment methods such as e-wallets and virtual accounts.",
          "Alur singkat yang menenangkan dengan total harga jelas dan metode pembayaran yang familiar seperti e-wallet dan virtual account.",
        ),
      },
      {
        name: b("Returning subscribers", "Pelanggan lama"),
        need: b(
          "Quick plan changes and add-ons without re-entering details they have already given.",
          "Perubahan paket dan add-on yang cepat tanpa mengisi ulang data yang sudah pernah diberikan.",
        ),
      },
      {
        name: b("Customer service and sales agents", "Agen layanan pelanggan dan penjualan"),
        need: b(
          "Consistent screens and wording so they can guide customers by phone or chat without guessing which version the customer sees.",
          "Layar dan bahasa yang konsisten agar mereka dapat memandu pelanggan lewat telepon atau chat tanpa menebak versi mana yang dilihat pelanggan.",
        ),
      },
    ],
    challenge: b(
      "Checkout was owned by several teams, each with its own KPIs, so improving one step often meant negotiating with three stakeholders. Promo and bundle rules were complex and partly hard-coded in the backend, which limited how much we could simplify what the customer saw. We also had a fixed release calendar, so every change had to be sliced into experiments that could ship safely.",
      "Checkout dimiliki beberapa tim dengan KPI masing-masing, sehingga memperbaiki satu langkah sering berarti bernegosiasi dengan tiga pemangku kepentingan. Aturan promo dan bundel rumit dan sebagian tertanam di backend, yang membatasi seberapa jauh kami bisa menyederhanakan tampilan untuk pelanggan. Kami juga terikat kalender rilis yang tetap, sehingga setiap perubahan harus dipecah menjadi eksperimen yang aman dirilis.",
    ),
    research: [
      {
        finding: b("The biggest drop-offs were at price reveal and payment", "Drop-off terbesar terjadi saat harga muncul dan saat pembayaran"),
        detail: b(
          "Funnel analysis showed customers leaving when fees and promo adjustments first appeared late in the flow. Session recordings of about 60 abandoned checkouts showed repeated back-and-forth between the plan page and the summary.",
          "Analisis funnel menunjukkan pelanggan pergi ketika biaya dan penyesuaian promo baru muncul di akhir alur. Rekaman sesi sekitar 60 checkout yang ditinggalkan memperlihatkan pelanggan bolak-balik antara halaman paket dan ringkasan.",
        ),
      },
      {
        finding: b("Customers did not trust what they could not predict", "Pelanggan tidak percaya pada hal yang tidak bisa diprediksi"),
        detail: b(
          "In 12 moderated interviews, participants said they were afraid of hidden charges and unclear renewal terms. They wanted to know the total, the billing date and how to cancel before they entered payment details.",
          "Dalam 12 wawancara terpandu, peserta mengaku takut pada biaya tersembunyi dan syarat perpanjangan yang tidak jelas. Mereka ingin tahu total, tanggal penagihan, dan cara berhenti sebelum memasukkan data pembayaran.",
        ),
      },
      {
        finding: b("Error messages sent people backwards", "Pesan error membuat orang mundur"),
        detail: b(
          "Payment failures returned generic messages and often reset the form. Support tickets we reviewed showed customers retrying with a different method or contacting an agent rather than fixing the actual issue.",
          "Kegagalan pembayaran menampilkan pesan generik dan sering mengosongkan formulir. Tiket dukungan yang kami tinjau memperlihatkan pelanggan mencoba metode lain atau menghubungi agen, bukan memperbaiki masalah sebenarnya.",
        ),
      },
      {
        finding: b("Mobile users form the majority of sessions", "Pengguna mobile adalah mayoritas sesi"),
        detail: b(
          "Most sessions came from mid-range Android phones on variable networks. Heavy pages and small tap targets in the old flow were more of a problem than we expected from desktop reviews.",
          "Sebagian besar sesi berasal dari ponsel Android kelas menengah dengan jaringan yang berubah-ubah. Halaman berat dan area ketuk kecil pada alur lama ternyata lebih bermasalah daripada dugaan kami dari tinjauan desktop.",
        ),
      },
    ],
    approach: [
      {
        title: b("Funnel analysis and session review", "Analisis funnel dan tinjauan sesi"),
        body: b(
          "We combined analytics with session recordings and support tickets to build a single map of where customers hesitated. Each drop-off point was tagged by likely cause: price shock, form effort, trust or technical error. That tagging gave us a ranked backlog that the business teams could agree on.",
          "Kami menggabungkan analitik dengan rekaman sesi dan tiket dukungan untuk membuat satu peta tempat pelanggan ragu. Setiap titik drop-off diberi label penyebab yang mungkin: kejutan harga, usaha mengisi formulir, kepercayaan, atau error teknis. Pelabelan itu menghasilkan backlog berperingkat yang bisa disepakati tim bisnis.",
        ),
      },
      {
        title: b("Single-focus step pattern", "Pola satu fokus per langkah"),
        body: b(
          "We restructured checkout into short steps that each ask for one kind of decision: plan, details, payment, confirmation. A sticky order summary shows the running total on every step. Progressive disclosure keeps optional add-ons and promo codes collapsed until the customer wants them.",
          "Kami menyusun ulang checkout menjadi langkah pendek yang masing-masing meminta satu jenis keputusan: paket, data diri, pembayaran, konfirmasi. Ringkasan pesanan yang menempel menampilkan total berjalan di setiap langkah. Progressive disclosure menjaga add-on opsional dan kode promo tetap tertutup sampai pelanggan membutuhkannya.",
        ),
      },
      {
        title: b("Price transparency and recoverable errors", "Transparansi harga dan error yang bisa dipulihkan"),
        body: b(
          "We moved fees, tax and promo effects up to the plan selection step and wrote plain-language billing and renewal notes. For payment, we rewrote error messages to say what happened and what to do next, and preserved form data so a failure never means starting over.",
          "Kami memindahkan biaya, pajak, dan efek promo ke langkah pemilihan paket serta menulis catatan penagihan dan perpanjangan dalam bahasa sederhana. Untuk pembayaran, kami menulis ulang pesan error agar menjelaskan apa yang terjadi dan langkah berikutnya, serta menyimpan data formulir agar kegagalan tidak berarti mengulang dari awal.",
        ),
      },
      {
        title: b("Shared checkout component set", "Kumpulan komponen checkout bersama"),
        body: b(
          "We documented the step header, order summary, payment method selector, promo field and status banners as components with variants for different products. Engineers implemented them once in the shared library. Other Telkom teams could then adopt the same checkout without redesigning it.",
          "Kami mendokumentasikan header langkah, ringkasan pesanan, pemilih metode pembayaran, kolom promo, dan banner status sebagai komponen dengan varian untuk berbagai produk. Engineer mengimplementasikannya sekali di pustaka bersama. Tim Telkom lain dapat memakai checkout yang sama tanpa mendesain ulang.",
        ),
      },
      {
        title: b("Test, A/B test, then roll out", "Uji, A/B test, lalu rilis"),
        body: b(
          "We ran two rounds of moderated usability tests with 8 participants each on clickable prototypes, then moved the strongest variants into A/B experiments on live traffic. Each experiment had a defined hypothesis and a guardrail metric such as payment error rate. Winning variants were rolled out step by step, which let us attribute results to specific changes.",
          "Kami menjalankan dua putaran usability test terpandu dengan masing-masing 8 peserta pada prototipe interaktif, lalu memindahkan varian terkuat ke eksperimen A/B pada trafik langsung. Setiap eksperimen memiliki hipotesis dan metrik pengaman seperti tingkat error pembayaran. Varian pemenang dirilis bertahap sehingga hasil dapat dikaitkan dengan perubahan tertentu.",
        ),
      },
    ],
    decisions: [
      {
        title: b("Show the total early, even when it looks worse", "Tampilkan total lebih awal, meski terlihat kurang menarik"),
        body: b(
          "Sales teams worried that showing fees upfront would scare buyers off at the plan page. We agreed to test it, and chose early transparency because late surprises caused the larger loss. The trade-off was a harder conversation with stakeholders about how promos are presented.",
          "Tim penjualan khawatir menampilkan biaya di awal akan menakuti pembeli di halaman paket. Kami sepakat mengujinya dan memilih transparansi lebih awal karena kejutan di akhir menyebabkan kehilangan yang lebih besar. Konsekuensinya adalah diskusi lebih sulit dengan pemangku kepentingan tentang cara promo ditampilkan.",
        ),
      },
      {
        title: b("Steps over a single long page", "Langkah bertahap, bukan satu halaman panjang"),
        body: b(
          "A one-page checkout looked faster on paper, but tests showed anxiety on small screens when many fields appeared at once. We chose short steps with a visible progress indicator, accepting an extra tap in exchange for lower perceived effort and easier error recovery.",
          "Checkout satu halaman tampak lebih cepat di atas kertas, tetapi uji menunjukkan kecemasan di layar kecil saat banyak kolom muncul sekaligus. Kami memilih langkah pendek dengan indikator progres yang terlihat, menerima satu ketukan tambahan demi usaha yang terasa lebih ringan dan pemulihan error yang lebih mudah.",
        ),
      },
      {
        title: b("Cut personalised upsell from the confirmation page", "Hapus upsell personal dari halaman konfirmasi"),
        body: b(
          "A recommendation carousel was requested for the confirmation page. We removed it from the first release because it competed with the receipt and next-step information that customers and support agents needed. We kept a single optional suggestion and revisited it after core metrics were stable.",
          "Carousel rekomendasi diminta untuk halaman konfirmasi. Kami menghapusnya dari rilis pertama karena bersaing dengan informasi bukti pembelian dan langkah berikutnya yang dibutuhkan pelanggan dan agen dukungan. Kami mempertahankan satu saran opsional dan meninjaunya kembali setelah metrik inti stabil.",
        ),
      },
    ],
    metrics: [
      { value: "+38%", label: b("Conversion across checkout flows", "Konversi di seluruh alur checkout") },
      { value: "12", label: b("Moderated interviews", "Wawancara terpandu") },
      { value: "16", label: b("Usability test participants", "Peserta usability test") },
      { value: "5", label: b("Reusable checkout components", "Komponen checkout yang bisa dipakai ulang") },
    ],
    outcomes: [
      b(
        "Conversion increased by 38% across checkout flows after the redesign and phased experiments.",
        "Konversi naik 38% di seluruh alur checkout setelah redesain dan eksperimen bertahap.",
      ),
      b(
        "Support contacts about payment confusion and unclear charges decreased, according to the support team's ticket reviews.",
        "Keluhan tentang kebingungan pembayaran dan biaya yang tidak jelas berkurang, berdasarkan tinjauan tiket oleh tim dukungan.",
      ),
      b(
        "A shared checkout component set was adopted by other Telkom product teams.",
        "Kumpulan komponen checkout bersama diadopsi oleh tim produk Telkom lainnya.",
      ),
      b(
        "Stakeholders from sales, product and support began using the same funnel map to prioritise work.",
        "Pemangku kepentingan dari penjualan, produk, dan dukungan mulai memakai peta funnel yang sama untuk menentukan prioritas.",
      ),
      b(
        "The team built a lasting experimentation habit with clear hypotheses and guardrail metrics.",
        "Tim membangun kebiasaan eksperimen yang bertahan dengan hipotesis dan metrik pengaman yang jelas.",
      ),
    ],
    learnings: [
      b(
        "Conversion problems are often trust problems; showing the full picture early beats optimising the last button.",
        "Masalah konversi sering kali masalah kepercayaan; menampilkan gambaran lengkap lebih awal lebih efektif daripada mengoptimalkan tombol terakhir.",
      ),
      b(
        "A shared funnel map is the fastest way to align stakeholders who own different parts of the same journey.",
        "Peta funnel bersama adalah cara tercepat menyelaraskan pemangku kepentingan yang memegang bagian berbeda dari perjalanan yang sama.",
      ),
      b(
        "Small, well-instrumented experiments earn more organisational trust than one large redesign reveal.",
        "Eksperimen kecil yang terinstrumentasi dengan baik membangun kepercayaan organisasi lebih besar daripada satu peluncuran redesain besar.",
      ),
    ],
    tools: ["Figma", "Hotjar", "Amplitude", "Maze", "Jira"],
  },

  "lkpp-procurement": {
    role: b("UX Design Lead and Service Designer", "UX Design Lead dan Service Designer"),
    duration: b("2024 · 10 months", "2024 · 10 bulan"),
    team: b(
      "Led a team of 3 designers and 1 content strategist, working with LKPP product owners, policy and legal advisers, and vendor engineering teams",
      "Memimpin tim 3 desainer dan 1 content strategist, bekerja bersama product owner LKPP, penasihat kebijakan dan hukum, serta tim engineering vendor",
    ),
    overview: [
      b(
        "Government procurement in Indonesia is governed by detailed regulation, and the digital platform has to reflect every rule: planning, tendering or e-purchasing, evaluation, contracting, delivery and payment. The people using it range from experienced vendors to civil servants who are assigned to procurement duty and may use the system only a few times a year. Mistakes are costly, and audit trails matter as much as speed.",
        "Pengadaan pemerintah di Indonesia diatur regulasi yang rinci, dan platform digitalnya harus mencerminkan setiap aturan: perencanaan, tender atau e-purchasing, evaluasi, kontrak, pengiriman, hingga pembayaran. Penggunanya beragam, dari vendor berpengalaman hingga ASN yang ditugaskan di bidang pengadaan dan mungkin hanya memakai sistem beberapa kali dalam setahun. Kesalahan berbiaya mahal, dan jejak audit sama pentingnya dengan kecepatan.",
      ),
      b(
        "As UX Design Lead for LKPP's digital procurement platform, I combined service design and interface design to make the journey understandable at national scale of 10M+ users. We mapped the whole procurement lifecycle, rewrote procedures in plain language, and designed guided flows with clear status and next actions. The result is a documented set of patterns intended to be reused by other government services.",
        "Sebagai UX Design Lead untuk platform pengadaan digital LKPP, saya menggabungkan service design dan desain antarmuka agar perjalanan mudah dipahami pada skala nasional 10 juta+ pengguna. Kami memetakan seluruh siklus pengadaan, menulis ulang prosedur dengan bahasa sederhana, dan merancang alur terpandu dengan status serta tindakan berikutnya yang jelas. Hasilnya adalah kumpulan pola terdokumentasi yang dimaksudkan untuk dipakai ulang layanan pemerintah lainnya.",
      ),
    ],
    goals: [
      b(
        "Make the procurement journey legible from planning to payment, with status and next action visible at every stage.",
        "Membuat perjalanan pengadaan mudah dibaca dari perencanaan hingga pembayaran, dengan status dan tindakan berikutnya terlihat di setiap tahap.",
      ),
      b(
        "Translate regulatory language into plain Bahasa Indonesia without losing legal accuracy.",
        "Menerjemahkan bahasa regulasi menjadi Bahasa Indonesia yang sederhana tanpa mengurangi ketepatan hukum.",
      ),
      b(
        "Support low-end devices and unstable connections used outside major cities.",
        "Mendukung perangkat sederhana dan koneksi tidak stabil yang dipakai di luar kota besar.",
      ),
      b(
        "Create documented patterns that other government digital services can adopt.",
        "Menyusun pola terdokumentasi yang dapat diadopsi layanan digital pemerintah lain.",
      ),
    ],
    users: [
      {
        name: b("Government buyers (PPK and procurement committees)", "Pembeli pemerintah (PPK dan pokja pemilihan)"),
        need: b(
          "Confidence that each step meets regulation, with guidance for people who handle procurement only occasionally.",
          "Keyakinan bahwa setiap langkah sesuai regulasi, dengan panduan bagi orang yang hanya sesekali menangani pengadaan.",
        ),
      },
      {
        name: b("Vendors and suppliers", "Vendor dan penyedia"),
        need: b(
          "Clear requirements, document checklists and status updates so they can respond on time and avoid disqualification over technicalities.",
          "Persyaratan jelas, daftar periksa dokumen, dan pembaruan status agar mereka dapat merespons tepat waktu dan tidak gugur karena hal teknis.",
        ),
      },
      {
        name: b("Auditors and oversight officers", "Auditor dan petugas pengawasan"),
        need: b(
          "Traceable records of who did what and when, presented in a form that can be reviewed without special training.",
          "Catatan yang dapat ditelusuri tentang siapa melakukan apa dan kapan, disajikan dalam bentuk yang dapat ditinjau tanpa pelatihan khusus.",
        ),
      },
    ],
    challenge: b(
      "Regulation defines what must happen but not how it should feel, so the existing screens mirrored legal text rather than how people work. We had to serve users with very different digital literacy on devices ranging from new laptops to older Android phones, while keeping every legally required step and audit record. Several institutions had a say in the outcome, and wording changes needed legal sign-off.",
      "Regulasi menentukan apa yang harus terjadi tetapi bukan bagaimana rasanya, sehingga layar yang ada meniru teks hukum, bukan cara orang bekerja. Kami harus melayani pengguna dengan literasi digital yang sangat berbeda di perangkat dari laptop baru hingga Android lama, sambil mempertahankan setiap langkah yang diwajibkan dan catatan audit. Beberapa institusi ikut menentukan hasil, dan perubahan kata memerlukan persetujuan hukum.",
    ),
    research: [
      {
        finding: b("Infrequent users get lost, frequent users get slowed", "Pengguna jarang tersesat, pengguna sering terhambat"),
        detail: b(
          "Across 20 interviews with buyers and vendors in several regions, occasional users could not tell what stage they were in, while experienced users were slowed by extra explanations. We needed guidance that could be dismissed.",
          "Dari 20 wawancara dengan pembeli dan vendor di beberapa daerah, pengguna sesekali tidak tahu sedang berada di tahap apa, sedangkan pengguna berpengalaman terhambat penjelasan tambahan. Kami butuh panduan yang bisa disembunyikan.",
        ),
      },
      {
        finding: b("Legal wording is the main source of errors", "Bahasa hukum adalah sumber utama kesalahan"),
        detail: b(
          "In a review of help-desk questions and a content audit of 40 screens, most confusion came from labels such as document names and status terms that differed between modules.",
          "Dalam tinjauan pertanyaan help desk dan audit konten 40 layar, sebagian besar kebingungan berasal dari label seperti nama dokumen dan istilah status yang berbeda antarmodul.",
        ),
      },
      {
        finding: b("Vendors fear missing a requirement", "Vendor takut melewatkan persyaratan"),
        detail: b(
          "Vendors described uploading documents in the wrong format or missing a deadline as their biggest risk. They wanted pre-submission checks and a clear confirmation of what was received.",
          "Vendor menyebut mengunggah dokumen dengan format salah atau melewatkan tenggat sebagai risiko terbesar. Mereka menginginkan pemeriksaan sebelum pengiriman dan konfirmasi jelas tentang apa yang sudah diterima.",
        ),
      },
      {
        finding: b("Many users work on constrained devices", "Banyak pengguna memakai perangkat terbatas"),
        detail: b(
          "Remote-area interviews and device checks showed entry-level Android phones, shared office computers and slow connections. Heavy tables and large uploads regularly failed.",
          "Wawancara di daerah terpencil dan pemeriksaan perangkat menunjukkan ponsel Android entry-level, komputer kantor bersama, dan koneksi lambat. Tabel berat dan unggahan besar sering gagal.",
        ),
      },
    ],
    approach: [
      {
        title: b("Inclusive, multi-region research", "Riset inklusif lintas daerah"),
        body: b(
          "We interviewed 20 buyers, vendors and auditors, mixing Jakarta-based and regional participants, and observed 6 of them completing real tasks. We recruited deliberately for low digital confidence, not only power users. Findings were synthesised into three personas with clear regulatory constraints attached.",
          "Kami mewawancarai 20 pembeli, vendor, dan auditor dari Jakarta maupun daerah, dan mengamati 6 di antaranya menyelesaikan tugas nyata. Rekrutmen sengaja mencakup pengguna dengan kepercayaan digital rendah, bukan hanya pengguna mahir. Temuan disintesis menjadi tiga persona dengan batasan regulasi yang jelas.",
        ),
      },
      {
        title: b("Lifecycle service blueprint", "Service blueprint siklus pengadaan"),
        body: b(
          "We mapped the full procurement lifecycle with actors, documents, system touchpoints and legal checkpoints. The blueprint revealed handoffs where responsibility was unclear, such as who confirms delivery. It became the common reference in workshops with policy and legal teams.",
          "Kami memetakan seluruh siklus pengadaan lengkap dengan aktor, dokumen, titik sentuh sistem, dan checkpoint hukum. Blueprint ini menyingkap serah terima yang tanggung jawabnya tidak jelas, seperti siapa yang mengonfirmasi pengiriman. Blueprint menjadi acuan bersama dalam lokakarya dengan tim kebijakan dan hukum.",
        ),
      },
      {
        title: b("Plain-language guided flows", "Alur terpandu berbahasa sederhana"),
        body: b(
          "We rewrote complex procedures into guided steps, each with one purpose, a status label and a clear next action. A content strategist built a controlled glossary so the same term meant the same thing everywhere. Every rewrite was reviewed with legal advisers to keep it accurate.",
          "Kami menulis ulang prosedur rumit menjadi langkah terpandu, masing-masing dengan satu tujuan, label status, dan tindakan berikutnya yang jelas. Seorang content strategist menyusun glosarium terkendali agar istilah yang sama bermakna sama di mana pun. Setiap tulisan ulang ditinjau bersama penasihat hukum agar tetap akurat.",
        ),
      },
      {
        title: b("Accessible, lightweight patterns", "Pola aksesibel dan ringan"),
        body: b(
          "We set contrast, focus and error-handling rules that meet WCAG AA, and designed responsive layouts that degrade gracefully on small screens. Large tables collapse into stacked summaries, and uploads show clear size limits and retry. We tested prototypes on two entry-level Android devices.",
          "Kami menetapkan aturan kontras, fokus, dan penanganan error yang memenuhi WCAG AA, serta merancang layout responsif yang tetap nyaman di layar kecil. Tabel besar diringkas menjadi tampilan bertumpuk, dan unggahan menampilkan batas ukuran serta opsi coba lagi. Kami menguji prototipe di dua perangkat Android entry-level.",
        ),
      },
      {
        title: b("Usability testing and pattern documentation", "Usability test dan dokumentasi pola"),
        body: b(
          "We ran 3 rounds of usability tests with 5 to 7 participants each, remote and in person, and fixed issues between rounds. Patterns that survived were documented with usage rules, content guidelines and accessibility notes. This documentation is meant to help future government services reuse them.",
          "Kami menjalankan 3 putaran usability test dengan 5 sampai 7 peserta per putaran, jarak jauh dan tatap muka, dan memperbaiki masalah di antara putaran. Pola yang bertahan didokumentasikan dengan aturan pemakaian, panduan konten, dan catatan aksesibilitas. Dokumentasi ini dimaksudkan membantu layanan pemerintah berikutnya memakainya ulang.",
        ),
      },
    ],
    decisions: [
      {
        title: b("Guidance you can dismiss", "Panduan yang bisa disembunyikan"),
        body: b(
          "Always-on instructions helped newcomers but irritated experts. We built inline help that is expanded by default for first-time users and collapses after completion, trading some layout complexity for a flow that serves both groups.",
          "Instruksi yang selalu tampil membantu pemula tetapi mengganggu pengguna ahli. Kami membuat bantuan inline yang terbuka secara default untuk pengguna baru dan menutup setelah selesai, dengan konsekuensi layout lebih kompleks demi alur yang melayani kedua kelompok.",
        ),
      },
      {
        title: b("Status first, details second", "Status lebih dulu, detail kemudian"),
        body: b(
          "Procurement records contain dozens of fields. We chose to lead every record with a plain status, owner and next action, and move the full legal detail into expandable sections. We cut a custom dashboard builder because it added flexibility few users asked for.",
          "Catatan pengadaan memuat puluhan kolom. Kami memilih membuka setiap catatan dengan status, penanggung jawab, dan tindakan berikutnya yang sederhana, lalu memindahkan detail hukum lengkap ke bagian yang bisa dibuka. Kami menghapus pembuat dashboard kustom karena menambah fleksibilitas yang jarang diminta.",
        ),
      },
      {
        title: b("Performance as a design constraint", "Performa sebagai batasan desain"),
        body: b(
          "We gave up some visual richness such as large illustrations and animated transitions to keep pages light on slow networks. Shared components were designed with a size budget, and upload flows were made resumable so a dropped connection does not lose work.",
          "Kami mengorbankan sebagian kekayaan visual seperti ilustrasi besar dan transisi animasi demi halaman ringan di jaringan lambat. Komponen bersama dirancang dengan anggaran ukuran, dan alur unggah dibuat dapat dilanjutkan sehingga koneksi terputus tidak menghilangkan pekerjaan.",
        ),
      },
    ],
    metrics: [
      { value: "10M+", label: b("Users the platform is designed to serve", "Pengguna yang dirancang untuk dilayani platform") },
      { value: "20", label: b("Interviews across regions", "Wawancara lintas daerah") },
      { value: "3", label: b("Usability test rounds", "Putaran usability test") },
      { value: "40", label: b("Screens covered in the content audit", "Layar dalam audit konten") },
    ],
    outcomes: [
      b(
        "The platform experience is designed for 10M+ users across Indonesia with very different digital literacy.",
        "Pengalaman platform dirancang untuk 10 juta+ pengguna di seluruh Indonesia dengan literasi digital yang sangat beragam.",
      ),
      b(
        "Procurement now has a clearer journey from planning to payment, with status and next action visible at each stage.",
        "Pengadaan kini memiliki perjalanan yang lebih jelas dari perencanaan hingga pembayaran, dengan status dan tindakan berikutnya terlihat di setiap tahap.",
      ),
      b(
        "A controlled glossary reduced inconsistent terminology across modules.",
        "Glosarium terkendali mengurangi ketidakkonsistenan istilah antarmodul.",
      ),
      b(
        "Documented patterns and content guidelines are available for future government services.",
        "Pola terdokumentasi dan panduan konten tersedia untuk layanan pemerintah berikutnya.",
      ),
      b(
        "Policy, legal and product teams adopted the shared blueprint as a standing reference.",
        "Tim kebijakan, hukum, dan produk mengadopsi blueprint bersama sebagai acuan tetap.",
      ),
    ],
    learnings: [
      b(
        "In regulated services, content design is interface design; most usability gains came from words, not layout.",
        "Pada layanan yang diatur regulasi, desain konten adalah desain antarmuka; sebagian besar peningkatan kegunaan datang dari kata-kata, bukan layout.",
      ),
      b(
        "Involving legal advisers early in workshops turned them from gatekeepers into co-authors.",
        "Melibatkan penasihat hukum sejak awal dalam lokakarya mengubah mereka dari penjaga gerbang menjadi rekan penulis.",
      ),
      b(
        "Designing for the most constrained user usually improves the experience for everyone else as well.",
        "Merancang untuk pengguna dengan keterbatasan terbesar biasanya juga meningkatkan pengalaman bagi semua orang.",
      ),
    ],
    tools: ["Figma", "Miro", "Notion", "UserTesting", "Maze"],
  },

  "fintech-onboarding": {
    role: b("Lead Product Designer", "Lead Product Designer"),
    duration: b("2022 · 6 months", "2022 · 6 bulan"),
    team: b(
      "Led design with 1 junior designer, working with a product manager, a growth analyst and mobile engineers at WeekndLabs Studio",
      "Memimpin desain bersama 1 desainer junior, bekerja dengan product manager, analis growth, dan engineer mobile di WeekndLabs Studio",
    ),
    overview: [
      b(
        "A fintech client at WeekndLabs Studio was acquiring users successfully but losing most of them within a week. People downloaded the app, started registration, and then stalled at identity verification or first funding. Those who finished often never returned, which made acquisition spend inefficient and weakened the product's chance of becoming a habit.",
        "Klien fintech di WeekndLabs Studio berhasil mendapatkan pengguna tetapi kehilangan sebagian besar dari mereka dalam seminggu. Orang mengunduh aplikasi, memulai pendaftaran, lalu berhenti di verifikasi identitas atau pendanaan pertama. Mereka yang menyelesaikannya sering tidak pernah kembali, sehingga biaya akuisisi tidak efisien dan peluang produk menjadi kebiasaan melemah.",
      ),
      b(
        "As Lead Product Designer, I redesigned the first-week experience: sign-up, KYC verification, first top-up and the first guided action inside the app. I applied cognitive psychology and behavior-driven design principles, such as reducing effort, showing progress and making trust visible, then validated each change through small experiments. The redesign improved day-7 retention by 61%.",
        "Sebagai Lead Product Designer, saya mendesain ulang pengalaman minggu pertama: pendaftaran, verifikasi KYC, top-up pertama, dan aksi terpandu pertama di dalam aplikasi. Saya menerapkan prinsip psikologi kognitif dan desain berbasis perilaku, seperti mengurangi usaha, menampilkan progres, dan membuat kepercayaan terlihat, lalu memvalidasi tiap perubahan lewat eksperimen kecil. Redesain ini meningkatkan retensi hari ke-7 sebesar 61%.",
      ),
    ],
    goals: [
      b(
        "Increase completion of identity verification and first funding without weakening compliance checks.",
        "Meningkatkan penyelesaian verifikasi identitas dan pendanaan pertama tanpa melemahkan pemeriksaan kepatuhan.",
      ),
      b(
        "Give new users a reason to return on day two through day seven.",
        "Memberi pengguna baru alasan untuk kembali pada hari kedua hingga ketujuh.",
      ),
      b(
        "Make the reason behind every data request clear, so the app feels safe rather than intrusive.",
        "Membuat alasan di balik setiap permintaan data jelas, sehingga aplikasi terasa aman, bukan mengganggu.",
      ),
      b(
        "Build a reusable playbook of onboarding patterns for the studio's other fintech clients.",
        "Menyusun playbook pola onboarding yang dapat dipakai ulang untuk klien fintech lain di studio.",
      ),
    ],
    users: [
      {
        name: b("First-time digital finance users", "Pengguna baru keuangan digital"),
        need: b(
          "Plain explanations and reassurance, because sharing an ID photo with a new app feels risky.",
          "Penjelasan sederhana dan rasa aman, karena membagikan foto KTP ke aplikasi baru terasa berisiko.",
        ),
      },
      {
        name: b("Young professionals switching from another app", "Profesional muda yang pindah dari aplikasi lain"),
        need: b(
          "Speed and clear benefit; they compare the experience with apps they already use and quit quickly if it feels slow.",
          "Kecepatan dan manfaat yang jelas; mereka membandingkan pengalaman dengan aplikasi yang sudah dipakai dan cepat berhenti jika terasa lambat.",
        ),
      },
      {
        name: b("Users on low-end phones and weak networks", "Pengguna ponsel sederhana dan jaringan lemah"),
        need: b(
          "Camera and upload steps that tolerate poor light, slow connections and interruptions.",
          "Langkah kamera dan unggah yang tahan terhadap cahaya buruk, koneksi lambat, dan gangguan.",
        ),
      },
    ],
    challenge: b(
      "Verification is legally required, so we could not remove it, only make it feel shorter and safer. The team had little tolerance for long experiments because the client wanted results within a quarter. We also had to work with a third-party KYC provider whose capture screens and error messages we could only partly customise.",
      "Verifikasi diwajibkan secara hukum, jadi tidak bisa dihilangkan, hanya dibuat terasa lebih singkat dan aman. Tim tidak punya toleransi untuk eksperimen panjang karena klien menginginkan hasil dalam satu kuartal. Kami juga harus bekerja dengan penyedia KYC pihak ketiga yang layar capture dan pesan errornya hanya bisa disesuaikan sebagian.",
    ),
    research: [
      {
        finding: b("The steepest drop was at the ID photo step", "Penurunan terbesar terjadi di langkah foto KTP"),
        detail: b(
          "Funnel data showed a large share of users leaving at the camera screen. In 10 interviews with people who abandoned, the main reasons were uncertainty about why the photo was needed and repeated rejections caused by glare.",
          "Data funnel menunjukkan sebagian besar pengguna pergi di layar kamera. Dalam 10 wawancara dengan orang yang berhenti, alasan utamanya adalah ketidakjelasan mengapa foto dibutuhkan dan penolakan berulang akibat pantulan cahaya.",
        ),
      },
      {
        finding: b("An empty account gives no reason to return", "Akun kosong tidak memberi alasan untuk kembali"),
        detail: b(
          "Users who verified but did not fund saw an empty home screen. Diary-style follow-ups with 8 new users showed they did not know what to do next, so the app faded from their routine.",
          "Pengguna yang sudah verifikasi tetapi belum mengisi saldo melihat layar utama kosong. Tindak lanjut gaya buku harian dengan 8 pengguna baru menunjukkan mereka tidak tahu harus melakukan apa, sehingga aplikasi hilang dari rutinitas.",
        ),
      },
      {
        finding: b("Trust signals matter more than speed alone", "Sinyal kepercayaan lebih penting daripada kecepatan saja"),
        detail: b(
          "Participants accepted a longer flow when they understood who regulated the service and how data would be used. Unexplained requests for phone permissions and contacts caused immediate suspicion.",
          "Peserta menerima alur yang lebih panjang ketika memahami siapa yang mengawasi layanan dan bagaimana data dipakai. Permintaan izin telepon dan kontak tanpa penjelasan langsung menimbulkan kecurigaan.",
        ),
      },
      {
        finding: b("Interruptions are normal", "Gangguan adalah hal biasa"),
        detail: b(
          "People often started sign-up on a commute or at work and were interrupted. When they returned, the app restarted the flow, and many did not try again.",
          "Orang sering memulai pendaftaran saat perjalanan atau di kantor lalu terganggu. Saat kembali, aplikasi mengulang alur dari awal dan banyak yang tidak mencoba lagi.",
        ),
      },
    ],
    approach: [
      {
        title: b("Find the friction", "Temukan hambatan"),
        body: b(
          "We mapped every onboarding step against drop-off data and interview quotes, then scored each barrier by size and effort to fix. The ID photo step, the late permission requests and the empty first screen came out on top. This gave the team a short, agreed list instead of a long wishlist.",
          "Kami memetakan setiap langkah onboarding terhadap data drop-off dan kutipan wawancara, lalu menilai tiap hambatan berdasarkan besar dampak dan usaha perbaikan. Langkah foto KTP, permintaan izin yang terlambat, dan layar pertama yang kosong muncul di posisi teratas. Ini memberi tim daftar pendek yang disepakati, bukan daftar keinginan panjang.",
        ),
      },
      {
        title: b("Design for trust", "Desain yang membangun kepercayaan"),
        body: b(
          "Before each sensitive request we added a short explanation of why it is needed, who sees the data and how it is protected. A progress indicator showed how many steps remained, and users could save and resume later from the same point. Permission prompts were moved to the moment they were relevant.",
          "Sebelum setiap permintaan sensitif kami menambahkan penjelasan singkat tentang alasannya, siapa yang melihat data, dan bagaimana data dilindungi. Indikator progres menunjukkan sisa langkah, dan pengguna dapat menyimpan lalu melanjutkan nanti dari titik yang sama. Permintaan izin dipindahkan ke saat yang relevan.",
        ),
      },
      {
        title: b("Make the camera step forgiving", "Buat langkah kamera lebih memaafkan"),
        body: b(
          "We added live framing guides, glare and blur hints before capture, and a clear preview with a retake option. Rejection messages were rewritten to explain the exact issue and how to fix it. For weak networks, images are compressed on device and uploads retry automatically.",
          "Kami menambahkan panduan bingkai langsung, petunjuk pantulan dan keburaman sebelum pengambilan, serta pratinjau jelas dengan opsi ambil ulang. Pesan penolakan ditulis ulang agar menjelaskan masalah yang tepat dan cara memperbaikinya. Untuk jaringan lemah, gambar dikompres di perangkat dan unggahan mencoba ulang otomatis.",
        ),
      },
      {
        title: b("Guide the first week", "Pandu minggu pertama"),
        body: b(
          "We replaced the empty home with a short checklist: fund your account, complete one first action and set a goal. Each completed item gives immediate feedback through a light animation and a clear next step. Gentle reminders on day one, three and six referred to what the user had already done.",
          "Kami mengganti layar utama kosong dengan daftar periksa singkat: isi saldo, selesaikan satu aksi pertama, dan tetapkan tujuan. Setiap item yang selesai memberi umpan balik langsung lewat animasi ringan dan langkah berikutnya yang jelas. Pengingat lembut pada hari pertama, ketiga, dan keenam merujuk pada hal yang sudah dilakukan pengguna.",
        ),
      },
      {
        title: b("Test and learn", "Uji dan pelajari"),
        body: b(
          "We shipped changes as small experiments, each with a hypothesis and a retention or completion metric, and ran usability tests on prototypes with 6 participants per round. Changes that did not move metrics were removed rather than defended. What survived was written into an onboarding playbook.",
          "Kami merilis perubahan sebagai eksperimen kecil, masing-masing dengan hipotesis dan metrik retensi atau penyelesaian, dan menjalankan usability test pada prototipe dengan 6 peserta per putaran. Perubahan yang tidak menggerakkan metrik dihapus, bukan dipertahankan. Yang bertahan ditulis ke dalam playbook onboarding.",
        ),
      },
    ],
    decisions: [
      {
        title: b("Defer non-essential data collection", "Tunda pengumpulan data yang tidak esensial"),
        body: b(
          "Marketing wanted profile and preference questions during sign-up. We moved them after first funding, which cost the team some early segmentation data but removed effort at the moment users were least committed.",
          "Tim marketing menginginkan pertanyaan profil dan preferensi saat pendaftaran. Kami memindahkannya setelah pendanaan pertama, yang mengorbankan sebagian data segmentasi awal tetapi menghilangkan usaha pada saat pengguna paling belum berkomitmen.",
        ),
      },
      {
        title: b("Honest progress over a fake short flow", "Progres yang jujur, bukan alur singkat palsu"),
        body: b(
          "We considered hiding the step count to make the flow feel shorter. Testing showed people disliked surprises, so we showed all steps upfront with time estimates, accepting a slightly less exciting first screen for greater trust.",
          "Kami sempat mempertimbangkan menyembunyikan jumlah langkah agar alur terasa lebih singkat. Uji menunjukkan orang tidak suka kejutan, jadi kami menampilkan semua langkah di awal beserta perkiraan waktu, menerima layar pertama yang sedikit kurang menarik demi kepercayaan lebih besar.",
        ),
      },
      {
        title: b("Light motivation, no heavy gamification", "Motivasi ringan, tanpa gamifikasi berlebihan"),
        body: b(
          "Badges, streaks and reward points were proposed. For a money product we judged them risky for credibility, so we cut them and kept a restrained checklist with subtle completion feedback.",
          "Lencana, streak, dan poin hadiah sempat diusulkan. Untuk produk keuangan kami menilainya berisiko bagi kredibilitas, jadi kami menghapusnya dan mempertahankan daftar periksa yang sederhana dengan umpan balik penyelesaian yang halus.",
        ),
      },
    ],
    metrics: [
      { value: "+61%", label: b("Day-7 retention", "Retensi hari ke-7") },
      { value: "10", label: b("Drop-off interviews", "Wawancara pengguna yang berhenti") },
      { value: "6", label: b("Experiments shipped", "Eksperimen yang dirilis") },
      { value: "3", label: b("Usability test rounds", "Putaran usability test") },
    ],
    outcomes: [
      b(
        "Day-7 retention increased by 61% after the redesigned first-week experience.",
        "Retensi hari ke-7 naik 61% setelah pengalaman minggu pertama didesain ulang.",
      ),
      b(
        "Completion of identity verification and first funding improved as the camera step became more forgiving and the reasons clearer.",
        "Penyelesaian verifikasi identitas dan pendanaan pertama meningkat karena langkah kamera lebih memaafkan dan alasannya lebih jelas.",
      ),
      b(
        "Save-and-resume removed the penalty of being interrupted during sign-up.",
        "Fitur simpan dan lanjutkan menghilangkan kerugian akibat gangguan saat pendaftaran.",
      ),
      b(
        "The first-week checklist replaced the empty home screen and gave new users a clear next step.",
        "Daftar periksa minggu pertama menggantikan layar utama kosong dan memberi pengguna baru langkah berikutnya yang jelas.",
      ),
      b(
        "An onboarding playbook now helps the studio apply proven patterns to other fintech clients.",
        "Playbook onboarding kini membantu studio menerapkan pola yang terbukti pada klien fintech lain.",
      ),
    ],
    learnings: [
      b(
        "Explaining why you ask for something is often more effective than shortening the ask.",
        "Menjelaskan alasan di balik permintaan sering lebih efektif daripada memperpendek permintaan itu.",
      ),
      b(
        "Retention is decided in the first minutes after verification, so the first screen after success deserves as much design as sign-up.",
        "Retensi ditentukan dalam beberapa menit pertama setelah verifikasi, jadi layar pertama setelah berhasil layak mendapat desain sebanyak pendaftaran.",
      ),
      b(
        "Willingness to delete changes that do not move metrics keeps the product simple and the team honest.",
        "Kesediaan menghapus perubahan yang tidak menggerakkan metrik menjaga produk tetap sederhana dan tim tetap jujur.",
      ),
    ],
    tools: ["Figma", "Mixpanel", "Maze", "Lottie", "Notion"],
  },
}
