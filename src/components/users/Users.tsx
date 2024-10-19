import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {userService} from "../../services/dummyjson.api.service";
import User from "../user/User";

type UsersProps = {
    lift: (id : number) => void;
}
const Users:FC<UsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            let usersResponse = await userService.getUsers();
            setUsers(usersResponse);
        }
        getUsers();
    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} lift={lift} item = {value}/>)
            }
        </div>
    );
};

export default Users;