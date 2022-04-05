//models
import {INote} from "./models";

export const SET_NOTES = "SET_NOTES";
export const REMOVE_NOTES = "REMOVE_NOTES";

export const setNotes = (payload: INote) => {
    return {
        type: SET_NOTES,
        payload,
    };
};

export const removeNotes = (payload: string) => {
    return {
        type: REMOVE_NOTES,
        payload,
    }
}