const navToggle = document.querySelector('.nav-toggle'); // Grab button
const links = document.querySelector('.links'); // Grab entire ul

// Manual Toggle Setup
// navToggle.addEventListener('click', () => {
//   console.log(links.classList); // classList - shows/gets all classes
//   if (links.classList.contains('show-links')) { // contains - checks classList for specific class
//     links.classList.remove('show-links') // remove - remove class
//   } else {
//     links.classList.add('show-links') // add - add class
//   }
// })

// Using Toggle
navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links') // toggle - toggles class show-links
})
