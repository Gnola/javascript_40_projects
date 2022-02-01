const slides = document.querySelectorAll('.slide'); // grab each slide
const nextBtn = document.querySelector('.nextBtn'); // grab the next button
const prevBtn = document.querySelector('.prevBtn'); // grab the prev button

slides.forEach((slide, i) => { // loop through the slides
  slide.style.left = `${i * 100}%` // add a left value of the index of that slide * 100
});

let counter = 0; // set initial counter

nextBtn.addEventListener('click', () => { // when clicking the next button
    counter++ // add to counter
    carousel() // and run carousel
})

prevBtn.addEventListener('click', () => { // when clicking the prev button
  counter-- // subtract from counter
  carousel() // and run carousel
})

function carousel() {
  // if (counter === slides.length) {
  //   counter = 0
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  if (counter < slides.length - 1) { // if youre not at the end of the slides
    nextBtn.style.display = 'block' // display the nextBtn
  } else { // otherwise
    nextBtn.style.display = 'none' // hide it
  }
  if (counter > 0) { // if youre not at the beginning of the slides
    prevBtn.style.display = 'block' // display the prevBtn
  } else { // otherwise
    prevBtn.style.display = 'none' // hide it
  }
  slides.forEach((slide) => { // loop through the slides
    slide.style.transform = `translateX(-${counter * 100}%)` // and add a transform property of translateX of the - counter *100 -- moves slides 100% to the left or right
  });
}
prevBtn.style.display = 'none' // at the beginning hide the prevBtn
