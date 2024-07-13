// Product list
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

// Cart
let cart = [];

// Load products on page load
window.onload = () => {
    displayProducts();
    updateCart();
};

// Display products
function displayProducts() {
    const productsDiv = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    updateCart();
}

// Update cart display
function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <h2>${item.product.name}</h2>
                <p>Price: $${item.product.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${item.product.price * item.quantity}</p>
                <button onclick="removeFromCart(${item.product.id})">Remove</button>
            `;
            cartDiv.appendChild(cartItemDiv);
        });
    }
    updateTotal();
}

// Remove product from cart
function removeFromCart(productId) {
    const cartItemIndex = cart.findIndex(item => item.product.id === productId);

    if (cartItemIndex > -1) {
        if (cart[cartItemIndex].quantity > 1) {
            cart[cartItemIndex].quantity--;
        } else {
            cart.splice(cartItemIndex, 1);
        }
    }
    updateCart();
}

// Update total amount
function updateTotal() {
    const cartTotalDiv = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    cartTotalDiv.innerText = `Total: $${total}`;
}

// Redirect to login page
function proceedToCheckout() {
    window.location.href = 'login.html';
}
