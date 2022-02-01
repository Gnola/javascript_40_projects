// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn'); // grab the element with the class switch-btn
const video = document.querySelector('.video-container'); // grab the element with the class of video-container

btn.addEventListener('click', () => { // When btn is clicked
  if (!btn.classList.contains('slide')) { // if the btn classList DOES NOT CONTAIN slide
    btn.classList.add('slide') // add it - slides the toggle button
    video.pause() // and pause the video
  } else { // otherwise
    btn.classList.remove('slide') // remove it - slides the toggle button
    video.play() // and play the video
  }
})

// Preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
})
