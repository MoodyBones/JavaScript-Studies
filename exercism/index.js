export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  if (numDays < 22) return dayRate(ratePerHour) * numDays

  const numberOfMonths = Math.floor(numDays / 22)
  const nonDiscountedDays = numDays % 22
  const monthlyRate =
    dayRate(ratePerHour) * 22 - dayRate(ratePerHour) * 22 * discount
  return Math.ceil(
    monthlyRate * numberOfMonths + dayRate(ratePerHour) * nonDiscountedDays
  )
}

console.log(priceWithMonthlyDiscount(89, 230, 0.4))
