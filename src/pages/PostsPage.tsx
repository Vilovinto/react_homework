import React, {useEffect, useState} from 'react';
import {apiService} from "../services/api.service";
import {IPost} from "../models/IPost";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        apiService.postService.getAll().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(post => <div>{post.id},{post.title},{post.userId},{post.body}</div>)
            }
        </div>
    );
};

export default PostsPage;