document.addEventListener("DOMContentLoaded", () => {
    let orders = {};
    let currentOrderId = 1;

    const orderForm = document.getElementById("orderForm");
    const trackForm = document.getElementById("trackForm");
    const orderStatusDiv = document.getElementById("orderStatus");

    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const customerName = document.getElementById("customerName").value;
        const orderDetails = document.getElementById("orderDetails").value;
        
        const orderId = currentOrderId++;
        orders[orderId] = {
            customerName,
            orderDetails,
            status: "Order Placed"
        };

        alert(`Order placed successfully! Your Order ID is ${orderId}.`);
        orderForm.reset();
    });

    trackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const orderId = parseInt(document.getElementById("orderId").value);

        if (orders[orderId]) {
            const order = orders[orderId];
            orderStatusDiv.innerHTML = `
                <p>Customer Name: ${order.customerName}</p>
                <p>Order Details: ${order.orderDetails}</p>
                <p>Status: ${order.status}</p>
            `;
        } else {
            orderStatusDiv.innerHTML = `<p>Order not found. Please check your Order ID.</p>`;
        }
    });
});
