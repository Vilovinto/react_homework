import {IPost} from "./IPost";

export interface IResponcePosts {
    users: IPost[];
    total: number;
    skip: number;
    limit: number;
}