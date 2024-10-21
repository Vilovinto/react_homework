import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {apiService} from "../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        apiService.commentService.getAll().then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <div>{comment.id},{comment.name},{comment.email},{comment.body},{comment.postId}</div>)
            }
        </div>
    );
};

export default CommentsPage;