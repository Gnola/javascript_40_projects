// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const img = document.getElementById('person-img') // Grab img tag with the id of person-img
const author = document.getElementById('author') // Grab h4 tag with the id of author
const job = document.getElementById('job') // Grab p tag with the id of job
const info = document.getElementById('info') // Grab p tag with the id of info

// Select Buttons
const prevBtn = document.querySelector('.prev-btn') // Grab the button that contains the class prev-btn
const nextBtn = document.querySelector('.next-btn') // Grab the button that contains the class next-btn
const randomBtn = document.querySelector('.random-btn') // Grab the button that contains the class random-btn

let currentItem = 0; // Set currentItem to 0

window.addEventListener('DOMContentLoaded', () => { // On Browser load
  showPerson() // run showPerson
})

const showPerson = (num) => { // takes in a num
  img.src = reviews[currentItem].img // set the src of the img tag to the value of img in the reviews array at the currentItem
  author.textContent = reviews[currentItem].name // set the content of the h4 tag to the value of name in the reviews array at the currentItem
  job.textContent = reviews[currentItem].job // set the content of the p tag to the value of job in the reviews array at the currentItem
  info.textContent = reviews[currentItem].text // set the content of the p tag to the value of text in the reviews array at the currentItem
}

prevBtn.addEventListener('click', () => { // When clicking the prevBtn
  currentItem-- // decrement currentItem
  if (currentItem < 0) { // If currentItem is < 0
    currentItem = reviews.length - 1; // set currentItem to the index of the LAST ITEM in the reviews array
  }
  showPerson() // and run showPerson
})

nextBtn.addEventListener('click', () => { // When clicking the nextBtn
  currentItem++ // increment currentItem
  if (currentItem > reviews.length - 1) { // if currentItem is > the index of the last item in the array
    currentItem = 0; // set currentItem back to 0
  }
  showPerson(currentItem) // run showPerson and pass in the currentItem
})

randomBtn.addEventListener('click', () => { // when clicking the randomBtn
  currentItem = Math.floor(Math.random() * reviews.length) // set currentItem to a reandom number betweeon 0 and the length of the array
  showPerson() // then run showPerson
})
