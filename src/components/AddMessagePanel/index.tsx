//react
import React, {ChangeEvent, useState} from "react";

//redux
import {setNotes} from "../../store/notes/actions";

//styles
import {useDispatch} from "react-redux";
import style from './styles/index.module.css';

//utils
import {classes} from "../../utils/classes";
import {handleEnterDown} from "../../utils/keyDownHandler";
import {v1} from "uuid";


export const AddMessagePanel = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const errorHandler = (value: string) => {
        value.length > 300 ? setError(true) : setError(false);
    }

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        errorHandler(inputValue);
    }

    const addMessage = (event: React.KeyboardEvent<HTMLDivElement>) => {
        handleEnterDown(event, () => {
            !error && dispatch(setNotes({
                id: v1(),
                message: inputValue,
                time: currentTime,
                date: currentDate,
            }));
            setInputValue('');
        });
    }


    return(
        <div className={style.addMessagePanelContainer} onKeyDown={addMessage}>
            <span>Add note...</span>
            <input className={classes(style.input, error && style.error)} value={inputValue} onChange={changeInputValue}/>
            {error && <span className={style.errorMessage}>allowed number of characters 300</span>}
        </div>
    );
}