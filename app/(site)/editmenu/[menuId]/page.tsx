import { getMenuById } from '@/Data/menu'
import { MenuForm } from '@/components/Menu/MenuForm'

interface EditMenuProps {
  params: {
    menuId: string
  }
}

const EditMenu = async ({
  params
}: EditMenuProps): Promise<JSX.Element | null> => {
  const singleMenu = await getMenuById(params?.menuId)
  if (singleMenu == null) {
    // TODO: stays on menu list page or redirect to 404 error page
    return null
  }
  return <MenuForm type='Edit' menu={singleMenu} />
}

export default EditMenu
