import {IReview} from "./IReview";
import {IMeta} from "./IMeta";

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    images: string[];
    thumbnail: string;
}

interface IDimensions {
    width: number;
    height: number;
    depth: number;
}