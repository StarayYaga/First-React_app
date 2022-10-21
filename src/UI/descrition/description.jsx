import React from "react";
import './description.css'
import Link from "../links/link";

const Description = (props)=>{
    return (
        <div className="description">
            
            {props.link === true 
            ? 
            <div>
                <h3>Ссылки на мои cоц. сети</h3>
                <div className="links">
                    <Link icon='telegram' href='https://t.me/TheBabushkaYaga'></Link>
                    <Link icon='github' href='https://github.com/mratom21'></Link>
                    <Link icon='vk' href='https://vk.com/v.zharikov0'></Link>
                    <Link icon='youtube' href='https://www.youtube.com/channel/UCgmT-lxQX_ouJsrWsgPHHlg'></Link>
                    <Link icon='tg-group' href='https://t.me/XXXoBy'></Link>
                </div>
            </div>
            : <div></div>}

            {props.text === true
            ?
            <div>
                <h3>{props.name}</h3>
                <div className="descriptionText">
                    <p className="Text">{props.children}</p>
                </div>
            </div>
            : <div></div>
            }
            
        </div>
    )
}

export default Description