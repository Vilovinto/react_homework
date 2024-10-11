import React, {FC} from 'react';
import {apiProductsObject} from "../../data";
import Product from "../product/Product";
import {IProductModel} from "../models/IProductModel";

const Products: FC = () => {
    const products: IProductModel[] = apiProductsObject.products;
    return (
        <div>
            {
                products.map((product: IProductModel) => (<Product item = {product}/>))
            }
        </div>
    );
};

export default Products;