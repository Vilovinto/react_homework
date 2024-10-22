import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiServiceDetails} from "../services/api.service";
import {IUser} from "../models/IUser";

const UserDetailsPage = () => {
    let {id} = useParams();
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        if(id){
            apiServiceDetails.userServiceDetails.getAllDetails<IUser>('/users/' + id).then(value => setUser(value));
        }
    }, []);
    return (
        <div>
            {user && `${user.id}. ${user.username}, ${user.email}, ${user.phone}, ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}, ${user.phone}, ${user.website}, ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}
        </div>
    );
};

export default UserDetailsPage;