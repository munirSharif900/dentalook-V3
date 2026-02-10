import { Outlet } from "react-router-dom"
import { useState } from "react"
import Header from "../components/common/header/header"
import Sidebar from "../components/common/sidebar/sidebar"



const DashboardLayout = () => {
 const [mobileOpen, setMobileOpen] = useState(false)
 const [collapsed, setCollapsed] = useState(false)
  return (
    
    <div className="h-screen flex flex-col">

      <Header onMobileToggle={() => setMobileOpen(true)}/>
   
      <div className="flex flex-1 overflow-hidden">
         <Sidebar
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
        
      </div>
    </div>
  )
}

export default DashboardLayout