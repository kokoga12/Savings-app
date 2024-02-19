class SavingsCalculator {
    constructor(initialSalary, savingsPercentage, raisePercentage) {
        this.initialSalary = initialSalary;
        this.savingsPercentage = savingsPercentage;
        this.raisePercentage = raisePercentage;
    }

    calculateAccumulatedAmount(years) {
        let accumulatedAmount = 0;
        let currentSalary = this.initialSalary;

        for (let year = 1; year <= years; year++) {
            const savings = currentSalary * (this.savingsPercentage / 100);
            accumulatedAmount += savings;
            currentSalary *= (1 + this.raisePercentage / 100);
        }

        return accumulatedAmount;
    }
}