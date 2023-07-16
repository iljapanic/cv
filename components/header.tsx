import Image from 'next/image'

import { getJsonData } from '@/lib/resume-data'

import profileImage from '@/public/profile-image.jpg'

export default function Header() {
  const bio = getJsonData('bio')

  return (
    <header className="lg:grid lg:grid-cols-4">
      <div></div>
      <div className="lg:col-span-3">
        {/* image + title */}
        <div className="lg:flex lg:items-center lg:gap-8">
          <Image
            src={profileImage}
            width={125}
            height={125}
            alt={`Profile picture of ${bio.name}`}
            className="rounded-sm"
          />
          <div>
            <h1 className="text-3xl">{bio.name}</h1>
            <p className="mt-2 text-xl text-secondary">{bio.title}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
