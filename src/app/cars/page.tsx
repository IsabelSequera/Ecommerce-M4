'use client'
import React from "react";
import { IProduct, userSession } from "@/types";
import { useRouter, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { createOrder } from "@/helpers/orders";

const Cars = () => {
    const router = useRouter();
    const [dataCars, setDataCars] = useState<IProduct[]>([])
    const [total, setTotal] = useState<number>(0)
    const [dataUser, setDataUser] = useState<userSession>();

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage){
            const dataUser: userSession = JSON.parse(localStorage.getItem("userSession")!);
            setDataUser(dataUser)
            !dataUser?.token && router.push("/login");
        }

        const storeCars = JSON.parse(localStorage.getItem("cars") || "[]")
        if(storeCars) {
            let totalCars = 0;
            storeCars.forEach((item: IProduct) => {
                if (item && typeof item.price === 'number') {
                    totalCars += item.price;
                }     
            });

            setTotal(totalCars)
            setDataCars(storeCars)
        }
    }, [])

    const handleClick = async () => {
        //try {
            const idProducts = new Set(dataCars.map((product) => product?.id))
            await createOrder(Array.from(idProducts), dataUser?.token!)

            alert("Successful purchase")
            setDataCars([])
            setTotal(0)
            localStorage.setItem("cars", "[]");
        /* } catch (error) {
            th
        } */
    } 

    return (
        <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
                {
                    dataCars?.length > 0 ? (
                        dataCars?.map((cars) => {
                            return (
                                <div key={cars?.id}>
                                    {cars && (
                                    <div>
                                        <p className="text-gray-700 mb-2">{cars.name} </p>
                                        <p className="text-gray-700 mb-2">Price: ${cars.price} </p>
                                    </div>
                                    )}
                                </div>
                            )
                        })
                    ) : (
                        <div> 
                            <p>You have no items in your cars</p>
                        </div>
                    )
                } 
                <div>

                </div>
                    <p>Total: ${total}</p>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded" onClick={handleClick}>Checkbout</button>
            </div>

        </div>

        
    )
}

export default Cars; 