export default function Button({ type, label }) {
  return (
    <button className={`btn ${type === "secondary" && "btn--secondary"}`}>
      {label}
    </button>
  );
}
