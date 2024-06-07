'use client'
import { validateRegister } from "@/helpers/validateRegister";
import { RegisterError, RegisterI } from "@/types";
import { useState, useEffect } from "react";
import { registerUser } from "@/helpers/petitins";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();

    const [dataRegister, setDataRegister] = useState<RegisterI>({
        email: "",
        name: '',
        password: "",
        address: '',
        phone: '',
    });

    const [errorsRegister, setErrorsRegister] = useState<RegisterError>({
        email: "",
        name: '',
        password: "",
        address: '',
        phone: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataRegister({
            ...dataRegister,
            [event.target.name]: event.target.value
        });
    }

    const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await registerUser(dataRegister);
            console.log("Registro exitoso:", response);
            alert("Successful registration")
            router.push("/login")

        } catch (error: any) {
            console.error("Error en el registro:", error.message);
           throw new Error(error)
        }
    }


    useEffect(() => {
        const errors = validateRegister(dataRegister)
        setErrorsRegister(errors)
    }, [dataRegister])

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
            <div className="max-w-md w-full p-4 rounded-lg shadow-xl bg-gray-100">
                <h1 className="text-black text-2xl font-bold mb-4 text-center">Register</h1>
            <form onSubmit={handleInputSubmit}>

            <div className="mb-4">

                <label className="block text-black">Email: </label>
                <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="email"
                name="email"
                type="email"
                value={dataRegister.email}
                required
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                />
                {errorsRegister.email && <p>{errorsRegister.email}</p>}
            </div>

            <div className="mb-4">

                <label className="block text-black">Name: </label>
                <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="name"
                name="name"
                type="text"
                value={dataRegister.name}
                required
                onChange={handleInputChange}
                placeholder="Sara"
                />
                {errorsRegister.name && <p>{errorsRegister.name}</p>}
            </div>

            <div className="mb-4">

                <label className="block text-black" htmlFor="password" >Password: </label>
                <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="password"
                name="password"
                type='password'
                value={dataRegister.password}
                required
                onChange={handleInputChange}
                placeholder='********'
                />
                {errorsRegister.password && <p>{errorsRegister.password}</p>}
            </div>

            <div className="mb-4">

                <label className="block text-black">Address: </label>
                <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="address"
                name="address"
                type="text"
                value={dataRegister.address}
                required
                onChange={handleInputChange}
                placeholder="Caracas"
                />
                {errorsRegister.address && <p>{errorsRegister.address}</p>}
            </div>

            <div className="mb-4">

                <label className="block text-black" htmlFor="phone">Phone: </label>
                <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="phone"
                name="phone"
                type="tel"
                value={dataRegister.phone}
                required
                onChange={handleInputChange}
                placeholder="0412 8158054"
                />

                {errorsRegister.phone && <p>{errorsRegister.phone}</p>}
            </div>

            <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">Register</button>
        </form>
        </div>
    </div>
    )
}

export default Register;