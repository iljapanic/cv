import { v4 } from 'uuid'

import { getJsonData } from '@/lib/resume-data'
import type { ResumeItemType } from '@/lib/types'

import Bio from '@/components/bio'
import ResumeSection from '@/components/resume-section'
import ResumeItem from '@/components/resume-item'
import ContactItem from '@/components/contact-item'

export default async function Home() {
  const work = await getJsonData('work')
  const education = await getJsonData('education')
  const contact = await getJsonData('contact')

  return (
    <div className="mx-auto max-w-3xl py-20">
      {/* BIO */}
      <Bio />
      {/* {bio.name} */}

      {/* WORK */}
      <ResumeSection title="Experience" number="01">
        <div className="grid gap-16">
          {work.map((item: ResumeItemType) => {
            const key = v4()
            return <ResumeItem key={key} item={item} />
          })}
        </div>
      </ResumeSection>

      {/* EDUCATION */}
      <ResumeSection title="Education" number="02">
        <div className="grid gap-16">
          {education.map((item: ResumeItemType) => {
            const key = v4()
            return <ResumeItem key={key} item={item} />
          })}
        </div>
      </ResumeSection>

      {/* CONTACT */}
      <ResumeSection title="Contact" number="03">
        <div className="grid grid-cols-2 gap-8">
          {contact.map((item: ResumeItemType) => {
            const key = v4()
            return <ContactItem key={key} contact={item} />
          })}
        </div>
      </ResumeSection>
    </div>
  )
}
