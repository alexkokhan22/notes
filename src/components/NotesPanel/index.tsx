//react
import React from "react";

//components
import {WeatherInfo} from "../WeatherInfo";
import {ReactComponent as CloseIcon} from './images/closeIcon.svg';

//styles
import style from "./styles/index.module.css";

//models
import {INotesPanel} from "./models";


export const NotesPanel = (props: INotesPanel) => {
    const {state, removeNote} = props;

    return (
        <div className={style.notesPanelContainer}>
            <div className={style.messageContainer}>
                <p>{state.message}</p>
            </div>
            <div className={style.infoContainer}>
                <div className={style.removeNoteContainer} onClick={removeNote(state.id)}>
                    <CloseIcon/>
                </div>
                <WeatherInfo/>
                <span className={style.text}>{state.date}</span>
                <span className={style.text}>{state.time}</span>
            </div>
        </div>
    );
}