import React from 'react';
import classes from "./sidebar.module.css";
import PProgOption from "./PProgOptions/PProgOption";

const Sidebar = () => {
    return (
            <div className={classes.pprogSidebar}>
                <PProgOption src='icon' name='Список приборов'/>
                <PProgOption src='icon' name='Список разделов'/>
                <PProgOption src='icon' name='Группы разделов'/>
                <PProgOption src='icon' name='Реле'/>
                <PProgOption src='icon' name='Уровни доступа'/>
                <PProgOption src='icon' name='Пароли'/>
                <PProgOption src='icon' name='Привязка управления'/>
                <PProgOption src='icon' name='Трансляция событий'/>
                <PProgOption src='icon' name='Входные шлейфы'/>
                <PProgOption src='icon' name='Переименование событий'/>
                <PProgOption src='icon' name='Сценарии управления'/>


            </div>
    );
};

export default Sidebar;