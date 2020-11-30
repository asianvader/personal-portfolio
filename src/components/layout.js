import React from "react"
import Sidebar from "./sidebar"
import layoutStyles from "./layout.module.css"

function Layout({children}) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout