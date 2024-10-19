import {IAddress} from  "./IAddress";
import {IBank} from  "./IBank";
import {ICompany} from  "./ICompany";
export  interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair:{
        color: string;
        type: string;
    }
    ip: number;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany;
    ein: number;
    ssn: number;
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    }
    role: string;
}