//models
import {IAction, INotes} from "./models";

//actions
import {REMOVE_NOTES, SET_NOTES} from "./actions";


const initialState: INotes = {
    notes: [],
};

export const notesReducer = (state = initialState, action: IAction) => {
    const {type, payload} = action;
    switch (type) {
        case SET_NOTES: {
            return {
                ...state,
                notes: [...state.notes, payload],
            };
        }
        case REMOVE_NOTES: {
            return {
                ...state,
                notes: state.notes.filter(n => n.id !== payload),
            };
        }
        default:
            return state;
    }
};