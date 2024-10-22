import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";
import {Link} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll<IUser[]>('/users').then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(user => <div key={user.id}> {user.id}. <Link to={user.id.toString()}> {user.name} </Link></div>)
            }
        </div>
    );
};

export default UsersPage;