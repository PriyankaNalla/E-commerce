// Function to load the cart items and display them on the cart page
function loadCartItems() {
    // Get the current cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartItemsContainer = document.getElementById('cartItemsContainer');
    let totalElement = document.getElementById('total');
    let total = 0;

    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="card-title-cart" id="empty">Your cart is empty!!!</p>';
    } else {
        cartItems.forEach((item, index) => {
            // Create a new div element for each cart item
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <div id="empty">
                    <img src="${item.imageSrc}" alt="${item.title}" class="row-img">
                    <span>${item.title}</span>
                    <span>${item.price}</span>
                    <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);

            // Update the total
            total += item.price;
        });

        // Update the total element
        totalElement.innerText = `Total: ${total}`;
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Get the current cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Save the updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Reload the cart items
    loadCartItems();
}

// Load the cart items when the page is loaded
document.addEventListener('DOMContentLoaded', loadCartItems);
