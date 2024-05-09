// JavaScript code for handling order submission
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderList = document.getElementById('orderList');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get selected items and their quantities
        const selectedItems = [];
        const itemInputs = document.querySelectorAll('.menu-item input[type="number"]');
        itemInputs.forEach(input => {
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                const itemName = input.getAttribute('data-item-name');
                const itemPrice = parseFloat(input.getAttribute('data-item-price'));
                selectedItems.push({ name: itemName, price: itemPrice, quantity: quantity });
            }
        });

        // Calculate total price
        let totalPrice = 0;
        selectedItems.forEach(item => {
            totalPrice += item.price * item.quantity;
        });

        // Display order summary
        const orderSummary = selectedItems.map(item => `${item.name} (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('<br>');
        orderList.innerHTML = `<h2>Order Summary</h2>${orderSummary}<br><strong>Total: $${totalPrice.toFixed(2)}</strong>`;

        // Reset form
        orderForm.reset();
    });
});
