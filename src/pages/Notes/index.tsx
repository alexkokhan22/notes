//react
import React, {useEffect} from "react";

//redux
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store";
import {getWeather} from "../../store/weather/actions";
import {removeNotes} from "../../store/notes/actions";


//components
import {AddMessagePanel} from "../../components/AddMessagePanel";
import {NotesPanel} from "../../components/NotesPanel";

//styles
import style from "./styles/index.module.css";


export const Notes = () => {
    const dispatch = useDispatch();
    const notesCollection = useSelector((state: RootStateType) => state.notes);

    useEffect(() => {
        dispatch(getWeather());
    }, [])

    const removeNote = (id: string) => () => {
        dispatch(removeNotes(id))
    }

    return (
        <div className={style.notesContainer}>
            <div className={style.notesPanel}>
                {notesCollection.notes.map(note => {
                    return <NotesPanel key={note.id} state={note} removeNote={removeNote}/>
                })}
            </div>
            <div className={style.addMessagePanel}>
                <AddMessagePanel/>
            </div>
        </div>
    );
}