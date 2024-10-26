import axios from "axios";
import {IForm} from "../models/IForm";
import {IPost} from "../models/IPost";
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
export const apiService = {
    post: {
        savePost: async (dataFromForm: IForm): Promise<IPost> => {
            const {data} = await axiosInstance.post<IPost>('/posts', dataFromForm);
            return data;
        }
    }
}