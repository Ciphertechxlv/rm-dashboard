import { useState } from "react";
import mcqBank from "../lib/mcq.json";

const QUIZ_LENGTH = 15;

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
  return category === "all" ? mcqBank : mcqBank.filter((q) => q.category === category);
}

function newSet(category) {
  return shuffle(bankFor(category)).slice(0, QUIZ_LENGTH);
}

export default function Quiz() {
  const [category, setCategory] = useState("all");
  const [set, setSet] = useState(() => newSet("all"));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = set[index];

  function choose(letter) {
    if (selected) return;
    setSelected(letter);
    if (letter === current.correct) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= set.length) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    setSelected(null);
  }

  function restart(cat = category) {
    setCategory(cat);
    setSet(newSet(cat));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <main className="page">
      <div className="page-header">
        <h1>Quiz</h1>
      </div>

      <div className="category-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`category-tab ${category === c.id ? "active" : ""}`}
            onClick={() => restart(c.id)}
          >
            {c.label} ({bankFor(c.id).length})
          </button>
        ))}
      </div>

      {!finished && current && (
        <div className="panel">
          <div className="panel-head">
            <h2>Question {index + 1} of {set.length}</h2>
            <span className="timestamp">Score so far: {score}/{index + (selected ? 1 : 0)}</span>
          </div>

          <p className="quiz-question">{current.question}</p>

          <div className="quiz-options">
            {Object.entries(current.options).map(([letter, text]) => {
              let cls = "quiz-option";
              if (selected) {
                if (letter === current.correct) cls += " correct";
                else if (letter === selected) cls += " wrong";
              }
              return (
                <button key={letter} className={cls} onClick={() => choose(letter)} disabled={!!selected}>
                  <span className="quiz-letter">{letter}</span> {text}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="quiz-feedback">
              <p>
                <strong>{selected === current.correct ? "Correct — " : "Not quite — "}</strong>
                {current.explanation}
              </p>
              {current.whyWrong && <p className="empty-state">{current.whyWrong}</p>}
              <button className="add-row-btn" onClick={next}>
                {index + 1 >= set.length ? "See results" : "Next question →"}
              </button>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="panel">
          <div className="panel-head">
            <h2>Quiz complete</h2>
          </div>
          <p className="quiz-question">
            You scored {score} / {set.length} ({Math.round((score / set.length) * 100)}%)
          </p>
          <button className="add-row-btn" onClick={() => restart()}>
            Take another set →
          </button>
        </div>
      )}
    </main>
  );
}
