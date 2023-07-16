export type ResumeItemType = {
  name: string
  location: string
  startDate: string
  endDate: string
  type: string
  items: Array<{
    title: string
    startDate: string
    endDate: string
    description: string
  }>
}
