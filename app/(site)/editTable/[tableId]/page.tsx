import { getTableById } from '@/Data/table'

interface EditTableProps {
  params: {
    tableId: string
  }
}

const EditTable = async ({ params }: EditTableProps): Promise<JSX.Element> => {
  const table = await getTableById(params.tableId)
  return <div>{JSON.stringify(table)}</div>
}

export default EditTable
