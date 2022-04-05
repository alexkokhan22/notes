export interface IWeather {
    icon?: string;
    temp?: number;
}

export interface IAction {
    type: string;
    payload: any;
}