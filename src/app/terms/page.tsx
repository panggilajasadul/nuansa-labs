export default function TermsPage() {
  return (
    <main className="py-20 bg-background transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="border border-border bg-card/50 backdrop-blur-md rounded-2xl p-6 md:p-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">
            Syarat & Ketentuan
          </h1>
          <div className="text-xs text-muted mb-8 border-b border-border pb-4">
            Terakhir diperbarui: 7 Agustus 2026
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-muted space-y-6">
            <p>
              Selamat datang di **Nuansa Labs**. Dengan mengakses, mengunduh, atau menggunakan produk aplikasi kami, termasuk **NuansaPOS Aplikasi Kasir UMKM** ("Aplikasi"), Anda menyatakan setuju untuk terikat oleh Syarat dan Ketentuan berikut.
            </p>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">1. Penggunaan Aplikasi</h2>
              <p>
                Anda berhak menggunakan aplikasi untuk keperluan bisnis internal Anda. Anda bertanggung jawab penuh atas keakuratan data transaksi kasir, inventaris barang, nama toko, dan kepatuhan hukum atas operasional bisnis Anda saat menggunakan Layanan kami.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">2. Hak Kekayaan Intelektual</h2>
              <p>
                Seluruh logo, merek dagang, desain antarmuka, aset visual, database skema, dan kode sumber aplikasi yang dipublikasikan oleh Nuansa Labs merupakan properti intelektual milik kami dan dilindungi oleh undang-undang hak cipta Republik Indonesia.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">3. Batasan Tanggung Jawab</h2>
              <p>
                Nuansa Labs tidak bertanggung jawab atas kerugian finansial, kegagalan sistem bisnis, kehilangan data penjualan, atau rusaknya perangkat keras yang diakibatkan oleh penggunaan aplikasi ini. Seluruh data transaksi tersimpan di ponsel lokal Anda secara default, sehingga risiko kehilangan data akibat kerusakan perangkat merupakan tanggung jawab pengguna secara mandiri.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">4. Perubahan Layanan</h2>
              <p>
                Kami berhak untuk mengubah, memperbarui, menambah, atau menghentikan sementara fitur tertentu di dalam aplikasi guna menyesuaikan dengan kebijakan sistem Android atau regulasi Google Play Store terbaru.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">5. Hubungi Kami</h2>
              <p className="mb-2">Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi kami di:</p>
              <ul className="list-none space-y-1 pl-4 text-xs font-semibold text-foreground">
                <li>Email: abdulhamid55255@gmail.com</li>
                <li>Alamat: KP. CICADAS RT/RW 005/003, DESA CADASMEKAR, KECAMATAN TEGAL WARU, PURWAKARTA - 41165, Indonesia (ID)</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
