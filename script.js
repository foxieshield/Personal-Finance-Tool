const creditLimitInput = document.getElementById("creditLimit");
const creditDebtInput = document.getElementById("creditDebt");
const debitMoneyInput = document.getElementById("debitMoney");

const calculateButton = document.getElementById("calculateButton");
const currentStockDisplay = document.getElementById("currentStock");

calculateButton.addEventListener("click", function () {

    const creditLimit = Number(creditLimitInput.value);
    const creditDebt = Number(creditDebtInput.value);
    const debitMoney = Number(debitMoneyInput.value);

    const availableCredit = creditLimit - creditDebt;

    const currentStock = debitMoney + availableCredit;

    currentStockDisplay.textContent = "$" + currentStock.toFixed(2);

});
