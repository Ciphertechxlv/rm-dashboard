import { useState } from "react";
import { STUDY_TOPICS } from "../lib/studyNotes";

function TopicCard({ topic }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel">
      <button className="topic-toggle" onClick={() => setOpen(!open)}>
        <h2>{topic.title}</h2>
        <span className="topic-caret">{open ? "−" : "+"}</span>
      </button>
      <p className="topic-definition">{topic.definition}</p>
      {open && (
        <>
          <ul className="topic-points">
            {topic.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          {topic.examTip && (
            <div className="exam-tip">
              <strong>Exam tip:</strong> {topic.examTip}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function StudyNotes() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Study Notes</h1>
        <p>
          Condensed from your Ecobank Entry Level Training study guide. Click a topic to expand
          the full notes.
        </p>
      </div>
      {STUDY_TOPICS.map((t) => (
        <TopicCard key={t.id} topic={t} />
      ))}
    </main>
  );
}
