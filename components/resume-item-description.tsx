'use client'

import { useState } from 'react'
import Markdown from 'markdown-to-jsx'

export default function ResumeItemDescription({
  description,
  maxLines = 2,
}: {
  description: string
  maxLines: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
  }

  const getClampClass = () => (isExpanded ? '' : 'line-clamp-' + maxLines)

  return (
    <div>
      <Markdown className={`${getClampClass()} leading-snug`}>
        {description}
      </Markdown>
      <button onClick={toggleExpand} className="text-blue-500">
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  )
}
