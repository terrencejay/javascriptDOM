// Task 1: Product Array
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Function to display products
function displayProducts() {
    // Get the container where products will be displayed
    const productContainer = document.getElementById('product-container');
    
    // Clear any existing content
    productContainer.innerHTML = '';
    
    // Loop through each product and create elements
    products.forEach(product => {
        // Create product card
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Create and populate product elements
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
        `;
        
        // Add the product card to the container
        productContainer.appendChild(productCard);
    });
}

// Task 3: Event listener for page load
document.addEventListener('DOMContentLoaded', displayProducts);
