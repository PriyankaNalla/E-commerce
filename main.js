function gotoCart(){
    location.href="cart.html";
}
function gotoWishlist(){
    location.href="wishlist.html";
}
// main.js

// Function to add an item to the cart
function addToCart(title, price, imageSrc) {
    // Get the current cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push({ title, price, imageSrc });

    // Save the updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}
// Function to add item to wishlist
function addToWishlist(title, price, imageSrc) {
    // Get the current wishlist items from localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Add the new item to the wishlist
    wishlistItems.push({ title, price, imageSrc });

    // Save the updated wishlist items back to localStorage
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    // Redirect to wishlist.html
    window.location.href = './wishlist.html';
}

