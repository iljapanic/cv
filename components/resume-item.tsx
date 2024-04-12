import Markdown from 'markdown-to-jsx'

import { getYear, convertDate, getDuration, getTodayString } from '@/lib/utils'
import type { ResumeItemType } from '@/lib/types'

export default function ResumeItem({
  item,
  itemType,
}: {
  item: ResumeItemType
  itemType: 'work' | 'education'
}) {
  const { name, location, items, type } = item

  return (
    <section className="relative">
      {/* <div className="absolute -left-4 w-0.5 h-full bg-gray-100"></div> */}

      <div className="space-y-6">
        {items &&
          items.map((item, itemIndex) => {
            const isActive = item.isActive || false

            return (
              <article key={itemIndex}>
                {/* header */}
                <header>
                  <Duration
                    itemType={itemType}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    isActive={isActive}
                  />

                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="font-medium">
                      {item.title}{' '}
                      {/* <span className="text-secondary text-sm">· {name}</span> */}
                    </h3>
                    <div className="text-xs mb-1 text-dim tracking-tight">
                      <span className="text-secondary font-medium">{name}</span>{' '}
                      ·{' '}
                      <span className="">
                        {location} {type && <span>({type})</span>}
                      </span>
                    </div>
                  </div>
                </header>

                {/* body */}
                <div className="mt-2">
                  <p className="text-sm leading-snug text-secondary">
                    <Markdown>{item.description}</Markdown>
                  </p>
                </div>

                {/* links */}
                {/* {item.links && item.links.length > 0 && (
                  <section className="mt-4 space-y-3">
                    {item.links.map((link) => {
                      const id = v4()
                      return <ResumeItemLink key={id} link={link} />
                    })}
                  </section>
                )} */}

                {/* attachments */}
                {/* {item.attachments && item.attachments.length > 0 && (
                  <section className="mt-4 grid gap-4 grid-cols-3 lg:grid-cols-4">
                    {item.attachments.map((attachment) => {
                      const id = v4()
                      return (
                        <Attachment
                          key={id}
                          type={attachment.type}
                          data={attachment}
                        />
                      )
                    })}
                  </section>
                )} */}
              </article>
            )
          })}
      </div>
    </section>
  )
}

function Duration({
  itemType,
  startDate,
  endDate,
  isActive = false,
}: {
  itemType: string
  startDate: string
  endDate: string
  isActive: boolean
}) {
  return (
    <div className="text-xs text-secondary font-normal tracking-tighter">
      {/* dates - work */}
      {itemType === 'work' && !isActive && (
        <time className="inline-block">
          {convertDate(startDate)} - {convertDate(endDate)}
        </time>
      )}
      {itemType === 'work' && isActive && (
        <time className="inline-block">
          {convertDate(startDate)} - {' now '}
        </time>
      )}
      {/* dates - education */}
      {itemType === 'education' && !isActive && (
        <time className="inline-block">
          {getYear(startDate) === getYear(endDate)
            ? getYear(startDate)
            : `${getYear(startDate)} - ${getYear(endDate)}`}
        </time>
      )}
    </div>
  )
}
