export interface Signup {
    name: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}


export interface Product {
    id:string;
    category: string;
    color: string;
    description: string;
    imageurl: string;
    name: string;
    price: string;
}