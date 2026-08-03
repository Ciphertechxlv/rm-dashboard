import { useEffect, useState } from "react";
import { TASK_GROUPS, TEAM_ROUTING, BRANCH_CONTACTS } from "../lib/fiioTasks";

function storageKey(groupId) {
  return `tasks_${groupId}`;
}

function loadChecked(group) {
  try {
    const raw = window.localStorage.getItem(storageKey(group.id));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (group.resetsDaily) {
      const today = new Date().toDateString();
      if (parsed.date !== today) return {};
      return parsed.checked || {};
    }
    return parsed.checked || {};
  } catch {
    return {};
  }
}

function TaskGroup({ group }) {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    setChecked(loadChecked(group));
  }, [group]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggle(i) {
    const next = { ...checked, [i]: !checked[i] };
    setChecked(next);
    window.localStorage.setItem(
      storageKey(group.id),
      JSON.stringify({ date: new Date().toDateString(), checked: next })
    );
  }

  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>{group.title}</h2>
        <span className="timestamp">{doneCount}/{group.items.length} done{group.resetsDaily ? " · resets each day" : ""}</span>
      </div>
      <div className="task-list">
        {group.items.map((item, i) => (
          <label className={`task-item ${checked[i] ? "checked" : ""}`} key={i}>
            <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Tasks() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Tasks</h1>
      </div>

      {TASK_GROUPS.map((g) => (
        <TaskGroup key={g.id} group={g} />
      ))}

      <div className="panel">
        <div className="panel-head">
          <h2>Who to Loop In</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Area</th><th>Contact</th></tr></thead>
            <tbody>
              {TEAM_ROUTING.map((r) => (
                <tr key={r.area}>
                  <td>{r.area}</td>
                  <td style={{ color: "var(--blue)" }}>{r.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="empty-state" style={{ marginTop: 14 }}>
          Branch-side roles you'll interface with: {BRANCH_CONTACTS.join(", ")}.
        </p>
      </div>
    </main>
  );
}
