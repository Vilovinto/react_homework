import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {apiService} from "../services/api.service";
import {Link} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        apiService.commentService.getAll<IComment[]>('/comments').then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(comment =>  <div key = {comment.id}> {comment.id}. <Link to={comment.id.toString()}> {comment.name} </Link> </div>)
            }
        </div>
    );
};

export default CommentsPage;