const modalBtn = document.querySelector('.modal-btn') // select modal-btn
const modal = document.querySelector('.modal-overlay') // select modal-overlay
const closeBtn = document.querySelector('.close-btn') // select close-btn

// listen for click events on modal-btn
modalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal') // when user clicks modal-btn add .open-modal to modal-overlay
})

// listen for click events on close-btn
closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal') // when user clicks close-btn remove .open-modal from modal-overlay
})
