console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.querySelector('[data-js="first-name"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const age = parseInt(data.age, 10);
  const badness = parseInt(data.badness, 10);
  const ageBadnessSum = age + badness;

  console.log(
    `The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`
  );

  form.reset();
  firstNameInput.focus();
});
