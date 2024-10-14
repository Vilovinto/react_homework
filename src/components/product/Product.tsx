import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
import {IReviewsModel} from "../models/IReviewsModel";
type TypeProps = ({item:IProductModel})
const Product:FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>description: {item.description}</p>
            <p>category: {item.category}</p>
            <p>price: {item.price}</p>
            <p>discountPercentage: {item.discountPercentage}</p>
            <p>rating: {item.rating}</p>
            <p>stock: {item.stock}</p>
            <p>tags: {item.tags}</p>
            <p>brand: {item.brand}</p>
            <p>sku: {item.sku}</p>
            <p>weight: {item.weight}</p>
            <p> dimensions:</p>
            <p>width: {item.dimensions.width}</p>
            <p>height: {item.dimensions.height}</p>
            <p>depth: {item.dimensions.depth}</p>
            <p>warrantyInformation: {item.warrantyInformation}</p>
            <p>shippingInformation: {item.shippingInformation}</p>
            <p>availabilityStatus: {item.availabilityStatus}</p>
            <div> {item.reviews.map((review: IReviewsModel, index: number) => (
                <div key={index}>
                        <p>reviews: </p>
                        <p>rating: {review.rating}</p>
                        <p>comment: {review.comment}</p>
                        <p>date: {review.date}</p>
                        <p>reviewerName: {review.reviewerName}</p>
                        <p>reviewerEmail: {review.reviewerEmail}</p>
                </div>))} </div>
            <p>returnPolicy: {item.returnPolicy}</p>
            <p>minimumOrderQuantity: {item.minimumOrderQuantity}</p>
            <p>meta: </p>
            <p>createdAt: {item.meta.createdAt}</p>
            <p>updatedAt: {item.meta.updatedAt}</p>
            <p>barcode: {item.meta.barcode}</p>
            <p>qrCode: {item.meta.qrCode}</p>
            <div> {item.images.map((image: string) => (
                <img src={image} alt = {item.title}/>
                ))} </div>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default Product;