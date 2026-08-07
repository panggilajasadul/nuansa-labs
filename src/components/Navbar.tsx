"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  // Avoid hydration mismatch by waiting until mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-border">
            <Image
              src="/logo.png"
              alt="Nuansa Labs Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-heading text-xl font-extrabold tracking-tight">
            Nuansa<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-fill-transparent text-transparent">Labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#home" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#products" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/#services" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#about" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Privacy
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted hover:bg-muted/10 hover:text-foreground transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted hover:bg-muted/10 hover:text-foreground transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-muted hover:bg-muted/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 transition-colors duration-300">
          <nav className="flex flex-col gap-4">
            <Link
              href="/#home"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#products"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
