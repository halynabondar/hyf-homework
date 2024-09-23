// Get command-line arguments, excluding the first two (node and file path)
const args = process.argv.slice(2);

// If no arguments are provided, display an error message
if (args.length === 0) {
    console.error("Please provide at least one number as an argument.");
    process.exit(1);
}

// Filter out non-numeric inputs and convert valid inputs to numbers
const validNumbers = args.filter(arg => !isNaN(arg)).map(Number);

// Calculate the sum and average if there are valid numbers
if (validNumbers.length > 0) {
    const sum = validNumbers.reduce((acc, num) => acc + num, 0);
    const average = sum / validNumbers.length;

    // Display the average
    console.log(`The average is: ${average}`);

    // Check if any parameters were ignored
    if (validNumbers.length !== args.length) {
        console.log("Some parameters were ignored due to being non-numeric.");
    }
} else {
    // No valid numbers provided
    console.error("No valid numbers were provided.");
}