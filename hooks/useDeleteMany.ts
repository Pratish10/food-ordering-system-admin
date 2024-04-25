import { toast } from 'sonner'

export const useDeleteMany = (
  dataToDelete: string[],
  funcToDelete?: (
    dataToDelete: string[]
  ) => Promise<{ error?: string, success?: string }>
): Array<() => Promise<void>> => {
  const handleDelete = async (): Promise<void> => {
    if (funcToDelete != null) {
      try {
        const data = await funcToDelete(dataToDelete)
        if (data?.error != null) {
          toast.error(data?.error)
        }
        if (data?.success != null) {
          toast.success(data?.success)
        }
      } catch (err) {
        toast.error('Something went wrong')
      }
    } else {
      toast.error('Internal Server Error')
    }
  }

  return [handleDelete]
}
