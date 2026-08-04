import { useState } from "react";
import cardBank from "../lib/flashcards.json";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Flashcards() {
  const [deck, setDeck] = useState(cardBank);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = deck[index];

  function go(delta) {
    setFlipped(false);
    setIndex((i) => (i + delta + deck.length) % deck.length);
  }

  function shuffleDeck() {
    setDeck(shuffle(cardBank));
    setIndex(0);
    setFlipped(false);
  }

  return (
    <main className="page">
      <div className="page-header">
        <h1>Flashcards</h1>
        <p>{cardBank.length} cards covering correspondent banking, DFIs, fintech regulation, NBFIs, and your FIIO team. Click a card to flip it.</p>
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
