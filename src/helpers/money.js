export function numberToCurrencyString(number) {
  console.log(typeof number)
  if (typeof number !== "number" || number < 0) return "0,00"
  return "€" + number.toFixed(2).replace(".", ",") // TODO: take into account international currency
}
