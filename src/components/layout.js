import React from "react"
import Sidebar from "./sidebar"
import layoutStyles from "./layout.module.css"
import MainContent from "./main-content"

function Layout({children}) {
    return (
        <div className={layoutStyles.container}>
            <Sidebar />
        
            {children}
        </div>
    )
}

export default Layout