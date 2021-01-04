export interface User {
    name: string;
    email: string;
    password: string;
    adress: {
        street: string;
        zipCode: number;
        city: string;
    };
}