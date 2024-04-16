import { getMenuById } from '@/Data/menu'
import { MenuForm } from '@/components/Menu/MenuForm'

interface EditMenuProps {
  params: {
    menuId: string
  }
}

const EditMenu = async ({
  params
}: EditMenuProps): Promise<JSX.Element> => {
  const singleMenu = await getMenuById(params?.menuId)
  return <MenuForm type='Edit' menu={singleMenu} />
}

export default EditMenu
