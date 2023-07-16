type AttachmentType = 'link' | 'image' | 'video'

export default function Attachment({
  type,
  data,
}: {
  type: AttachmentType
  data: any
}) {
  switch (type) {
    case 'link':
      return (
        <AttachmentWrapper>
          <a href={data.url}>
            <div className="text-2xs">{data.headline}</div>
            <h4 className="text-xs">{data.title}</h4>
          </a>
        </AttachmentWrapper>
      )
    case 'image':
      return (
        <AttachmentWrapper>
          <img src="" alt="" />
        </AttachmentWrapper>
      )
    case 'video':
      return (
        <AttachmentWrapper>
          <video src="" controls></video>
        </AttachmentWrapper>
      )
  }
}

function AttachmentWrapper({ children }: { children: React.ReactNode }) {
  return <div className="border rounded relative">{children}</div>
}
