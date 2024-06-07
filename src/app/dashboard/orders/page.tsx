'use client'
import React from "react";
import { useState, useEffect } from "react";
import { IOrder, userSession } from "@/types";
import { getOrders } from "@/helpers/orders";
import Link from "next/link";

const PageOrders = () => {

    const [dataUser, setDataUser] = useState<userSession>();
    const [ordersData, setOrdersData] = useState<IOrder[]>([]);

    useEffect(() => {

        if(typeof window !== "undefined" && window.localStorage){
            const userData = localStorage.getItem("userSession")
            setDataUser(JSON.parse(userData!))
        }

    }, [])

    useEffect(() => {

        const fetchData = async () => {
            const orders = await getOrders(dataUser?.token!);
            setOrdersData(orders)
        }
        dataUser?.token && fetchData()
    }, [dataUser?.token])

    return (
        <div className="flex-col w-full min-h-screen bg-gray-900 flex items-center justify-center">
                <h1 className="text-white flex flex-col text-2xl font-semibold mb-4">Orders</h1>
            <div className="max-h-screen overflow-y-auto">
            {
                ordersData?.length > 0? (
                    ordersData?.map((order) => {
                        return (
                            <div className="bg-white p-8 rounded shadow-lg mb-4"> 
                                <div>
                                    <p className="text-gray-700 mb-2">{new Date(order.date).toLocaleDateString()}</p>
                                    <p className="text-gray-700 mb-2">status: {order.status}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="bg-white p-8 rounded shadow-lg">
                        
                        <p className="text-gray-700 mb-2">You don't have anything added yet!</p>
                        <Link href="/">
                            <label>Buys!</label>
                        </Link>
                    </div>
                )
                } 
            </div>   
        </div>
    )
    
};

export default PageOrders;





