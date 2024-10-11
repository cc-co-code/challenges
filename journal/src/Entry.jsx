export default function Entry({ title, text, date, isFavorite }) {
  return (
    <div className="entry">
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{text}</p>
      <button className="favorite-button">{isFavorite ? "🩷" : "🤍"}</button>
    </div>
  );
}
