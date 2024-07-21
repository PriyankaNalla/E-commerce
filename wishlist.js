// tion to load the wishlist items and display them on the wishlist page
function loadWishlistItems() {
    // Get the current wishlist items from localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    let wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

    // Clear the wishlist items container
    wishlistItemsContainer.innerHTML = '';

    if (wishlistItems.length === 0) {
        wishlistItemsContainer.innerHTML = '<p class="card-title-cart" id="empty">Your wishlist is empty!!!</p>';
    } else {
        wishlistItems.forEach((item, index) => {
            // Create a new div element for each wishlist item
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('wishlist-item');
            itemDiv.innerHTML = `
                <div>
                    <img src="${item.imageSrc}" alt="${item.title}" class="row-img">
                    <span>${item.title}</span>
                    <span>${item.price}</span>
                </div>
                <button onclick="removeFromWishlist(${index})" class="btn btn-danger btn-sm">
                    <i class="fa fa-trash"></i>
                </button>
            `;
            wishlistItemsContainer.appendChild(itemDiv);
        });
    }
}

// Function to remove an item from the wishlist
function removeFromWishlist(index) {
    // Get the current wishlist items from localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    // Remove the item at the specified index
    wishlistItems.splice(index, 1);

    // Save the updated wishlist items back to localStorage
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    // Reload the wishlist items
    loadWishlistItems();
}

// Load the wishlist items when the page is loaded
document.addEventListener('DOMContentLoaded', loadWishlistItems);