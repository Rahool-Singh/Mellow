// Get the modal
var modal = document.getElementById("buyNowModal");

// Get the button that opens the modal
var btn = document.getElementById("buyNowBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// Get the button that continues shopping
var continueBtn = document.getElementById("continueShoppingBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the Continue Shopping button, close the modal
continueBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//

document.addEventListener('DOMContentLoaded', (event) => {
    const confirmBtn = document.getElementById("buyNowBtn");
    const modal = document.getElementById("buyNowModal");
    const orderNumberElement = document.getElementById("orderNumber");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    // Generate random order number
    function generateOrderNumber() {
        return 'ORD' + Math.floor(Math.random() * 1000000);
    }

    // Show modal and generate order number when confirm button is clicked
    confirmBtn.onclick = function() {
        modal.style.display = "block";
        orderNumberElement.textContent = generateOrderNumber();
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
