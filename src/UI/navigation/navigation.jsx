import React from "react";
import './navigation.css'

const Navigation = (props)=> {
    return (
        <div className="navigation">
            <a href={props.path}>{props.children}</a>
        </div>
    )
}

export default Navigation