import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

interface File {
  id: number
  name: string
  size: string
  type: string
}

const FilesPage = () => {
  const [files, setFiles] = useState<File[]>([
    { id: 1, name: 'Project Proposal.pdf', size: '2.5 MB', type: 'PDF' },
    { id: 2, name: 'Meeting Notes.docx', size: '1.2 MB', type: 'Word' },
    { id: 3, name: 'Budget Spreadsheet.xlsx', size: '3.7 MB', type: 'Excel' },
  ])

  const [uploadProgress, setUploadProgress] = useState(0)

  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const deleteFile = (id: number) => {
    setFiles(files.filter(file => file.id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">File Management</h1>
      <Card className="mb-4">
        <div className="mb-4">
          <Button onClick={simulateUpload}>Upload File</Button>
        </div>
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Size</th>
              <th className="text-left">Type</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.id}>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.type}</td>
                <td>
                  <Button variant="secondary" onClick={() => deleteFile(file.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default FilesPage

