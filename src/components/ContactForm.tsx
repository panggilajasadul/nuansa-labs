"use client";

import * as React from "react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [name, setName] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate Network Request
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur-md">
      <h3 className="font-heading text-xl font-bold mb-6">Kirim Pesan</h3>
      
      {status === "success" ? (
        <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/20 text-center text-emerald-500 animate-fade-in">
          <p className="font-semibold text-sm">Pesan Berhasil Terkirim!</p>
          <p className="text-xs mt-1 text-muted">
            Halo {name}, terima kasih telah menghubungi kami. Kami akan merespons melalui email segera.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Masukkan email Anda"
              className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
              Pesan Anda
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Tuliskan detail pertanyaan atau projek Anda..."
              className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-background hover:opacity-95 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      )}
    </div>
  );
}
