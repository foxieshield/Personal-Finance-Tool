const movementNameInput = document.getElementById("movementName");
const movementDateInput = document.getElementById("movementDate");
const movementAmountInput = document.getElementById("movementAmount");

const movementAccountInput = document.getElementById("movementAccount");
const movementTypeInput = document.getElementById("movementType");

const addMovementButton = document.getElementById("addMovementButton");

const creditLimitInput = document.getElementById("creditLimit");
const creditDebtInput = document.getElementById("creditDebt");
const debitMoneyInput = document.getElementById("debitMoney");

const calculateButton = document.getElementById("calculateButton");
const currentStockDisplay = document.getElementById("currentStock");
const availableCreditDisplay = document.getElementById("availableCredit");

calculateButton.addEventListener("click", function () {
    
    const creditLimit = Number(creditLimitInput.value);
    const creditDebt = Number(creditDebtInput.value);
    const debitMoney = Number(debitMoneyInput.value);

    const availableCredit = creditLimit - creditDebt;

    const currentStock = debitMoney + availableCredit;

    availableCreditDisplay.textContent = "$" + availableCredit.toFixed(2);
    console.log("Available Credit:", availableCredit);
    console.log("Current Stock:", currentStock);
    
    currentStockDisplay.textContent = "$" + currentStock.toFixed(2);

});
addMovementButton.addEventListener("click", function () {

    const name = movementNameInput.value;
    const date = movementDateInput.value;
    const amount = Number(movementAmountInput.value);
    const account = movementAccountInput.value;
    const type = movementTypeInput.value;

    console.log("Name:", name);
    console.log("Date:", date);
    console.log("Amount:", amount);
    console.log("Account:", account);
    console.log("Type:", type);

});
