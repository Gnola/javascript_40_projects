let count = 0; // Set initial count

const value = document.querySelector('#value'); // Select element with the ID of value --> Span that displays the count
const btns = document.querySelectorAll('.btn') // Select ALL elements with the class containing btn --> Grabs all 3 buttons (and creates a node list of them)

btns.forEach((btn) => { // Loop through all buttons
  btn.addEventListener('click', (e) => { // and add an click event to each of them
    const styles = e.currentTarget.classList // grab the list of classes from the clicked button
    if (styles.contains('decrease')) { // if the classList contains 'decrease'
      count-- // decrement count
    } else if (styles.contains('increase')) { // if the classList contains 'increase'
      count++ // increment count
    } else if (styles.contains('reset')) { // if the classList contains 'reset'
      count = 0; // set count back to 0
    }
    // Change color of count on page depending on value of count variable
    if (count > 0) { // if count is > 0
      value.style.color = 'green' // change the color of the count span to green
    } else if (count < 0) { // if count is < 0
      value.style.color = 'red' // change the color of the count span to red
    } else { // Otherwise
      value.style.color = '#222' // change the color of the count span to grey
    }
    value.textContent = count // and set the content of the value span to whatever count is
  })
});
