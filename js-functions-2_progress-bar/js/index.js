console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

// Select the progress bar element using its data attribute
const progressBar = document.querySelector('[data-js="progress-bar"]');

// Function to calculate how much the user has scrolled in percentage
function calculateScrollPercentage() {
  // Get the current scroll position (how far the user has scrolled)
  const scrollTop = window.scrollY;

  // Get the height of the visible window (the part of the page the user can see)
  const windowHeight = window.innerHeight;

  // Get the total height of the webpage (including the parts the user can't see without scrolling)
  const documentHeight = document.body.clientHeight;

  // Calculate the scroll percentage: current scroll divided by total scrollable height
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

  // Return the scroll percentage value
  return scrollPercentage;
}

// Add an event listener to trigger when the user scrolls
document.addEventListener("scroll", () => {
  // Calculate the current scroll percentage when scrolling
  const scrollPercent = calculateScrollPercentage();

  // Set the width of the progress bar to match the scroll percentage
  progressBar.style.width = `${scrollPercent}%`;
});
