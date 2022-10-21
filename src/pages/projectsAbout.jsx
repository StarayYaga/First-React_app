import React from "react";
import MainWindow from '../UI/window/window'
import Description from "../UI/descrition/description";
import MainInfo from "../UI/mainInfo/mainInfo";
import Navigation from "../UI/navigation/navigation"


const ProjectIs = (props) => (
    <div className="Project">
        <MainWindow>
            <Navigation path="/">Назад</Navigation>
            <div className="windowMain">
                <MainInfo
                    path="INST-logo.png"
                    name="Monday"
                    whoAmI="Python, sqlite, PyTelegramBotApi"
                >
                    Первый проект на React
                </MainInfo>
                <Description link={false} text={true} name='Об проекте'>
                    Это личный телеграм бот с курсами валют, погодой и конвертором. Мой первый масштабный
                    проект где я применил все свои знания в работе с бд, запросами, парсингом, разработке телеграм
                    ботов на Python.
                </Description>
            </div>
            <div className="windowMain">
                <MainInfo
                    // path="INST-logo.png"
                    name="Мой сайт"
                    whoAmI="HTML, CSS JavaScript, React"
                >
                    Небольшой личный телеграм бот
                </MainInfo>
                <Description link={false} text={true} name='Об проекте'>
                Это мой первый проект на React. Так же это сайт является моей визиткой.
                </Description>
            </div>
            {/* <Navigation path="/about-me">Далее</Navigation> */}

        </MainWindow>
    </div>
)

export default ProjectIs