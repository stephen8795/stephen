const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    if (selected != card1) {
        selected.classList.toggle("selected");
    }
    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    if (selected != card2) {
        selected.classList.toggle("selected");
    }
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    if (selected != card3) {
        selected.classList.toggle("selected");
    }
    card3.classList.toggle("selected");
    selected = card3;
});