import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const squareElement = Square();

const circleElement = Circle();

const pentagonElement = Pentagon();

root.append(squareElement, circleElement, pentagonElement);
