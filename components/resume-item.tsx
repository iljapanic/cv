import { getYear, convertDate, getDuration, cn } from '@/lib/utils'
import type { ResumeItemType } from '@/lib/types'

export default function ResumeItem({
  item,
  itemType,
}: {
  item: ResumeItemType
  itemType: 'work' | 'education'
}) {
  const { name, startDate, endDate, location, items, type } = item

  const sameYear = getYear(startDate) === getYear(endDate)

  return (
    <article className="relative">
      <div className="absolute -left-4 w-0.5 h-full bg-gray-100"></div>

      <div className="space-y-6">
        {items &&
          items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <div className="flex items-center justify-between">
                <h3>{item.title}</h3>

                {/* dates - work */}
                {itemType === 'work' && (
                  <time className="inline-block text-xs text-dim">
                    {convertDate(item.startDate)} - {convertDate(item.endDate)}{' '}
                    · {getDuration(item.startDate, item.endDate)}
                  </time>
                )}

                {/* dates - education */}
                {itemType === 'education' && (
                  <time className="inline-block text-xs text-dim">
                    {sameYear
                      ? getYear(startDate)
                      : `${getYear(startDate)} - ${getYear(endDate)}`}
                  </time>
                )}
              </div>
              <div className="text-secondary text-xs">
                {name} · {location} · {type}
              </div>

              <p className="mt-2 text-sm leading-snug text-secondary">
                {item.description}
              </p>
            </div>
          ))}
      </div>
    </article>
  )
}
