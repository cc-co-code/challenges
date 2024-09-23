console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");

    // check if anser is ok
    if (!response.ok) {
      throw new Error("API Error: " + response.status); // throw error if answer is not ok
    }

    const data = await response.json(); // only convert JSON if answer is ok
    console.log(data); // log succesful data
  } catch (error) {
    console.log(error); // log error if smth goes wrong
  }
}
fetchData();
async function fetchEyeColor() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");

    // check if anser is ok
    if (!response.ok) {
      throw new Error("API Error: " + response.status); // throw error if answer is not ok
    }

    const eyeColor = await response.json();
    const characters = eyeColor.results;
    const r2d2 = characters.find((character) => character.name === "R2-D2");
    console.log(r2d2.eye_color);
  } catch (error) {
    console.log(error);
  }
}
fetchEyeColor();
