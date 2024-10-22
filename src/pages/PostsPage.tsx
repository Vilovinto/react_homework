import React, {useEffect, useState} from 'react';
import {apiService} from "../services/api.service";
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        apiService.postService.getAll<IPost[]>('/posts').then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(post => <div key = {post.id}> {post.id}.  <Link to={post.id.toString()}> {post.title} </Link> </div>)
            }
        </div>
    );
};

export default PostsPage;