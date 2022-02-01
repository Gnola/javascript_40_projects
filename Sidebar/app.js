const closeBtn = document.querySelector('.close-btn'); // Select the element with the class of close-btn
const toggleBtn = document.querySelector('.sidebar-toggle'); // Select the element with the class of sidebar-toggle
const sidebar = document.querySelector('.sidebar'); // Select the element with the class of sidebar

// Manual Toggle Setup
// toggleBtn.addEventListener('click', () => {
//   if (sidebar.classList.contains('show-sidebar')) {
//     sidebar.classList.remove('show-sidebar')
//   } else {
//     sidebar.classList.add('show-sidebar')
//   }
// })

// Using Toggle
toggleBtn.addEventListener('click', () => { // when clicking the toggle button
  sidebar.classList.toggle('show-sidebar') // toggles show-sidebar class from sidebar classList
})

// Close Button
closeBtn.addEventListener('click', () => { // when clicking the close button
  sidebar.classList.remove('show-sidebar') // removes show-sidebar class from sidebar classList
})
