const movementsList = document.getElementById("movementsList");

const themeButton = document.getElementById("themeButton");

const movements = [];
function displayMovements() {
    movementsList.innerHTML = "";

    movements.forEach(function (movement, index) {

        const movementElement = document.createElement("div");
        
movementElement.textContent =
    movement.name + " | " +
    movement.date + " | $" +
    movement.amount.toFixed(2) + " | Card " +
    movement.cardIndex + " | " +
    movement.type;

        const deleteButton = document.createElement("button");

deleteButton.textContent = "Delete";
deleteButton.classList.add("delete-button");

deleteButton.addEventListener("click", function () {
    movements.splice(index, 1);

    displayMovements();
    calculateFinancials();
});
        movementElement.appendChild(deleteButton);

        movementsList.appendChild(movementElement);
    });
}

const cardsList = document.getElementById("cardsList");
const cards = [];

const cardNameInput = document.getElementById("cardName");
const cardTypeInput = document.getElementById("cardType");

const creditFields = document.getElementById("creditFields");
const debitFields = document.getElementById("debitFields");

const creditLimitInput = document.getElementById("creditLimit");
const creditDebtInput = document.getElementById("creditDebt");
const debitMoneyInput = document.getElementById("debitMoney");

const addCardButton = document.getElementById("addCardButton");

const totalAvailableDisplay =
    document.getElementById("totalAvailable");

const movementNameInput =
    document.getElementById("movementName");

const movementDateInput =
    document.getElementById("movementDate");

const movementAmountInput =
    document.getElementById("movementAmount");

const movementTypeInput =
    document.getElementById("movementType");

const movementCardInput =
    document.getElementById("movementCard");

const addMovementButton =
    document.getElementById("addMovementButton");

addMovementButton.addEventListener("click", function () {

    const name = movementNameInput.value;
    
    const dateValue = movementDateInput.value;
    const [year, month, day] = dateValue.split("-");
    const date = `${day}/${month}/${year}`;
    
    const amount = Number(movementAmountInput.value);
    
    const cardIndex = Number(movementCardInput.value);
    
    const type = movementTypeInput.value;

const movement = {
    name: name,
    date: date,
    amount: amount,
    cardIndex: cardIndex,
    type: type
};

movements.push(movement);

displayMovements();
calculateFinancials();
    
    console.log("Name:", name);
    console.log("Date:", date);
    console.log("Amount:", amount);
    console.log("Card Index:", cardIndex);
    console.log("Type:", type);

});

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});

cardTypeInput.addEventListener("change", function () {

    if (cardTypeInput.value === "credit") {
        creditFields.style.display = "block";
        debitFields.style.display = "none";
    } else {
        creditFields.style.display = "none";
        debitFields.style.display = "block";
    }

});

addCardButton.addEventListener("click", function () {

    const name = cardNameInput.value;
    const type = cardTypeInput.value;

    if (type === "credit") {

        const creditLimit = Number(creditLimitInput.value);
        const debt = Number(creditDebtInput.value);

        const card = {
            name: name,
            type: type,
            creditLimit: creditLimit,
            debt: debt
        };

        cards.push(card);

    } else {

        const balance = Number(debitMoneyInput.value);

        const card = {
            name: name,
            type: type,
            balance: balance
        };

        cards.push(card);
    }

displayCards();
updateMovementCards();
calculateFinancials();

});

function displayCards() {

    cardsList.innerHTML = "";

    cards.forEach(function (card, index) {

        const cardElement = document.createElement("div");

        if (card.type === "credit") {

            const availableCredit = card.creditLimit - card.debt;

            cardElement.textContent =
                card.name +
                " | Credit Card | Limit: $" +
                card.creditLimit.toFixed(2) +
                " | Debt: $" +
                card.debt.toFixed(2) +
                " | Available: $" +
                availableCredit.toFixed(2);

        } else {

            cardElement.textContent =
                card.name +
                " | Debit Card | Money: $" +
                card.balance.toFixed(2);

        }

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function () {

            cards.splice(index, 1);

           displayCards();
           updateMovementCards();
           calculateFinancials();

        });

        cardElement.appendChild(deleteButton);

        cardsList.appendChild(cardElement);
    });
}

function updateMovementCards() {

    movementCardInput.innerHTML = "";

    cards.forEach(function (card, index) {

        const option = document.createElement("option");

        option.value = index;
        option.textContent = card.name;

        movementCardInput.appendChild(option);
    });
}

function calculateFinancials() {

    let totalAvailable = 0;

    cards.forEach(function (card) {

        if (card.type === "debit") {

            totalAvailable += card.balance;

        } else if (card.type === "credit") {

            const availableCredit = card.creditLimit - card.debt;

            totalAvailable += availableCredit;
        }

    });

    totalAvailableDisplay.textContent =
        "$" + totalAvailable.toFixed(2);

    console.log("Total Available:", totalAvailable);
}
