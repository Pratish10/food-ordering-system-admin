const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-r from-orange-400 via-orange-200 to-orange-400">
      {children}
    </div>
  )
}
export default layout
