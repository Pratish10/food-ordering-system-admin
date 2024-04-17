import { TableForm } from '@/components/Table/TableForm'
import { getTableById } from '@/Data/table'

interface EditTableProps {
  params: {
    tableId: string
  }
}

const EditTable = async ({ params }: EditTableProps): Promise<JSX.Element | null> => {
  const table = await getTableById(params?.tableId)
  if (table == null) {
    // TODO: stays on menu list page or redirect to 404 error page
    return null
  }
  return <TableForm table={table} />
}

export default EditTable
