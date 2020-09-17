export function dateToSlashedString(date) {
  return (
    date.getUTCDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  )
}

export function dateDiffInDays(dateA, dateB) {
  const diff = Math.abs(dateA.getTime() - dateB.getTime())
  return Math.ceil(diff / (1000 * 3600 * 24))
}
