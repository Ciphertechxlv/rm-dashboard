import { useState } from "react";
import { useRouter } from "next/router";

export default function Unlock() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      const data = await res.json();
      if (data.ok) {
        const next = typeof router.query.next === "string" ? router.query.next : "/portfolio";
        window.location.href = next;
      } else {
        setError(data.message || "Incorrect PIN.");
        setPin("");
      }
    } catch (err) {
      setError("Something went wrong — try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="unlock-wrap">
        <form className="unlock-card" onSubmit={submit}>
          <h1>Portfolio is locked</h1>
          <p>Enter your PIN to view your client list and targets.</p>
          <input
            className="unlock-input"
            type="password"
            inputMode="numeric"
            maxLength={8}
            autoFocus
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          {error && <div className="unlock-error">{error}</div>}
          <button className="unlock-btn" type="submit" disabled={loading || !pin}>
            {loading ? "Checking…" : "Unlock"}
          </button>
        </form>
      </div>
    </main>
  );
}
