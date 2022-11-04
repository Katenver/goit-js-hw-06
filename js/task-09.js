

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtn = document.querySelector(".change-color");
const spanEl = document.querySelector('.color')
const bodyEl = document.querySelector('body');

// console.log(bodyEl)

changeBtn.addEventListener('click', changeColor) 
 function changeColor () {
  const random = getRandomHexColor();
  spanEl.textContent = `${random}`;
  bodyEl.style.background = `${random}`;
 } 
  



