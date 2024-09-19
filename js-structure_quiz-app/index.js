import Cards from "./components/Card/Card.js";
import cards from "./state/cards/cards.js"; // Import the global state
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import CardList from "./components/CardList/CardList.js";
import App from "./components/App/App.js";

/*import { cards } from "../state/cards.js"; // Import the global state
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form"; // Ensure Form is a named export
import { Bookmark } from "./components/Bookmark/Bookmark"; // Ensure Bookmark is a named export
import { CardList } from "./components/CardList/CardList"; // Ensure CardList is a named export
import { App } from "./components/App/App"; // Ensure App is a named export
// Store the cards in a global state*/

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
