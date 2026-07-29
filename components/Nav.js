import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/", label: "Desk" },
  { href: "/policy", label: "Policy Rates" },
  { href: "/knowledge", label: "Reference" },
  { href: "/study-notes", label: "Study Notes" },
  { href: "/quiz", label: "Quiz" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/portfolio", label: "Portfolio & Targets" },
];

export default function Nav() {
  const router = useRouter();
  return (
    <header className="nav">
      <div className="nav-masthead">
        <span className="stamp stamp-small">RM</span>
        <div className="nav-title">
          <h1>Cipher&rsquo;s Virtual Office</h1>
          <span>Trade Finance · Corporate Banking Desk</span>
        </div>
      </div>
      <div className="nav-bar">
        <nav className="nav-links">
          {LINKS.map((l) => (
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
