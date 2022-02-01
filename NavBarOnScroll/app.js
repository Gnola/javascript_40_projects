// ********** set date ************
const date = document.getElementById('date'); // grab the date in the footer
date.innerHTML = new Date().getFullYear(); // set it to the current year

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle') // Grab the button in the navbar
const linksContainer = document.querySelector('.links-container') // Grab the div with all the links
const links = document.querySelector('.links') // Grab the div with all the links

navToggle.addEventListener('click', (e) => { // When clicking the navToggle button
  // linksContainer.classList.toggle('show-links') // Not the best approach when using hardcoded data
  const containerHeight = linksContainer.getBoundingClientRect().height // Get the height of the linksContainer --> 0 by default because of our CSS in order to hide links
  const linksHeight = links.getBoundingClientRect().height // Get the height of each link
  if (containerHeight === 0) { // If the height of the linksContainer is 0 (which it is by default)
    linksContainer.style.height = `${linksHeight}px` // dynamically add height to the links container
  } else {
    linksContainer.style.height = 0 // otherwise hide it by setting the height of each link to 0
  }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav') // Grab the navbar
const topLink = document.querySelector('.top-link') // Grab the 'back to top' button

window.addEventListener('scroll', () => { // on scroll
  const scrollHeight = window.pageYOffset; // get the number of pixels the document has been scrolled vertically
  const navbarHeight = navbar.getBoundingClientRect().height // get the height of the navbar

  if (scrollHeight > navbarHeight) { // Once you scroll past the navbarHeight
    navbar.classList.add('fixed-nav') // add the class fixed-nav to the navbar
  } else { // otherwise
    navbar.classList.remove('fixed-nav') // remove the class fixed-nav to the navbar
  }

  if (scrollHeight > 500) { // once you scroll past 500px
    topLink.classList.add('show-link') // display the 'back to top' button by adding the showlink class to the topLink button
  } else { // otherwise
    topLink.classList.remove('show-link') // remove the showlink class
  }
})

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link'); // grab the links with the class of scroll-link

scrollLinks.forEach((link) => { // loop through the links
  link.addEventListener('click', (e) => { // add a click event to each link
    e.preventDefault()  // prevent default functionality
    const id = e.currentTarget.getAttribute('href').slice(1) // set id to the href of the link clicked - start at index 1 (skip the # in the href)
    const element = document.getElementById(id); // grab the specific element based on its id (it's href)
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer .getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight; // dynamically grabs the top of the element clicked
    if (!fixedNav) { // if the navbar is NOT fixed
      position = position - navHeight; // take away the navbar and the containerHeight
    }
    if (navHeight > 82) { // if the links are shown
      position = position + containerHeight;
    }
    window.scrollTo({
      left:0,
      top:position
    })
    linksContainer.style.height = 0; // close the toggled navbar
  })
});
