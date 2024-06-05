import { Outlet } from "react-router-dom"
import Sidebar from "../../components/ui/sidebar/sidebar"
import Header from "../../components/ui/header/header"
import './main.css'
const Main = () => {
  return (
    <div className="main-layout">
        <Sidebar className="saidbar"/>
        <div className="main-left">
            <Header/>
            <main className="outletmain" >
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Main