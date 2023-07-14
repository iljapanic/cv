export type ResumeItemType = {
  name: string
  location: string
  startDate: Date
  endDate: Date
  type: string
  items: Array<{
    title: string
    startDate: Date
    endDate: Date
    description: string
  }>
}
