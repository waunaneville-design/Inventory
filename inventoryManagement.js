// Write your code here



// Create an array to store product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
    console.log("First product:", products[0]);
}

// Function to add a new product
function addProduct(productName) {
    products.push(productName);
    console.log(`Product "${productName}" added successfully!`);
    console.log("Updated products:", products);
}

// Function to update a product name
function updateProductName(position, newName) {
    if (position >= 0 && position < products.length) {
        console.log(`Updating product at position ${position} from "${products[position]}" to "${newName}"`);
        products[position] = newName;
        console.log("Updated products:", products);
    } else {
        console.log("Invalid position. Please provide a valid index.");
    }
}

// Function to remove the last product
function removeLastProduct() {
    const removed = products.pop();
    console.log(`Removed product: "${removed}"`);
    console.log("Updated products:", products);
}

// Export the necessary parts for testing
module.exports = {
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct,
    products
};