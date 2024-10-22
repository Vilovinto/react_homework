import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import HomePage from "../pages/HomePage";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import CommentDetailsPage from "../pages/CommentDetailsPage";

export const router = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children:[
        {index: true, element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id', element: <UserDetailsPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'posts/:id', element: <PostDetailsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'comments/:id', element: <CommentDetailsPage/>},
    ]
}]);