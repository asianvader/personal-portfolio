import React from "react"
import Sidebar from "./sidebar"
import layoutStyles from "./layout.module.css"

function Layout({children}) {
    return (
        <div className={layoutStyles.container}>
            <Sidebar />
        
            {children}
        </div>
    )
}

export default Layout