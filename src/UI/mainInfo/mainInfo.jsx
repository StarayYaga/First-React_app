import React from "react";
import './mainInfo.css'
// import '../../data/photo.jpg'

const MainInfo = (props)=>{
    return (
        <div className="mainInfo">
            <img src={require(`../../data/${props.path === undefined
            ?`user.png`
            :props.path}`)}/>
            <div className="textAbout">
                <h3 className="name">{props.name}</h3>
                <h3 className="prof">{props.whoAmI}</h3>
                <h3 className="littleAbout">{props.children}</h3>
            </div>
        </div>
    )
}

export default MainInfo