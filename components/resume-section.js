export default function ResumeSection({ title, number, children }) {
  return (
    <section className="mt-32">
      {/* section header */}
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-6">
        <h2 className="text-base text-secondary">{title}</h2>
        <span className="block h-0.5 w-full bg-gray-200"></span>
        <div className="flex items-center font-medium text-secondary">
          {number}
        </div>
      </div>
      <div className="mt-20">{children}</div>
    </section>
  )
}
