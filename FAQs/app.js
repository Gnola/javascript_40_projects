// traversing the dom

// const btns = document.querySelectorAll('.question-btn'); // Grab ALL buttons with the question-btn class
//
// btns.forEach((btn) => { // Loop through all btns
//   btn.addEventListener('click', (e) => { // and add a click event to all of them
//     const question = e.currentTarget.parentElement.parentElement // grab the parent element of the parent element of the current button
//     question.classList.toggle('show-text')
//   })
// });

// using selectors inside the element

const questions = document.querySelectorAll('.question') // Grab ALL articles with the class of question

questions.forEach((question) => { // Loop through each question/article
  const btn = question.querySelector('.question-btn') // Grab the btns with the class question-btn

  btn.addEventListener('click', () => { // Add click event to each btn
    questions.forEach((item) => { // Loop through each question/article again
      if (item !== question) { // if the question we clicked on IS NOT the same as the question that is open
        item.classList.remove('show-text') // remove show-text from its classlist
      }
    });

    question.classList.toggle('show-text') // and toggle the class on the question
  })
});
