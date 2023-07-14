import { convertDate, getYear } from '@/lib/utils'
import Image from 'next/image'

export default function ResumeItem({ item }) {
  const { name, start_date, end_date, location, items, icon, type } = item

  const sameYear = getYear(start_date) === getYear(end_date)

  return (
    <article className="lg:grid lg:grid-cols-12 lg:gap-8">
      {/* LEFT column */}
      <div className="lg:col-span-4">
        <h3 className="flex items-center gap-2 text-secondary">
          {/* {icon && (
            <div>
              <Image
                src={`/icons/${icon}`}
                width={18}
                height={18}
                alt={name}
                // className="grayscale"
              />
            </div>
          )}{' '} */}
          {/* {name} */}
          {start_date && (
            <time>
              {sameYear
                ? getYear(start_date)
                : `${getYear(start_date)}–${getYear(end_date)}`}
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
                    {convertDate(item.start_date)} –{' '}
                    {convertDate(item.end_date)}
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
