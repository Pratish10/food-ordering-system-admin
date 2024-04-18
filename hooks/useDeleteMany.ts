import { useState } from 'react'

export const useDeleteMany = (
  dataToDelete: string[],
  funcToDelete?: (
    dataToDelete: string[]
  ) => Promise<{ error?: string, success?: string }>
): [string | null, string | null, () => Promise<void>] => {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleDelete = async (): Promise<void> => {
    if (funcToDelete != null) {
      try {
        const data = await funcToDelete(dataToDelete)
        if (data?.error != null) {
          setError(data.error)
        }
        if (data?.success != null) {
          setSuccess(data.success)
        }
      } catch (err) {
        setError('Something went wrong')
      }
    } else {
      setError('Internal Server Error')
    }
  }

  return [error, success, handleDelete]
}
