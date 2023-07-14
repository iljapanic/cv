import fs from 'fs'
import path from 'path'

export function getJsonData(dataType) {
  const filePath = path.join(process.cwd(), 'data', resolvePath(dataType))
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  return data
}

function resolvePath(dataType) {
  switch (dataType) {
    case 'bio':
      return '../data/bio.json'
    case 'contact':
      return '../data/contact.json'
    case 'education':
      return '../data/education.json'
    case 'work':
      return '../data/work.json'
    default:
      break
  }
}
