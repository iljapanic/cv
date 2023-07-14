import { getYear } from '@/lib/utils'
import type { ResumeItemType } from '@/lib/types'

export default function ResumeItem({ item }: { item: ResumeItemType }) {
  const { name, startDate, endDate, location, items, type } = item

  const sameYear = getYear(startDate) === getYear(endDate)

  return (
    <article className="lg:grid lg:grid-cols-12 lg:gap-8">
      {/* LEFT column */}
      <div className="lg:col-span-4">
        <h3 className="flex items-center gap-2 text-secondary">
          {/* {name} */}
          {startDate && (
            <time>
              {sameYear
                ? getYear(startDate)
                : `${getYear(startDate)}–${getYear(endDate)}`}
            </time>
          )}
        </h3>
        {/* <hr className="my-2 w-6 border-gray-300" /> */}
        <div className="mt-1 text-xs leading-relaxed text-dim">
          {location && !type && <p>{location}</p>}
          {location && type && (
            <p>
              {location}, {type}
            </p>
          )}
        </div>
      </div>

      {/* RIGHT column */}
      <div className="lg:col-span-8">
        {items &&
          items.map((item, itemIndex) => (
            <div key={itemIndex} className="mt-6 first-of-type:mt-0">
              <div className="h3 flex items-center">
                {item.title} <span className="sr-only">at</span>{' '}
                <span className="ml-2 inline-block text-dim">
                  <span className="mr-2 inline-block">—</span>
                  {name}
                </span>
                {/* {items.length > 1 && (
                  <time className="ml-2 inline-block text-xs font-light text-dim">
                    {convertDate(item.startDate)} –{' '}
                    {convertDate(item.endDate)}
                  </time>
                )} */}
              </div>
              <p className="text-sm leading-snug text-secondary">
                {item.description}
              </p>
            </div>
          ))}
      </div>
    </article>
  )
}
