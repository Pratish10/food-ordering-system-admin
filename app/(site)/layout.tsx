import { BreadCrumbs } from '@/components/BreadCrumb'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar/SideBar'
import { Toaster } from '@/components/ui/sonner'

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <BreadCrumbs />
        <div className="p-5 flex-grow overflow-y-auto">
          {children}
        </div>
        <Toaster position="top-center" richColors />
      </div>
    </main>
  )
}
export default layout
