// Function to calculate PAYE tax based on KRA rates
function calculatePAYE(grossSalary) {
    // Assume these tax brackets and rates based on the provided link (hypothetical example)
    const taxBrackets = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 40000, rate: 15 },
        { min: 40001, max: 60000, rate: 20 },
        { min: 60001, max: Infinity, rate: 25 }
    ];

    let taxPayable = 0;
    let taxableIncome = grossSalary - 2400; // Assume basic relief of 2400

    for (let i = 0; i < taxBrackets.length; i++) {
        if (taxableIncome <= 0) {
            break;
        }

        let currentBracket = taxBrackets[i];
        let taxableInThisBracket = Math.min(taxableIncome, currentBracket.max - currentBracket.min);
        taxPayable += taxableInThisBracket * (currentBracket.rate / 100);
        taxableIncome -= taxableInThisBracket;
    }

    return taxPayable;
}

// Function to calculate NHIF deduction (hypothetical values)
function calculateNHIF(grossSalary) {
    // Assume NHIF rates (hypothetical)
    if (grossSalary < 6000) {
        return 150;
    } else if (grossSalary < 8000) {
        return 300;
    } else if (grossSalary < 12000) {
        return 400;
    } else if (grossSalary < 15000) {
        return 500;
    } else if (grossSalary < 20000) {
        return 600;
    } else if (grossSalary < 25000) {
        return 750;
    } else if (grossSalary < 30000) {
        return 850;
    } else if (grossSalary < 35000) {
        return 900;
    } else if (grossSalary < 40000) {
        return 950;
    } else if (grossSalary < 45000) {
        return 1000;
    } else if (grossSalary < 50000) {
        return 1100;
    } else if (grossSalary < 60000) {
        return 1200;
    } else if (grossSalary < 70000) {
        return 1300;
    } else if (grossSalary < 80000) {
        return 1400;
    } else if (grossSalary < 90000) {
        return 1500;
    } else if (grossSalary < 100000) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate NSSF deduction (hypothetical values)
function calculateNSSF(grossSalary) {
    // Assume NSSF rates (hypothetical)
    const nssfRateEmployee = 6; // percentage
    const nssfRateEmployer = 6; // percentage

    let nssfDeduction = grossSalary * (nssfRateEmployee / 100);
    return nssfDeduction;
}

// Main function to calculate all values and net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let grossSalaryCalculated = grossSalary - payee - nhif - nssf;
    
    // Assuming gross salary is sum of basic salary and benefits
    let netSalary = grossSalaryCalculated;

    return {
        grossSalary: grossSalaryCalculated,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Example usage:
let basicSalary = 50000; // Example basic salary
let benefits = 10000; // Example benefits

let salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax) Deduction:", salaryDetails.payee);
console.log("NHIF Deduction:", salaryDetails.nhif);
console.log("NSSF Deduction:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);