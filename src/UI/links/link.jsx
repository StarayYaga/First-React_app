import React from "react";
import './link.css'

const Link = (props)=>{
    return (
        <div className="Link">
            <a href={props.href}>
                <img src={require(`../../data/${props.icon}.png`)} alt="" />
                {props.children}
            </a>
        </div>
    )
}

export default Link