document.addEventListener("keyup", function(event) {
    // Naming variables
    let initial_mtax = document.querySelector("#mt");
    let Sat = document.querySelector("#sat");
    let yT = document.querySelector("#yt");
    let yiat = document.querySelector("#yiat");

    // Getting input field value
    let i = parseFloat(document.querySelector("#salary input").value) || 0; // Parse input value to float, default to 0 if empty or non-numeric

    // Monthly Income
    let mi = i;
    document.querySelector("#mi").innerHTML = mi.toFixed(2); // Display monthly income

    // Yearly Income
    let yi = i * 12;
    document.querySelector("#yi").innerHTML = yi.toFixed(2); // Display yearly income

    // Calculate Tax based on income ranges
    let monthlyTax = 0;
    let yearlyTax = 0;

    if (yi <= 600000) {
        // No tax
        monthlyTax = 0;
        yearlyTax = 0;
    } else if (yi > 600000 && yi <= 1200000) {
        // 5% of the amount exceeding Rs600,000
        monthlyTax = ((yi - 600000) * (5 / 100)) / 12;
        yearlyTax = (yi - 600000) * (5 / 100);
    } else if (yi > 1200000 && yi <= 2200000) {
        // Rs30,000 + 15% of the amount exceeding Rs1,200,000
        monthlyTax = (((yi - 1200000) * (15 / 100)) / 12) + 2500;
        yearlyTax = (yi - 1200000) * (15 / 100) + 30000;
    } else if (yi > 2200000 && yi <= 3200000) {
        // Rs180,000 + 25% of the amount exceeding Rs2,200,000
        monthlyTax = (((yi - 2200000) * (25 / 100)) / 12) + 14500;
        yearlyTax = (yi - 2200000) * (25 / 100) + 180000;
    } else if (yi > 3200000 && yi <= 4100000) {
        // Rs430,000 + 30% of the amount exceeding Rs3,200,000
        monthlyTax = (((yi - 3200000) * (30 / 100)) / 12) + 31250;
        yearlyTax = (yi - 3200000) * (30 / 100) + 430000;
    } else if (yi > 4100000) {
        // Rs700,000 + 35% of the amount exceeding Rs4,100,000
        monthlyTax = (((yi - 4100000) * (35 / 100)) / 12) + 54583.33;
        yearlyTax = (yi - 4100000) * (35 / 100) + 700000;
    }

    // Monthly Tax
    initial_mtax.innerHTML = monthlyTax.toFixed(2);

    // Salary After Tax
    let salaryAfterTax = mi - monthlyTax;
    Sat.innerHTML = salaryAfterTax.toFixed(2);

    // Yearly Tax
    yT.innerHTML = yearlyTax.toFixed(2);

    // Yearly Income After Tax
    let yearlyIncomeAfterTax = yi - yearlyTax;
    yiat.innerHTML = yearlyIncomeAfterTax.toFixed(2);

});
