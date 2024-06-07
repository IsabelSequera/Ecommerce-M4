'use client'
import { login } from "@/helpers/loginPet";
import { validate } from "@/helpers/validate";
import { LoginI, LoginError } from "@/types";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { userSession } from "@/types";
import Link from "next/link";

const Login = () => {
    const router = useRouter();
    const [ emailValid, setEmailValid] = useState("")
    const [ passwordValid, setPasswordValid] = useState("")
    const [dataLogin, setDataLogin] = useState<LoginI>({
        email: "",
        password: ""
    });

    const [errorsLogin, setErrorsLogin] = useState<LoginError>({
        email: "",
        password: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;
        setDataLogin({
            ...dataLogin,
            [name]: value.trim()
        });

    }

    const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            {
            try {
                const response = await login(dataLogin);
                console.log(response)
                const { token, user} = response
                localStorage.setItem('userSession', JSON.stringify({token: token, dataLogin: user}))
                alert("successful login")
                router.push("/")
            } catch (error: any) {
               throw new Error(error.message)
            }
        }
    }

    useEffect(() => {
        const errors = validate(dataLogin)
        setErrorsLogin(errors)
    }, [dataLogin])

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
            <div className="max-w-md w-full p-4 rounded-lg shadow-xl bg-gray-100">
                <h1 className="text-black text-2xl font-bold mb-4 text-center">Login</h1>
            <form onSubmit={handleInputSubmit}>

            <div className="mb-4">

                <label className="block text-black">Email: </label>
                <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="email"
                name="email"
                type="email"
                value={dataLogin.email}
                required
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                />
                {errorsLogin.email && <p>{errorsLogin.email}</p>}
            </div>

            <div className="mb-4">

                <label className="block text-black" htmlFor="password">Password: </label>
                <input 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="password"
                name="password"
                type="password"
                value={dataLogin.password}
                required
                onChange={handleInputChange}
                placeholder='*******'
                />
                {errorsLogin.password && <p>{errorsLogin.password}</p>}
            </div>

            <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">Login</button>

            <div className="mt-4">

                <p>If you are not registered, register here:</p>
                <Link href="/register">
                    <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">Register</button>
                </Link>
        </div>
        </form>
    </div>
    </div>

        

    )
}

export default Login;