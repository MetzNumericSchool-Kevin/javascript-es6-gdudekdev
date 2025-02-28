const cart = [];

function addToCart(productInfo, quantity = 1) {
  const cartLine = findItemInCart(productInfo.product);

  if (cartLine) {
    cartLine.quantity += quantity;
    return;
  }

  cart.push({ ...productInfo, quantity });
}

function findItemInCart(productName) {
  return cart.find((cartLine) => cartLine.product === productName);
}

function updateCartQuantity(productName, quantity) {
  const cartLine = findItemInCart(productName);

  if (!cartLine) {
    addToCart(productName, quantity);
    return;
  }

  cartLine.quantity = quantity;
}

function computeTotal() {
  return cart.reduce(
    (total, cartLine) => total + cartLine.quantity * cartLine.price,
    0
  );
}

function displayAmount(amount) {
  return Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export {
  addToCart,
  updateCartQuantity,
  computeTotal,
  displayAmount,
};
