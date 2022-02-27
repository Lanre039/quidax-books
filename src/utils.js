export const formatCurrency = (currency, num) =>
  new Intl.NumberFormat(`en-US`, {
    currency,
    style: "currency",
  }).format(num);

export const calcTotalPrice = (items) => {
  const totalPrice = items.reduce(
    (total, { price, quantity }) => total + quantity * price,
    0
  );
  return totalPrice.toFixed(2);
};
