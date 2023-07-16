import { format } from 'date-fns'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDate(inputDate: string) {
  const outputDate = format(new Date(inputDate), 'MMM yyyy')
  return outputDate
}

export function getDuration(startDate: string, endDate: string) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const duration = end - start

  const years = Math.floor(duration / (365 * 24 * 60 * 60 * 1000))
  const months = Math.floor(
    (duration % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000),
  )

  let durationString = ''
  if (years > 0) {
    durationString += years + (years === 1 ? ' yr ' : ' yrs ')
  }
  if (months > 0) {
    durationString += months + (months === 1 ? ' mo' : ' mos')
  }

  return durationString.trim()
}

export function getYear(inputDate: string) {
  const outputDate = format(new Date(inputDate), 'yyyy')
  return outputDate
}
