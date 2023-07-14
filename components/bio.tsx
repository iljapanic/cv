import Image from 'next/image'

import { getJsonData } from '@/lib/resume-data'
import profileImage from '@/public/profile-image.jpg'

export default function Bio() {
  const bio = getJsonData('bio')

  return (
    <article className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
      <div className="lg:col-span-3">
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt={`Profile picture of ${bio.name}`}
        />
      </div>

      <div className="lg:col-span-9">
        <h1>{bio.name}</h1>
        <p className="text-secondary">{bio.title}</p>
        <p className="mt-2">{bio.bio}</p>
      </div>
    </article>
  )
}
