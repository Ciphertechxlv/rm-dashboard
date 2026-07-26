import { useEffect, useState } from "react";

export default function DailyNote() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("daily_note");
    const savedDate = window.localStorage.getItem("daily_note_date");
    const today = new Date().toDateString();
    if (saved && savedDate === today) {
      setNote(saved);
    } else {
      setNote("");
    }
  }, []);

  function update(val) {
    setNote(val);
    window.localStorage.setItem("daily_note", val);
    window.localStorage.setItem("daily_note_date", new Date().toDateString());
  }

  return (
    <textarea
      className="notes"
      placeholder="e.g. Follow up with Client X's LC docs at port, watch for CBN circular on FX allocation, brief Risk on the guarantee memo before 2pm…"
      value={note}
      onChange={(e) => update(e.target.value)}
    />
  );
}
