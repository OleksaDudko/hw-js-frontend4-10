// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

const timerBtn = document.querySelector(".timer");

let count = 0;

timerBtn.addEventListener("click", () => {
    const taimer = setInterval(() => {
    alert("Пройшла секунда");
    count +=1;

    if (count === 5) {
        clearInterval(taimer);
        alert("Час вийшов");
    }
}, 1000);
})


// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const box1El = document.querySelector(".box1");
const box2El = document.querySelector(".box2");
const box3El = document.querySelector(".box3");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
let height1 = 80;
let width1 = 80;

setInterval(() => {
    width1 += 4;
    height1 += 5;

    let r = Math.round((Math.random() * (255 - 1) + 1)); 
    let g = Math.round((Math.random() * (255 - 1) + 1)); 
    let b = Math.round((Math.random() * (255 - 1) + 1)); 

    box1El.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    box1El.style.width = width1 + "px";
    box1El.style.height = height1 + "px";
}, 1000);



let top1 = 300;
let left1 = 190;

setInterval(() => {
    top1 += 4;
    left1 += 6;

    let r = Math.round((Math.random() * (255 - 1) + 1)); 
    let g = Math.round((Math.random() * (255 - 1) + 1)); 
    let b = Math.round((Math.random() * (255 - 1) + 1)); 

    box2El.style.top = top1 + "px";
    box2El.style.left = left1 + "px";
    box2El.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 1000);
    


let left2 = 50;

setInterval(() => {
    left2 += 10;

    let r = Math.round((Math.random() * (255 - 1) + 1)); 
    let g = Math.round((Math.random() * (255 - 1) + 1)); 
    let b = Math.round((Math.random() * (255 - 1) + 1)); 

    box3El.style.left = left2 + "px";
    box3El.style.color = `rgb(${r}, ${g}, ${b})`;
}, 1000);
})

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const startEl = document.querySelector(".start");
const click1El = document.querySelector(".click1");
const click2El = document.querySelector(".click2");
const click3El = document.querySelector(".click3");
const click4El = document.querySelector(".click4");
const click5El = document.querySelector(".click5");
const blocksEl = document.querySelector(".blocks")
const pointEl = document.querySelector(".point");

let point = 0;

startEl.addEventListener("click", () => {
    setInterval(() => {
        
        let id = Math.round((Math.random() * (5 - 1) + 1));
        console.log(id);
        
        if (Number(click1El.id) === id) {
            click1El.style.backgroundColor = "green";
        }else{
            click1El.style.backgroundColor = "blue"
        }
        if (Number(click2El.id) === id) {
            click2El.style.backgroundColor = "green";
        }else{
            click2El.style.backgroundColor = "blue"
        }
        if (Number(click3El.id) === id) {
            click3El.style.backgroundColor = "green";
        }else{
            click3El.style.backgroundColor = "blue"
        }
        if (Number(click4El.id) === id) {
            click4El.style.backgroundColor = "green";
        }else{
            click4El.style.backgroundColor = "blue"
        }
        if (Number(click5El.id) === id) {
            click5El.style.backgroundColor = "green";
        }else{
            click5El.style.backgroundColor = "blue"
        }
    }, 2000);
})



blocksEl.addEventListener("click", (event) => {
    if (!event.target.matches("p")) {
    return;
}
    if (event.target.style.backgroundColor === "green") {
        point += 1;
        pointEl.textContent = point;
    }
    event.target.style.backgroundColor = "blue";
})


// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const secondsEl = document.querySelector(".seconds");
const start2Btn = document.querySelector(".start2");


start2Btn.addEventListener("click", () => {
    const seconds = Number(secondsEl.value);

    if (secondsEl.value === "") {
        alert("Введіть число");
        return
    }

    setTimeout(() => {
        alert("Час вийшов");
    }, seconds * 1000);
});
