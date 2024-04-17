export function formatPrice(price) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "narrowSymbol",
  }).format(price);
}
