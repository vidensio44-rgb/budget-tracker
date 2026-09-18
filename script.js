const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseDate = document.getElementById("expense-date");

const addExpenseButton = document.getElementById("add-expense-btn");
const expensesTable = document.querySelector("#expenses-list tbody");
const totalExpenses = document.getElementById("total-expenses");

console.log(addExpenseButton);

function updateTotalExpenses() {
    let total = 0;

    const rows = expensesTable.querySelectorAll("tr");

    rows.forEach(function (row) {
        const amountText = row.cells[1].textContent;
        const amount = Number(
            amountText.replace("KES", "").replace(",", "").trim()
        );

        total += amount;
    });

    totalExpenses.innerHTML =
        "<strong>Total Expenses: KES " + total.toLocaleString() + "</strong>";
}

addExpenseButton.addEventListener("click", function () {

    const name = expenseName.value;
    const amount = expenseAmount.value;
    const category = expenseCategory.value;
    const date = expenseDate.value;

    if (name === "" || amount === "" || date === "") {
        alert("Please fill in all the fields.");
        return;
    }

    const newRow = document.createElement("tr");

    newRow.innerHTML =
        "<td>" + name + "</td>" +
        "<td>KES " + Number(amount).toLocaleString() + "</td>" +
        "<td>" + expenseCategory.options[expenseCategory.selectedIndex].text + "</td>" +
        "<td>" + date + "</td>";

    expensesTable.appendChild(newRow);

    updateTotalExpenses();

    expenseName.value = "";
    expenseAmount.value = "";
    expenseDate.value = "";

    alert("Expense added successfully!");
    });