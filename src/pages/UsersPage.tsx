import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(user => <div>{user.id}, {user.name}, {user.username}, {user.email}, {user.phone}</div>)
            }
        </div>
    );
};

export default UsersPage;