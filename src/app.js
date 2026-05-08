// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.



// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const box1El = document.querySelector(".box1");
const box2El = document.querySelector(".box2");
const box3El = document.querySelector(".box3");

setInterval(() => {
    box1El.style.backgroundColor = "blue";
    box2El.style.top = "450";
    box2El.style.left = "300";
}, 1000);