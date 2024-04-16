import BreadCrumbs from '@/components/BreadCrumb'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar/SideBar'
import { Toaster } from '@/components/ui/sonner'

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="flex">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className="p-5">
          <BreadCrumbs />
          {children}
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </main>
  )
}
export default layout
