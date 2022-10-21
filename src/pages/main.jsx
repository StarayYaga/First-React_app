import React from "react";
import MainWindow from '../UI/window/window'
import Description from "../UI/descrition/description";
import MainInfo from "../UI/mainInfo/mainInfo";
import Navigation from "../UI/navigation/navigation"


const Main = (props) => {
    return (
        <MainWindow>
            <div className="windowMain">
                <MainInfo 
                    path="photo.jpg"
                    name="Вячеслав Жариков"
                    whoAmI='Junior FullStack developer'
                >
                    Начинающий веб разработчик
                </MainInfo>
                <Description link={true} text={true} name="Немного обо мне">
                    Привет. Я Вячеслав или просто Слава. Летом 2021 года я решил стать программистом. 
                    И вот теперь я здесь. Как можно понять, я не дизайнер.
                </Description>
            </div>
            <Navigation path="/project">Далее</Navigation>
        </MainWindow>
    )
}

export default Main