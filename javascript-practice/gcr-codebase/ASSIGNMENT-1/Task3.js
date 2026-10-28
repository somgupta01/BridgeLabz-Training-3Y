const expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;

const taxRate = 10;
let finalAmount = total;
finalAmount += total * taxRate / 100;

console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + (finalAmount - total).toFixed(2));
console.log("Final Amount after Tax: ₹" + finalAmount.toFixed(2));