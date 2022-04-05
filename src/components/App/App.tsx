//react
import React from 'react';

//styles
import style from "./styles/index.module.css";

//pages
import {Notes} from "../../pages/Notes";

export const App = () => {
  return (
    <div className={style.appContainer}>
        <Notes/>
    </div>
  );
}
