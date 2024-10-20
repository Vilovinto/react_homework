import axios from "axios";
import {IUser} from  "../models/IUser";
import {IResponseUsers} from "../models/IResponseUsers";
import {IResponsePosts} from "../models/IResponsePosts";
import {IPost} from "../models/IPost";
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const userService = {
    getUsers: async ():Promise<IUser[]>  => {
        let axiosResponse = await axiosInstance.get<IResponseUsers>('/users');
        return axiosResponse.data.users;
    }
}
export const postService  = {
    getPostsOfUser: async (id: number):Promise<IPost[]> => {
        let axiosResponse = await axiosInstance.get<IResponsePosts>('/posts/user/' + id)
        return axiosResponse.data.posts;
    }
}