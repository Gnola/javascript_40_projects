const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `something here and then there and another here and there.`,
  }
];



const sectionCenter = document.querySelector('.section-center'); // Se;ect Main section
const container = document.querySelector('.btn-container'); // Se;ect Main section


window.addEventListener('DOMContentLoaded', () => { // On page load
  displayMenuItems(menu) // Display ALL Menu Items
  displayMenuButtons() // Display Menu buttons
})


// Map out and display each menu item from menu array
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return`<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class='item-text'>${item.desc}</p>
        </div>
      </article>
      `;
  })
  displayMenu = displayMenu.join('') // Get rid of the , between each item
  sectionCenter.innerHTML = displayMenu; // Display the articles in the sectionCenter
}

const displayMenuButtons = () => {
  const categories = menu.reduce((values, item) => { // values = array being created, item = items in menu array
    if (!values.includes(item.category)) { // If the category from the item in the menu array is NOT in values array
      values.push(item.category) // add them to the values array
    }
    return values; // return an array of categories
  }, ['all']) // Return an array of categories - start wil 'all' since we need it but its not in categories

  const categoryBtns = categories.map((category) => { // Map each button based on their category
    return `<button class="filter-btn" type='button' data-id='${category}'>${category}</button>`
  }).join('') // Get rid of the , between each item
  container.innerHTML = categoryBtns; // Display the btns in the btn-container element
  const filterBtns = container.querySelectorAll('.filter-btn'); // Select Filtering Buttons

  filterBtns.forEach((btn) => { // Loop thru each button
    btn.addEventListener('click', (e) => { // add click event
      const category = e.currentTarget.dataset.id // set category to the value of the data-id attribute on each button
      // console.log(category);
      const menuCategory = menu.filter((menuItem) => {  // filter thru the menu array
        if (menuItem.category === category) { // If the category of the menuItem matches the category of the button clicked
          return menuItem; // return those items
        }
      })
      if (category === 'all') { // if the category of the button clicked is all
        displayMenuItems(menu) // run displayMenuItems with the menu array and display ALL items
      } else { // Otherwise
        displayMenuItems(menuCategory) // run displayMenuItems with the array mapped out from menuCategory
      }
    })
  });
}
