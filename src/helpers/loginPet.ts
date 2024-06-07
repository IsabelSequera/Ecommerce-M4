import { LoginI } from "@/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function login(dataLogin: LoginI) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(dataLogin)
        });

        console.log(dataLogin)
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message);
        }

        return await res.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
}
