export interface INote {
    id: string;
    message: string;
    date: string;
    time: string;
}

export interface INotes {
    notes: INote[];
}

export interface IAction {
    type: string;
    payload: any;
}