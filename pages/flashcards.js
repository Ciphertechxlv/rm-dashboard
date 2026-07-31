import { useState } from "react";
import cardBank from "../lib/flashcards.json";

const CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "trade-finance", label: "Trade Finance" },
  { id: "corporate-bank", label: "Corporate Bank & FIIO" },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function bankFor(category) {
  return category === "all" ? cardBank : cardBank.filter((c) => c.category === category);
}

export default function Flashcards() {
  const [category, setCategory] = useState("all");
  const [deck, setDeck] = useState(bankFor("all"));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = deck[index];

  function go(delta) {
    setFlipped(false);
    setIndex((i) => (i + delta + deck.length) % deck.length);
  }

  function switchCategory(cat) {
    setCategory(cat);
    setDeck(bankFor(cat));
    setIndex(0);
    setFlipped(false);
  }

  function shuffleDeck() {
    setDeck(shuffle(bankFor(category)));
    setIndex(0);
    setFlipped(false);
  }

  return (
    <main className="page">
      <div className="page-header">
        <h1>Flashcards</h1>
        <p>{cardBank.length} cards spanning trade finance and your Corporate Bank/FIIO material. Click a card to flip it.</p>
      </div>

      <div className="category-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`category-tab ${category === c.id ? "active" : ""}`}
            onClick={() => switchCategory(c.id)}
          >
            {c.label} ({bankFor(c.id).length})
          </button>
        ))}
      </div>

      <div className="panel flashcard-panel">
        <div className="panel-head">
          <h2>Card {index + 1} of {deck.length}</h2>
          <span className="timestamp">{flipped ? "Showing answer" : "Showing question"}</span>
        </div>

        <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
          <div className="flashcard-face">
            {flipped ? card.back : card.front}
          </div>
        </div>

        <div className="flashcard-controls">
          <button className="add-row-btn" onClick={() => go(-1)}>← Prev</button>
          <button className="add-row-btn" onClick={() => setFlipped(!flipped)}>Flip</button>
          <button className="add-row-btn" onClick={() => go(1)}>Next →</button>
          <button className="add-row-btn" onClick={shuffleDeck}>Shuffle deck</button>
        </div>
      </div>
    </main>
  );
}
