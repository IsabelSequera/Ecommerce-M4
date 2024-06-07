export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    name: string;
}

export interface LoginI {
    email: string;
    password: string;
}

export interface LoginError {
    email?: string;
    password?: string;
}

export interface RegisterI {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface RegisterError {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface userSession {
    token: string;
    dataLogin: {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
    id: number;
    role: string;
    orders: []
    }
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[]
}

