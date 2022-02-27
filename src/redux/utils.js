export const addItemToCart = (cartItems, item) => {
  const isItemInCartAlready = cartItems.some(
    (cartItem) => cartItem.id === item.id
  );
  // ITEM EXISTING
  if (isItemInCartAlready) {
    const items = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity < cartItem.available_copies
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return items;
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const itemAvailable = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (itemAvailable.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  const items = cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return items;
};
