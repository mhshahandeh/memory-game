const cardArray = [
    {
        name: "fries",
        img: "img/fries.jfif"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.jfif"
    },
    {
        name: "hotdog",
        img: "img/hotdog.jfif"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.jfif"
    },
    {
        name: "milkshake",
        img: "img/milkshake.jfif"
    },
    {
        name: "pizza",
        img: "img/pizza.jfif"
    },
    {
        name: "fries",
        img: "img/fries.jfif"
    },
    {
        name: "cheeseburger",
        img: "img/cheeseburger.jfif"
    },
    {
        name: "hotdog",
        img: "img/hotdog.jfif"
    },
    {
        name: "ice-cream",
        img: "img/ice-cream.jfif"
    },
    {
        name: "milkshake",
        img: "img/milkshake.jfif"
    },
    {
        name: "pizza",
        img: "img/pizza.jfif"
    }
];

cardArray.sort(() => 0.5 - Math.random());

let gridDisplay = document.querySelector("#grid");
let resultDisplay = document.querySelector("#result")
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "img/blank.jfif");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
};

createBoard();

function checkFormatch() {
    let cards = document.querySelectorAll("img");
    let optionOneId = cardsChosenIds[0];
    let optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "img/blank.jfif");
        cards[optionTwoId].setAttribute("src", "img/blank.jfif");
        alert("You found a match!");
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!");
        cards[optionOneId].setAttribute("src", "img/white.png");
        cards[optionTwoId].setAttribute("src", "img/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute("src", "img/blank.jfif");
        cards[optionTwoId].setAttribute("src", "img/blank.jfif");
        alert("sorry try again!")
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulations you found them all";
    }
};

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkFormatch, 500);
    }
};