/* create typescript types */

interface ResumeSectionProps {
  title: string
  children: React.ReactNode
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mt-20 lg:mt-32 lg:grid lg:grid-cols-4">
      <div className="lg:col-span-1">
        <h2 className="text-base text-primary font-medium uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="mt-8 lg:mt-0 lg:col-span-3">{children}</div>
    </section>
  )
}
