import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Smartphone, Globe, Cpu, Sparkles, CheckCircle, ArrowUpRight, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col justify-center overflow-hidden pt-8 pb-12 md:pt-12 md:pb-20 bg-background transition-colors duration-300">
        {/* Ambient background glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5"></div>
          <div className="absolute top-[40%] -left-[10%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[100px] dark:bg-secondary/5"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col - Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 transition-colors">
                <Sparkles className="h-3.5 w-3.5" />
                Creative App & Software Studio
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Building High-Impact Software for the{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Digital Era
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted mb-8 max-w-xl">
                Nuansa Labs adalah studio pengembang solusi digital modern. Kami merancang dan membangun aplikasi mobile cerdas, platform web modular, dan sistem automasi ritel untuk mempercepat pertumbuhan bisnis Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#products"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-background hover:opacity-95 transition-opacity shadow-lg shadow-primary/20"
                >
                  Lihat Produk Kami
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full border border-border bg-card/40 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold hover:bg-muted/10 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* Right Col - Visual Code */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-2xl rounded-3xl"></div>
              <div className="relative border border-border bg-card/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl font-mono text-sm leading-relaxed text-muted select-none border-l-4 border-l-primary">
                <div className="flex items-center gap-1.5 mb-6 border-b border-border pb-4">
                  <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-muted ml-3">nuansalabs-profile.json</span>
                </div>
                <div>
                  <p><span className="text-pink-500">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-emerald-500">&quot;Nuansa Labs&quot;</span>,</p>
                  <p className="pl-4">products: [<span className="text-emerald-500">&quot;NuansaPOS&quot;</span>, <span className="text-emerald-500">&quot;Games & Utilities&quot;</span>],</p>
                  <p className="pl-4">specialties: [<span className="text-emerald-500">&quot;Mobile Apps&quot;</span>, <span className="text-emerald-500">&quot;Mobile Games&quot;</span>],</p>
                  <p className="pl-4">status: <span className="text-emerald-500">&quot;Active & Verified&quot;</span></p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 border-t border-border bg-card/10 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Produk Unggulan</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">Karya Terbaik Kami</h2>
            <p className="text-muted mt-4">Solusi aplikasi modern yang dipublikasikan di Google Play Store untuk mendukung aktivitas bisnis Anda.</p>
          </div>

          <div className="flex justify-center">
            {/* NuansaPOS Card */}
            <div className="relative group max-w-2xl w-full border border-border bg-card/50 backdrop-blur-md rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl">
                      🏪
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold">NuansaPOS</h3>
                      <p className="text-xs text-muted">Aplikasi Kasir UMKM</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 border border-emerald-500/20">
                    Live on Play Store
                  </span>
                </div>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  Sistem kasir pintar (Point of Sale) Android yang dirancang khusus untuk mempermudah operasional ritel, kafe, salon, dan aneka bidang UMKM. Memudahkan manajemen stok barang, kas masuk/keluar, pelaporan keuangan, serta cetak struk via bluetooth printer.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Laporan Keuangan Realtime</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Manajemen Inventori Cerdas</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Mode Offline Stabil</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Cetak Struk Thermal</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nuansapos.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-background hover:opacity-95 transition-opacity"
                  >
                    Buka di Play Store
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://nuansapos.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card/40 backdrop-blur-sm py-3 text-sm font-semibold hover:bg-muted/10 transition-colors"
                  >
                    Website Resmi NuansaPOS
                    <Globe className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-t border-border transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Kategori Aplikasi Kami</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">Karya Kreatif Kami</h2>
            <p className="text-muted mt-4">Kami merancang perangkat lunak serbaguna yang tangguh untuk membantu menyelesaikan tantangan operasional harian Anda serta menghibur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="border border-border bg-card/30 rounded-2xl p-8 hover:bg-card/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Aplikasi Bisnis & Produktivitas</h3>
              <p className="text-muted text-sm">
                Pengembangan alat bisnis cerdas seperti aplikasi kasir POS, pengelola stok, dan sistem keuangan untuk mempermudah operasional harian Anda.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border border-border bg-card/30 rounded-2xl p-8 hover:bg-card/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-6">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Game & Hiburan Mobile</h3>
              <p className="text-muted text-sm">
                Pengembangan game kasual, edukasi, dan hiburan berbasis mobile yang ramah pengguna, interaktif, dan seru untuk semua kalangan di Google Play Store.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border border-border bg-card/30 rounded-2xl p-8 hover:bg-card/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Alat & Utilitas Cerdas</h3>
              <p className="text-muted text-sm">
                Pembuatan berbagai aplikasi utilitas pendukung produktivitas, alat konversi harian, dan fitur otomatisasi untuk mempermudah hidup pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border bg-card/10 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col - Graphic */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 blur-2xl rounded-full"></div>
              <div className="relative border border-border bg-card rounded-2xl p-8 shadow-xl text-center max-w-xs w-full">
                <span className="font-heading text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  100%
                </span>
                <p className="font-heading text-base font-bold mt-2">Verified Developer</p>
                <p className="text-xs text-muted mt-2">Google Play Store & Certified Android Ecosystem Partner.</p>
              </div>
            </div>

            {/* Right Col - Story */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Tentang Kami</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight mb-6">Nuansa Labs</h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                Nuansa Labs adalah studio pengembang aplikasi mobile independen yang berdedikasi mempublikasikan produk berkualitas tinggi di Google Play Store. Kami merancang dan membangun aneka macam perangkat lunak, mulai dari alat utilitas harian, sistem kasir pintar (POS), hingga game seluler kasual yang menyenangkan.
              </p>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Kami secara aktif mematuhi pedoman keamanan sistem, privasi data pengguna, serta regulasi Google Play Developer. Kami selalu mengedepankan kualitas performa aplikasi untuk menjamin kepuasan pengguna Layanan kami secara jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col - Address */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2">Hubungi Kami</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Layanan Dukungan & Hubungi Kami
              </h2>
              <p className="text-muted mb-8 text-sm sm:text-base">
                Apakah Anda memiliki masukan untuk pengembangan aplikasi kami, atau memerlukan bantuan dukungan teknis? Silakan kirimkan pesan Anda melalui form ini.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Email Resmi Developer</h4>
                    <p className="text-sm text-muted mt-1">
                      <a href="mailto:abdulhamid55255@gmail.com" className="hover:text-primary transition-colors">
                        abdulhamid55255@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-card border border-border shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Kantor & Alamat Resmi</h4>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      KP. CICADAS RT/RW 005/003, DESA CADASMEKAR,<br />
                      KECAMATAN TEGAL WARU, PURWAKARTA - 41165,<br />
                      Indonesia (ID)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
