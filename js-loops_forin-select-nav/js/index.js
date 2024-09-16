console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input ## Task

/*### Part 1: Creating a Select Input

Looking at the `./js/index.js` , there is a `languages` object with some key-value pairs. Additionally, a `select` element with the name "languages" is created and appended to the main element.

Iterate through the `languages` object using `for...in` and add the `option` elements for this dropdown menu.

The following hints may guide you:

- Create one `option` element for each entry in `languages`.
- For each option, set its `value` and `textContent` to the value of each entry in `languages`. You will need bracket notation, e.g. `languages[myIteratorName]`.
- Don't forget to append each option!
*/

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (const key in languages) {
  const option = document.createElement("option"); //create option element
  option.value = key; //set language to value
  option.textContent = languages[key];
  select.append(option);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar
/*### Part 2: Creating a Navigation Bar

Before we create a navigation bar, let's have a look what's already there in `./js/index.js` :

- There is a `nav` object with the keys "home", "about", and "contact".
- Each value is an object containing an "href" and "text" key and a string value.
- A `nav` and `ul` element is created and appended to the `main` element.

Your task is to fill this list with list items and anchor tags; as content, use the `nav` object which you can access with a `for...in` loop.

Use the following hints as a guideline:



  
*/
const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
//- Write a `for...in` loop for the `nav` object.
for (const key in nav) {
  //- In each iteration, - create a list item and an anchor tag
  const li = document.createElement("li");
  const a = document.createElement("a");

  // - set the anchor tag's `href` and `textContent` properties to the relevant values of the `nav` object; you want to use bracket notation with your iterator variable
  a.href = nav[key].href; // Set the href to the link from the nav object
  a.textContent = nav[key].text; // Set the text content to the link text

  // - append your created items accordingly.

  li.append(a); // Append the anchor tag to the list item
  ul.append(li); // Append the list item to the unordered list
}
// --^-- write/change code here --^--
