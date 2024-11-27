
import SidebarStudio from "@/components/shared/Navigation/Sidebar/SidebarStudio";


const Customers = () => {
  return (
    <div className="flex flex-col w-full h-full">
        <SidebarStudio />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-8">
            Customers Page
        </div>
    </div>
  )
}

export default Customers
