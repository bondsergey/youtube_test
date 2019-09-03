export function dateToSting(date) {
  return date.toISOString().replace(/T.+$/, '')
}

export function isValidDate(date) {
  return date && date.getTime && !isNaN(date.getTime());
}
