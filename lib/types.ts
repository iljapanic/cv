export type ResumeItemType = {
  name: string
  location: string
  type: string
  items: Array<{
    title: string
    startDate: string
    endDate: string
    isActive?: boolean
    description: string
    links?: Array<ResumeItemLinkType>
  }>
}

export type ResumeItemLinkType = {
  headline?: string
  title: string
  description?: string
  url: string
}
