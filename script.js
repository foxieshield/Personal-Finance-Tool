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
            movement.amount.toFixed(2) + " | " +
            movement.account + " | " +
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

const addMovementButton =
    document.getElementById("addMovementButton");

function calculateFinancials() {

    const creditLimit = Number(creditLimitInput.value);
    const creditDebt = Number(creditDebtInput.value);
    const debitMoney = Number(debitMoneyInput.value);

    let currentDebit = debitMoney;
    let currentCreditDebt = creditDebt;

    movements.forEach(function (movement) {

        if (movement.account === "debit") {

            if (movement.type === "income") {
                currentDebit += movement.amount;
            } else if (movement.type === "expenditure") {
                currentDebit -= movement.amount;
            }

        } else if (movement.account === "credit") {

            if (movement.type === "income") {
                currentCreditDebt -= movement.amount;
            } else if (movement.type === "expenditure") {
                currentCreditDebt += movement.amount;
            }

        }

    });

    const availableCredit = creditLimit - currentCreditDebt;

    const currentStock = currentDebit + availableCredit;

    availableCreditDisplay.textContent =
        "$" + availableCredit.toFixed(2);

    currentStockDisplay.textContent =
        "$" + currentStock.toFixed(2);

    console.log("Current Debit:", currentDebit);
    console.log("Current Credit Debt:", currentCreditDebt);
    console.log("Available Credit:", availableCredit);
    console.log("Current Stock:", currentStock);
}

calculateButton.addEventListener("click", function () {
    calculateFinancials();
});

addMovementButton.addEventListener("click", function () {

    const name = movementNameInput.value;
    
    const dateValue = movementDateInput.value;
    const [year, month, day] = dateValue.split("-");
    const date = `${day}/${month}/${year}`;
    
    const amount = Number(movementAmountInput.value);
    const account = movementAccountInput.value;
    const type = movementTypeInput.value;


const movement = {
    name: name,
    date: date,
    amount: amount,
    account: account,
    type: type
};

movements.push(movement);

displayMovements();
calculateFinancials();
    
    console.log("Name:", name);
    console.log("Date:", date);
    console.log("Amount:", amount);
    console.log("Account:", account);
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
