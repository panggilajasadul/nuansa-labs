import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="py-20 bg-background transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="border border-border bg-card/50 backdrop-blur-md rounded-2xl p-6 md:p-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">
            Kebijakan Privasi
          </h1>
          <div className="text-xs text-muted mb-8 border-b border-border pb-4">
            Terakhir diperbarui: 7 Agustus 2026
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-muted space-y-6">
            <p>
              Selamat datang di Kebijakan Privasi **Nuansa Labs**. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengelola, dan melindungi informasi Anda saat Anda menggunakan aplikasi kami, termasuk **NuansaPOS Aplikasi Kasir UMKM** ("Layanan").
            </p>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">1. Informasi yang Kami Kumpulkan</h2>
              <p className="mb-2">Kami mengumpulkan informasi yang terbatas untuk memastikan Layanan dapat berfungsi secara optimal:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Data Transaksi Lokal:</strong> Seluruh data terkait pencatatan stok barang, harga produk, laporan transaksi kasir, dan nama toko disimpan secara lokal di media penyimpanan internal perangkat seluler Anda. Kami tidak mengunggah data ini ke server kami, kecuali Anda mengaktifkan layanan sinkronisasi cloud opsional.
                </li>
                <li>
                  <strong>Data Diagnostik Sistem:</strong> Kami dapat mengumpulkan data crash log, model perangkat, versi OS perangkat, dan performa aplikasi guna melakukan troubleshooting jika terjadi error pada sistem.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p className="mb-2">Data yang dikumpulkan digunakan semata-mata untuk:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Mengoperasikan, memelihara, dan menyediakan fitur inti aplikasi secara utuh.</li>
                <li>Melakukan perbaikan bug, pemeliharaan sistem, dan peningkatan performa aplikasi secara berkala.</li>
                <li>Membalas pesan dukungan teknis saat Anda menghubungi kami via email.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">3. Keamanan Data</h2>
              <p>
                Kami menerapkan prosedur keamanan standar industri untuk memastikan data lokal Anda aman di perangkat Anda. Sangat penting bagi Anda untuk melakukan cadangan data (*backup*) secara mandiri menggunakan fitur backup database di aplikasi untuk menghindari kehilangan data saat ponsel hilang atau rusak.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">4. Hak Pengguna</h2>
              <p>
                Sebagai pengguna, Anda memegang kendali penuh atas data Anda. Anda dapat mengedit, memperbarui, atau menghapus seluruh catatan transaksi dan akun di dalam aplikasi secara mandiri kapan saja.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">5. Hubungi Kami</h2>
              <p className="mb-2">Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:</p>
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
