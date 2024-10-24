import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const router = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <HomePage/>},
        {path: 'products', element: <ProductsPage/>}
    ]
}])