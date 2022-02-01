const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn'); // Select element with the id of btn --> 'Click Me' button
const color = document.querySelector('.color'); // Select element with the class of color --> span tag that shows the color selected


btn.addEventListener('click', function(){ // On Button click
  let hexColor = '#' // Set Up inital #
  for (let i = 0; i < 6; i++) { // Loop 6 times
    hexColor += hex[getRandomNumber()] // Get random number and Add that random elements from hex to hexColor
  }
    document.body.style.backgroundColor = hexColor // set the bodys background to the hexColor
    color.textContent = hexColor // Change the content of the span with the class of color to whatever element is selected
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length) // Return a random number between 0 and the length of the array of hex colors
}
