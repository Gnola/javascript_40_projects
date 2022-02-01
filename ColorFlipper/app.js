const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn'); // Select element with the id of btn --> 'Click Me' button
const color = document.querySelector('.color'); // Select element with the class of color --> span tag that shows the color selected

btn.addEventListener('click', function(){ // On Button click
  const randomNumber = getRandomNumber(); // Get random number
  document.body.style.backgroundColor = colors[randomNumber]; // Randomly select a color from the array and set the body background to that color
  color.textContent = colors[randomNumber] // Change the content of the color span to whatever color is selected
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length) // Return a random number between 0 and the length of the array of colors from above (4)
}
