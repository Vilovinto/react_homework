import axios from "axios";
import {IUser} from  "../models/IUser";
import {IResponceUsers} from "../models/IResponceUsers";
import {IResponcePosts} from "../models/IResponcePosts";
import {IPost} from "../models/IPost";
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const userService = {
    getUsers: async ():Promise<IUser[]>  => {
        let axiosResponse = await axiosInstance.get<IResponceUsers>('/users');
        return axiosResponse.data.users;
    }
}
export const postService  = {
    getPostsOfUser: async (id: number):Promise<IPost[]> => {
        let axiosResponse = await axiosInstance.get<IResponcePosts>('/posts/user/' + id)
        return axiosResponse.data.users;
    }
}