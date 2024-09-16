// Get command-line arguments, excluding the first two (node and file path)
const args = process.argv.slice(2);

// If no arguments are provided, display an error message
if (args.length === 0) {
    console.error("Please provide at least one number as an argument.");
    process.exit(1);
}

// Convert the arguments to numbers
const numbers = args.map(Number);

// Check if all arguments are valid numbers
if (numbers.some(isNaN)) {
    console.error("Please provide only numbers as arguments.");
    process.exit(1);
}

// Calculate the sum and average
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

// Display the result
console.log(`The average is: ${average}`);
