"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef, startTransition } from "react";
import { Anton } from "next/font/google";
import { Search, Menu, X } from "lucide-react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const navLinks = [
  { label: "Leaderboard", href: "/" },
  { label: "PIR Explainer", href: "/pir" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const desktopSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        desktopSearchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close drawers on route change and reset search when leaving home
  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
      setMobileSearchOpen(false);
      if (pathname !== "/") setSearchValue("");
    });
  }, [pathname]);

  function handleSearch(value: string) {
    setSearchValue(value);
    const qs = value ? `?q=${encodeURIComponent(value)}` : "";
    router.replace(`/${qs}`);
  }

  const searchBar = (autoFocus?: boolean) => (
    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
      <Search size={13} className="shrink-0 text-gray-500" />
      <input
        ref={autoFocus ? undefined : desktopSearchRef}
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search players"
        autoFocus={autoFocus}
        className="flex-1 bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-600"
      />
      {!autoFocus && (
        <kbd className="shrink-0 rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-gray-600">
          ⌘K
        </kbd>
      )}
    </div>
  );

  return (
    <nav className="bg-nav-bg sticky top-0 z-50">
      {/* Main bar */}
      <div className="flex h-14 items-center justify-between px-5 md:h-16 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-ledger-green h-7 w-7 shrink-0 rounded-md" />
          <div className="flex flex-col leading-none">
            <span
              className={`${anton.className} text-[1.1rem] tracking-wide text-white uppercase`}
            >
              Ledger
            </span>
            <span className="hidden font-mono text-[9px] tracking-[0.18em] text-gray-500 uppercase md:block">
              Euroleague · PIR
            </span>
          </div>
        </Link>

        {/* Desktop: nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-1 text-sm transition-colors ${
                  isActive
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {label}
                {isActive && (
                  <span className="bg-scoreboard-amber absolute right-0 bottom-0 left-0 h-0.5 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop: search */}
        <div className="hidden w-64 md:block">{searchBar()}</div>

        {/* Mobile: icons */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            aria-label="Search"
            onClick={() => {
              setMobileSearchOpen((o) => !o);
              setMenuOpen(false);
            }}
            className="text-gray-400"
          >
            <Search size={20} />
          </button>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMenuOpen((o) => !o);
              setMobileSearchOpen(false);
            }}
            className="text-gray-400"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile: search drawer */}
      {mobileSearchOpen && (
        <div className="border-t border-white/10 px-5 py-3 md:hidden">
          {searchBar(true)}
        </div>
      )}

      {/* Mobile: nav drawer */}
      {menuOpen && (
        <div className="flex flex-col border-t border-white/10 px-5 py-4 md:hidden">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`border-b border-white/5 py-3 text-sm last:border-0 ${
                  isActive ? "font-semibold text-white" : "text-gray-400"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
