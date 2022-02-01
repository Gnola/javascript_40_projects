// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form'); // Grab the form
const alert = document.querySelector('.alert'); // Grab the paragraph with the class of alert that displays above the list
const grocery = document.getElementById('grocery'); // Grab the input
const submitBtn = document.querySelector('.submit-btn'); // Grab the submit button
const container = document.querySelector('.grocery-container'); // Grab the container that holds our list of items
const list = document.querySelector('.grocery-list'); // Grab the list of items
const clearBtn = document.querySelector('.clear-btn'); // Grab the button to clear the items


let editElement; // set up editElement
let editFlag = false; // set up edit flag
let editId = '' // set up edit id

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem) // On form submit, run the add item function
clearBtn.addEventListener('click', clearItems); // When clicking the clear button run the clear items function
window.addEventListener('DOMContentLoaded', setupItems) // on page load, display items from localStorage

// ****** FUNCTIONS **********

function addItem(e){
  e.preventDefault() // stop refresh / submit form to server
  const value = grocery.value; // set value to whatever that was inputted by the user
  const id = new Date().getTime().toString() // generate a random string for the id

  if (value && !editFlag) { // if there is something inputted and editFlag is false
      createListItem(id, value); // create item
      displayAlert('item added to the list', 'success') // display a successful alert
      container.classList.add('show-container') // and display the container that holds the list of items
      addToLocalStorage(id, value); // add the item to local storage
      setBackToDefault() // set form back to default
  } else if (value && editFlag) { // if there is a value and editFlag is true - edit the item
    editElement.innerHTML = value // set the input to the value to be edited
    displayAlert('value changed', 'success'); // display a successful alert
    editLocalStorage(editId, value); // edit the item in localStorage
    setBackToDefault(); // set form back to default
  } else { // if inputted value is empty
    displayAlert('please enter value', 'danger') // display danger alert
  }
}

function displayAlert(text, action){ // takes in a text and the type of class to add to the alert paragraph
  alert.textContent = text; // display the text passed in
  alert.classList.add(`alert-${action}`) // add the correct action to the class
  setTimeout(() => { // remove the alert after 1 sec
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`)
  }, 1000) // a
}

function clearItems() { // when clicking the clear btn
  const items = document.querySelectorAll('.grocery-item'); // grab all the items in the list
  if (items.length > 0) { // if there are items
    items.forEach((item) => { // loop over all the items
      list.removeChild(item) // remove each item from the list
    });
  }
    container.classList.remove('show-container') // hide the list container
    displayAlert('empty list', 'danger') // and display a danger alert
    setBackToDefault() // set form back to default
    localStorage.removeItem('list') // remove list items from localStorage
}

function deleteItem(e) { // takes in the event object
  const element = e.currentTarget.parentElement.parentElement; // Grab the actual list item
  const id = element.dataset.id; // grab the id of the element selected
  list.removeChild(element) // remove it from the list
  if (list.children.length === 0) { // if there are no more items in the list
    container.classList.remove('show-container') // hide the container
  }
  displayAlert('item removed', 'danger') // and display a danger alert
  setBackToDefault() // set form back to default
  removeFromLocalStorage(id) // remove item from localStorage
}

function editItem(e) { // takes in the event object
  const element = e.currentTarget.parentElement.parentElement; // Grab the actual list item
  editElement = e.currentTarget.parentElement.previousElementSibling; // Grab the paragraph with the item name
  grocery.value = editElement.innerHTML; // and put it back in the input
  editFlag = true; // set the editFlag to true
  editId = element.dataset.id; // set the editId to the id of the selected element
  submitBtn.textContent = 'edit' // change the submitBtn to show edit
}

function setBackToDefault(){
  grocery.value = '' // clear the input
  editFlag = false // set edit to false
  editId = '' // reset the edit id
  submitBtn.textContent = 'submit' // turn the button back to submit
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){ // takes an id and value
  const grocery = { id, value } // set up a grocery object with those values
  let items = getLocalStorage() // run getLocalStorage
  items.push(grocery) // add the item to the items array
  localStorage.setItem('list', JSON.stringify(items)) // add the item to localStorage
}

function removeFromLocalStorage(id) { // takes in the id of the element to delete
  let items = getLocalStorage(); // run getLocalStorage
  items = items.filter((item) => { // set items to everything except what matches the id passed in
    if (item.id !== id) {
      return item;
    }
  })
  localStorage.setItem('list', JSON.stringify(items)) // reset the localStorage array
}

function editLocalStorage(id, value) { // takes in the id and value of the element
  let items = getLocalStorage(); // run getLocalStorage
  items = items.map((item) => { // map out it items array
    if (item.id === id) { // if the id of the item being edited matches the id being passed in
      item.value = value // set the value to the value of that item in localStorage
    }
    return item; // and return that item
  })
  localStorage.setItem('list', JSON.stringify(items)) // reset the items in localStorage
}

function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];; // if there is nothing in localStorage return an empty array otherwise return whatever is in localStorage
}

// localStorage.setItem('orange', JSON.stringify(['item1', 'item2']))
// const oranges = JSON.parse(localStorage.getItem('orange'))
// localStorage.removeItem('orange')
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage(); // get localStorage
  if (items.length > 0) { // if there are items in localStorage
    items.forEach((item) => {
      createListItem(item.id, item.value) // loop through them and create a list item for each of them with its id and value
    });
  }
  container.classList.add('show-container') // display the container of list items
}

function createListItem(id, value) { // take in the value inputed and the randomly generated id
  const element = document.createElement('article') // create a new article tag
  element.classList.add('grocery-item'); // and add the class of grocery-item to it
  const attr = document.createAttribute('data-id') // create a custom data-id attribute
  element.setAttributeNode(attr) // and add that attribute to the newly created article
  element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>` // then dynamically add a new item based on the value the user inputed
    const deleteBtn = element.querySelector('.delete-btn') // Grab the delete button from the element
    const editBtn = element.querySelector('.edit-btn') // Grab the edit button from the element
    deleteBtn.addEventListener('click', deleteItem) // run deleteitem when clicking the deleteBtn
    editBtn.addEventListener('click', editItem) // run editItem when clicking the editBtn
    list.appendChild(element) // and add the item to the grocery list
}
