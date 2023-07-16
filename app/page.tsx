import { v4 } from 'uuid'

import { getJsonData } from '@/lib/resume-data'
import type { ResumeItemType } from '@/lib/types'

import Header from '@/components/header'
import ResumeSection from '@/components/resume-section'
import ResumeItem from '@/components/resume-item'
import ContactItem from '@/components/contact-item'

export default async function Home() {
  const bio = getJsonData('bio')
  const work = await getJsonData('work')
  const education = await getJsonData('education')
  const contact = await getJsonData('contact')
  const projects = await getJsonData('projects')

  return (
    <div className="mx-auto max-w-3xl py-20">
      <Header />

      {/* SUMMARY */}
      <ResumeSection title="Summary">
        <div className="text-lg">
          <div
            dangerouslySetInnerHTML={{ __html: bio.bio }}
            className="space-y-4"
          ></div>
        </div>
      </ResumeSection>

      {/* WORK */}
      <ResumeSection title="Experience">
        <div className="grid gap-16">
          {work.map((item: ResumeItemType) => {
            const key = v4()
            return <ResumeItem key={key} item={item} itemType="work" />
          })}
        </div>
      </ResumeSection>

      {/* EDUCATION */}
      <ResumeSection title="Education">
        <div className="grid gap-16">
          {education.map((item: ResumeItemType) => {
            const key = v4()
            return <ResumeItem key={key} item={item} itemType="education" />
          })}
        </div>
      </ResumeSection>

      {/* PROJECTS */}
      {/* <ResumeSection title="Projects">
        <div className="grid gap-16">
          {projects.map((item: ResumeItemType) => {
            const key = v4()
            return <div key={key}> {item.name} </div>
          })}
        </div>
      </ResumeSection> */}

      {/* CONTACT */}
      <ResumeSection title="Contact">
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
