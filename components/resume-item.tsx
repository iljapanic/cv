import { useState } from 'react'

import {
  getYear,
  convertDate,
  getDuration,
  getTodayString,
  cn,
} from '@/lib/utils'
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
    <article className="relative">
      <div className="absolute -left-4 w-0.5 h-full bg-gray-100"></div>

      <div className="space-y-6">
        {items &&
          items.map((item, itemIndex) => {
            const isActive = item.isActive || false

            return (
              <div key={itemIndex}>
                {/* header */}
                <div className="flex items-center justify-between">
                  <h3>{item.title}</h3>

                  {/* dates - work */}
                  {itemType === 'work' && !isActive && (
                    <time className="inline-block text-xs text-dim">
                      {convertDate(item.startDate)} -{' '}
                      {convertDate(item.endDate)} ·{' '}
                      {getDuration(item.startDate, item.endDate)}
                    </time>
                  )}

                  {itemType === 'work' && isActive && (
                    <time className="inline-block text-xs text-dim">
                      {convertDate(item.startDate)} - {' now '}·{' '}
                      {getDuration(item.startDate, getTodayString())}
                    </time>
                  )}

                  {/* dates - education */}
                  {itemType === 'education' && !isActive && (
                    <time className="inline-block text-xs text-dim">
                      {getYear(item.startDate) === getYear(item.endDate)
                        ? getYear(item.startDate)
                        : `${getYear(item.startDate)} - ${getYear(
                            item.endDate,
                          )}`}
                    </time>
                  )}
                </div>
                <div className="text-xs text-dim">
                  <span className="text-secondary font-normal">{name}</span> ·{' '}
                  {location} {type && <span>· {type}</span>}
                </div>

                {/* description */}
                <p className="mt-2 text-sm leading-snug text-secondary">
                  {item.description}
                </p>
              </div>
            )
          })}
      </div>
    </article>
  )
}
