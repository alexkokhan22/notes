import {INote} from "../../store/notes/models";

export interface INotesPanel {
    state: INote;
    removeNote: (id: string) => () => void;
}