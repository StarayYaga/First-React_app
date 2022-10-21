import React from "react";
import './window.css'

const MainWindow = (props)=>{
    return (
        <div className="window">
            {props.children}
        </div>
    )
}
export default MainWindow