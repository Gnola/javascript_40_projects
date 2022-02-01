const btns = document.querySelectorAll('.tab-btn'); // Grab the tab buttons with the class of tab-btn
const about = document.querySelector('.about'); // Grab the entire article with the class of about
const articles = document.querySelectorAll('.content'); // Grab all of the articles with the class of content

about.addEventListener('click', (e) => {
  // When clicking the button
  // console.log(e.target); // Returns the button clicked
  // console.log(e.currentTarget); // Returns the entire article that the button lives in
  const id = e.target.dataset.id; // Set id to the data-id attribute of whatever is clicked
  if (id) { // if whats clicked has a data-id attribute
    btns.forEach((btn) => { // Loop through the buttons
      btn.classList.remove('active') // remove active from all of the btns
      e.target.classList.add('active') // and add active to the button clicked
    });
    articles.forEach((article) => { // Loop through the articles
      article.classList.remove('active') // remove active from all of the articles
    });
    const element = document.getElementById(id) // grab the element based on the data-id attribute of whatever was clicked
    element.classList.add('active') // and add active to the that elements classList to show the correct article when switching tabs
  }
})
