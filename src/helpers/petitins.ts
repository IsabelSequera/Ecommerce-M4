import { IProduct } from "@/types";
import { RegisterI } from "@/types";
import { LoginI } from "@/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProducts() {
    try {
        const res = await fetch(`${apiUrl}/products`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': 'true'
            },
            next: {revalidate: 3000}
        })
        const products: IProduct[] = await res.json()
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
};

export async function getProductsId(id: string) {
    try {
        const products = await getProducts();
        const productById = products.find((productById) => productById.id.toString() === id);

        if(!productById) throw new Error(`Product not found`)
            return productById;
    } catch (error: any) {
        throw new Error(error)
    }
}


export async function registerUser(dataRegister: RegisterI) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(dataRegister)
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message);
        }

        return await res.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
}
