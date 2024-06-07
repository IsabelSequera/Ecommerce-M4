'use client'
import React from "react";
import { userSession } from "@/types";
import { useState, useEffect } from "react";

const Dashboard = () => {

    const [ dataUser, setDataUser] = useState<userSession>();

    useEffect(() => {

            const dataUser = localStorage.getItem("userSession")
            setDataUser(JSON.parse(dataUser!))

    }, [])

    const handleLogout = () => {
        localStorage.removeItem("userSession");
        window.location.reload();
    }

    return (
        <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
                <h1 className="text-2xl font-semibold mb-4"> 
                    Welcome {dataUser?.dataLogin.name} 
                </h1>
                <p className="text-gray-700 mb-2"> Email: {dataUser?.dataLogin.email} </p>
                <p className="text-gray-700 mb-2"> Address: {dataUser?.dataLogin.address} </p>
                <p className="text-gray-700 mb-4"> Phone: {dataUser?.dataLogin.phone} </p>

                <div>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded" onClick={handleLogout}> Logout </button>
                </div>
            </div>
            
        </div>
    )
};

export default Dashboard;

