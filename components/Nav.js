import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";

const PRIMARY_LINKS = [
  { href: "/", label: "Desk" },
  { href: "/corporate-bank", label: "Corporate Bank" },
  { href: "/policy", label: "Policy Rates" },
];

const LEARN_LINKS = [
  { href: "/knowledge", label: "Reference" },
  { href: "/study-notes", label: "Study Notes" },
  { href: "/quiz", label: "Quiz" },
  { href: "/flashcards", label: "Flashcards" },
];

const TAIL_LINKS = [{ href: "/portfolio", label: "Portfolio & Targets" }];

export default function Nav() {
  const router = useRouter();
  const [learnOpen, setLearnOpen] = useState(false);
  const ref = useRef(null);
  const learnActive = LEARN_LINKS.some((l) => l.href === router.pathname);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setLearnOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="nav">
      <div className="nav-masthead">
        <span className="stamp stamp-small">RM</span>
        <div className="nav-title">
          <h1>Cipher&rsquo;s Virtual Office</h1>
          <span>Financial Institutions &amp; International Organizations · Corporate Banking</span>
        </div>
      </div>
      <div className="nav-bar">
        <nav className="nav-links">
          {PRIMARY_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={router.pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}

          <div className="nav-dropdown" ref={ref}>
            <button
              className={`nav-dropdown-trigger ${learnActive ? "active" : ""}`}
              onClick={() => setLearnOpen((v) => !v)}
            >
              Learn ▾
            </button>
            {learnOpen && (
              <div className="nav-dropdown-menu">
                {LEARN_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={router.pathname === l.href ? "active" : ""}
                    onClick={() => setLearnOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {TAIL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={router.pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
