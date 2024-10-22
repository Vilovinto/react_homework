import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiServiceDetails} from "../services/api.service";
import {IComment} from "../models/IComment";

const CommentDetailsPage = () => {
    let {id} = useParams();
    const [comment, setComment] = useState<IComment | null>(null);
    useEffect(() => {
        if(id){
            apiServiceDetails.commentServiceDetails.getAllDetails<IComment>('/comments/' + id).then(value => setComment(value));
        }
    }, []);
    return (
        <div>
            {comment && `${comment.postId}, ${comment.name}, ${comment.email}, ${comment.body}`}
        </div>
    );
};

export default CommentDetailsPage;