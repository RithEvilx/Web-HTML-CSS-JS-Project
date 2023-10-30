export const cart = [];

// Combine Cart Quantity (if it the same)
export function addToCart(productId) {
  
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If there is a match, increment quantity by one and return new array
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}