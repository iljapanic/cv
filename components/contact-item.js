export default function ContactItem({ contact }) {
  return (
    <div>
      <h3 className="label">{contact.type}</h3>
      <a href={contact.value} target="_blank" rel="norefferer">
        {contact.label} ↗
      </a>
    </div>
  )
}
