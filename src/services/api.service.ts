import axios from "axios";
import {IProduct} from "../models/IProduct";
import {IResponse} from "../models/IResponse";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

export const apiService = {
    recipe: {
        getAll: async (page: number): Promise<IResponse & {products:IProduct[]}> => {
            const skip = (page - 1) * 10;
            const {data} = await axiosInstance.get<IResponse & {products:IProduct[]}>('/products', {
                params: {
                    skip: skip
                }
            });
            return data;
        }
    }
}