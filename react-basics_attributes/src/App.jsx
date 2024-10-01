import "./App.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hows the weather on mars</h2>
      <p>Didnt you always want to know the weather on mars</p>
      <label htmlFor="weather">Enter your guess</label>
      <input type="text" id="weather"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Climate_of_Mars"
      >
        here you can find out how the weather really is
      </a>
    </article>
  );
}
