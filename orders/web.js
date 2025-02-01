// fake purchasing and messages
document.getElementById('buyNow').addEventListener('click', function() {
    let quantity = document.getElementById('quantity').value; //sets variable to html value
    let deliveryOption = document.getElementById('delivery').value;
    alert(`Thank you for your purchase of ${quantity} item(s) with ${deliveryOption} delivery! A representative will contact you shortly.`);//alerts with values of variables
});

document.getElementById('addToCart').addEventListener('click', function() {
    let quantity = document.getElementById('quantity').value;
    let deliveryOption = document.getElementById('delivery').value;
    alert(`${quantity} item(s) added to your cart with ${deliveryOption} delivery option.`); //same thing but cart
});
