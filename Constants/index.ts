import {
  LayoutDashboard,
  CookingPot,
  Dot,
  CircleUser,
  Table,
  BookA
} from 'lucide-react'

export const sideBarLinks = [
  { path: '/', label: 'Home', icon: LayoutDashboard, isDropdown: false },
  { path: '/tables', label: 'Tables', icon: Table, isDropdown: false },
  {
    label: 'Menu',
    icon: CookingPot,
    isDropdown: true,
    dropdown: [
      { path: '/addmenu', label: 'Add Menu', icon: Dot },
      { path: '/menus', label: 'Menus List', icon: Dot }
    ]
  },
  { path: '/orders', label: 'Orders', icon: BookA, isDropdown: false },
  { path: '/profile', label: 'Profile', icon: CircleUser, isDropdown: false }
]
