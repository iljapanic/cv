import { format } from 'date-fns'

export function convertDate(inputDate) {
  const outputDate = format(new Date(inputDate), 'MMM yyyy')
  return outputDate
}

export function getYear(inputDate) {
  const outputDate = format(new Date(inputDate), 'yyyy')
  return outputDate
}
