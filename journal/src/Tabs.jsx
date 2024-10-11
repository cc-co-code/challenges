export default function Tabs({ label, count }) {
  return (
    <button className="tabs">
      {label} <span className="badge">{count}</span>
    </button>
  );
}
