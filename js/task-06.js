// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали 
// у вихідні файли завдання.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const validInputEl = document.querySelector('#validation-input');
const onBlurVerify = () => {
    if (validInputEl.value.length !== +validInputEl.dataset.length){
       
       validInputEl.classList.add('invalid');
       validInputEl.classList.remove('valid');
        
    } else {
       
        validInputEl.classList.add('valid');
        validInputEl.classList.remove('invalid');
    } 
}

validInputEl.addEventListener('blur', onBlurVerify);








// const inputEl = document.querySelector("#validation-input");
// inputEl.addEventListener("blur", formCheck);

// console.log(inputEl);
// function formCheck(evt) {
//   evt.preventDefault();
//   if (inputEl.value.length === 6) {
//     inputEl.style.borderColor = "#4caf50";
//   } else if (inputEl.value.length === 0) {
//     inputEl.style.borderColor = "#bdbdbd";
//   } else {
//     inputEl.style.borderColor = "#f44336";
//   }
//   return;
// }