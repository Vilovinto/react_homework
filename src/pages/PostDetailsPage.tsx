import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiServiceDetails} from "../services/api.service";
import {IPost} from "../models/IPost";

const PostDetailsPage = () => {
    let {id} = useParams();
    const [post, setPost] = useState<IPost | null>(null);
    useEffect(() => {
        if(id){
            apiServiceDetails.postServiceDetails.getAllDetails<IPost>('/posts/' + id).then(value => setPost(value));
        }
    }, []);
    return (
        <div>
            {post && `${post.userId}. ${post.body}`}
        </div>
    );
};

export default PostDetailsPage;