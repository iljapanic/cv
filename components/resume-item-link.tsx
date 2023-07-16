import type { ResumeItemLinkType } from '@/lib/types'

export default function ResumeItemLink({ link }: { link: ResumeItemLinkType }) {
  return (
    <a href={link.url} className="block space-y-0.5">
      <div className="text-2xs">{link.headline}</div>
      <h4 className="text-xs">{link.title}</h4>
      <p className="text-xs">{link.description}</p>
    </a>
  )
}
