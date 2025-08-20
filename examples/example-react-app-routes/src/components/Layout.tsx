import { Outlet } from "react-router"
import Navigation from "./Navigation"

const Layout = () => {
    return (
        <div className="flex items-center flex-col h-screen">
            <Navigation />
            <div className="flex w-lg m-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout