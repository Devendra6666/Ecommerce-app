const fs = require('fs');

// Load JSON data (an array of test cases)
const data = require("./test.json"); // Assuming the file contains an array of test cases

// Function to parse the JSON data and extract points
function parseInput(data) {
    const n = data.keys.n; // Total number of points
    const k = data.keys.k; // Number of points needed for interpolation

    const points = [];
    // Iterate over the data object to extract points
    for (const [xStr, point] of Object.entries(data)) {
        if (xStr === 'keys') continue; // Skip the 'keys' entry
        const x = parseInt(xStr); // Convert string x to integer
        const base = point.base;
        const value = parseInt(point.value, base); // Convert value using the specified base
        points.push({ x, y: value }); // Add point to the points array
    }

    return { n, k, points }; // Return n, k, and points
}

// Function to calculate the constant term using Lagrange Interpolation
function findConstantTerm(points, k) {
    let constantTerm = 0n; // Use BigInt for better precision with large numbers

    // Loop through each point to compute the Lagrange basis polynomials
    for (let j = 0; j < k; j++) {
        const { x: xj, y: yj } = points[j]; // Get x and y values of the j-th point
        let term = BigInt(yj); // Start with yj as BigInt

        // Calculate the Lagrange basis polynomial for the j-th point
        for (let i = 0; i < k; i++) {
            if (i !== j) {
                const xi = points[i].x; // Get x value of the i-th point
                term *= BigInt(-xi); // Multiply by -xi (as part of the formula)
                term /= BigInt(xj - xi); // Divide by (xj - xi)
            }
        }

        // Add the term to the constant term
        constantTerm += term;
    }

    // Return the constant term as a rounded integer (if needed)
    return Number(constantTerm); // Convert BigInt to a regular Number if needed
}

// Main function to handle multiple test cases
function main() {
    // Loop through each test case
    data.forEach((testCase, index) => {
        console.log(`Processing Test Case ${index + 1}:`);
        
        const { n, k, points } = parseInput(testCase); // Parse JSON input for this test case

        if (n < k) {
            console.error("Not enough points to determine polynomial.");
            return;
        }

        // Find the constant term (secret) using Lagrange Interpolation
        const constantTerm = findConstantTerm(points, k);

        // Output the result for the current test case
        console.log("The constant term (secret) is:", constantTerm);
        console.log('------------------------------------------');
    });
}

// Run the main function
main();
