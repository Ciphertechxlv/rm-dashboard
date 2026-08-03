import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";

const PRIMARY_LINKS = [
  { href: "/", label: "Desk" },
  { href: "/tasks", label: "Tasks" },
  { href: "/fiio-unit", label: "FIIO Unit" },
  { href: "/policy", label: "Policy Rates" },
];

const DROPDOWNS = [
  {
    id: "grow",
    label: "Grow",
    links: [
      { href: "/financial-analysis", label: "Financial Analysis" },
      { href: "/business-development", label: "Business Development" },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    links: [
      { href: "/knowledge", label: "Reference" },
      { href: "/study-notes", label: "Study Notes" },
      { href: "/quiz", label: "Quiz" },
      { href: "/flashcards", label: "Flashcards" },
    ],
  },
];

const TAIL_LINKS = [{ href: "/portfolio", label: "Portfolio & Targets" }];

function NavDropdown({ group, router }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const active = group.links.some((l) => l.href === router.pathname);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className={`nav-dropdown-trigger ${active ? "active" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label} ▾
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          {group.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={router.pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const router = useRouter();

  return (
    <header className="nav">
      <div className="nav-masthead">
        <span className="stamp stamp-small">C</span>
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

          {DROPDOWNS.map((group) => (
            <NavDropdown key={group.id} group={group} router={router} />
          ))}

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
