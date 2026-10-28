let currentSalary = 30000;
const incrementRate = 10;

const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * incrementRate / 100;

    salaryReport.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

console.table(salaryReport);