export function truncateToOneDecimal(num: number) {
    return Math.floor(num * 10) / 10;
}

export function getBmiStatus(bmi: number): string {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.99) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.99) {
        return "Overweight";
    } else {
        return "Obese";
    }
}