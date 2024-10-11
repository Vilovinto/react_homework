import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
type TypeProps1 = ({item:IProductModel})
const Product:FC<TypeProps1> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.discountPercentage}</p>
            <p>{item.rating}</p>
            <p>{item.stock}</p>
            <p>{item.tags}</p>
            <p>{item.brand}</p>
            <p>{item.sku}</p>
            <p>{item.weight}</p>
            <p>{item.width}</p>
            <p>{item.height}</p>
            <p>{item.depth}</p>
            <p>{item.warrantyInformation}</p>
            <p>{item.shippingInformation}</p>
            <p>{item.availabilityStatus}</p>
            <p>{item.rating}</p>
            <p>{item.comment}</p>
            <p>{item.date}</p>
            <p>{item.reviewerName}</p>
            <p>{item.reviewerEmail}</p>
            <p>{item.returnPolicy}</p>
            <p>{item.minimumOrderQuantity}</p>
            <p>{item.createdAt}</p>
            <p>{item.updatedAt}</p>
            <p>{item.barcode}</p>
            <p>{item.qrCode}</p>
            <img src= {item.images} alt= {item.title} />
            <img src= {item.thumbnail} alt= {item.title} />
        </div>
    );
};

export default Product;