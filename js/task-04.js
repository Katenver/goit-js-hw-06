// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const span = document.querySelector('#value')

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () =>{
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
}

const decrement = () =>{
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
}

dekrBtn.addEventListener('click', decrement);
inkrBtn.addEventListener('click', increment);

