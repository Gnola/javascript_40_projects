const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway'); // Grab the h4 with the class of giveaway
const deadline = document.querySelector('.deadline'); // Grab the div with the class of deadline
const items = document.querySelectorAll('.deadline-format h4');  // Grab all the h4s with the class of deadline-format

// new Date(year, month, date, hours, minutes, seconds)
// let futureDate = new Date(2022, 3, 24, 11, 30, 0); // Create a random date --> Sunday April 24th 2022 at 11:30am
let futureDate = new Date(2021, 11, 31, 11, 59, 0); // Create a random date --> Sunday April 24th 2022 at 11:30am

const year = futureDate.getFullYear() // Grab the year from the Date from above
const hours = futureDate.getHours() // Grab the hours from the Date from above
const minutes = futureDate.getMinutes() // Grab the minutes from the Date from above

let month = futureDate.getMonth() // Grab the month from the date above -- returns a number 0 - 11
month = months[month] // Get the correct month from the array above -- 3 gives us April

const date = futureDate.getDate() // Grab the date from the date above -- a number 0 - 6
console.log(date);
const weekday = weekdays[futureDate.getDay()] // Get the correct day from the array above -- 24 gives us Sunday


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}: ${minutes}pm` // Set up the giveaway text

const futureTime = futureDate.getTime(); // Get the miliseconds from the date above

function getRemainingTime() {
  const today = new Date().getTime(); // get the current time
  const t = futureTime - today; // Find the difference between current date (today) and future date (futureTime) -- returns miliseconds

  const oneDay = 24*60*60*1000 // Get the ms in one day --> 24hrs*60mins*60secs*1000ms
  const oneHour = 60*60*1000 // Get the ms in one hour --> 60mins*60secs*1000ms
  const oneMinute = 60*1000 // Get the ms in one minute --> 60secs*1000ms

  let days = Math.floor(t / oneDay) // Find out how many days are left
  let hours = Math.floor((t % oneDay) / oneHour) // Find out how many hours are left -- modulous gets rid of extra miliseconds
  let minutes = Math.floor((t % oneHour) / oneMinute) // Find out how many minutes are left -- modulous gets rid of extra miliseconds
  let seconds = Math.floor((t % oneMinute) / 1000) // Find out how many seconds are left -- modulous gets rid of extra miliseconds

  const values = [days, hours, minutes, seconds]; // set values to an array of the values from above

  function format(item) { // Set up a format function that takes in the h4 selected above
    if (item < 10) { // if it is less than 10
      return item = `0${item}`; // add a 0 in front of the number shown
    } else {
      return item; // otherwise just show the number how it is
    }
  }

  items.forEach((item, i) => { // loop through the items
    item.innerHTML = format(values[i]) // set the innerHTML to the values with the correct format
  });

  if (t < 0) { // When we pass the date
    clearInterval(countdown) // Clear the interval
    deadline.innerHTML = `<h4 class='expired'>Sorry this giveaway has expired</h4>` // Show this instead of the counter
  }

}

let countdown = setInterval(getRemainingTime, 1000) // set countdown to an interval that runs getRemainingTime every second to countdown wihtout refreshing

getRemainingTime() // run the function on load
