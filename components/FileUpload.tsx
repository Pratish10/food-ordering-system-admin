'use Client'

import { UploadDropzone } from '@/lib/uploadThing'
import '@uploadthing/react/styles.css'
import { X } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

interface FileUploadProps {
  onChange: (url?: string) => void
  endPoint: 'menuImage'
  value: string | undefined
}

export const FileUpload = ({
  endPoint,
  onChange,
  value
}: FileUploadProps): JSX.Element => {
  if (value !== '' && value !== undefined) {
    return (
      <div className="relative h-96 w-96">
        <Image
          src={value}
          alt={value}
          fill={true}
          className="object-cover h-full w-full"
        />
        <button
          onClick={() => {
            onChange('')
          }}
          className="bg-slate-400 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => toast.error(error?.message)}
    />
  )
}
