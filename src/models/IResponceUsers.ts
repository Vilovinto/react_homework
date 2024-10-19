import {IUser} from "./IUser";

export interface IResponceUsers {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}