let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cartItems.push(productName);
  cartTotal += price;
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsElement.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemsElement.appendChild(li);
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);
}

function showCart() {
  const cart = document.getElementById("cart");
  cart.style.display = "block";
}

function checkout() {
  alert("Thank you for your purchase!");
  cartItems = [];
  cartTotal = 0;
  updateCart();
  document.getElementById("cart").style.display = "none";
}
