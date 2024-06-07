'use client'
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { userSession } from "@/types";
import { usePathname } from "next/navigation";

const Navbar = () => {
const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [dataUser, setDataUser] = useState<userSession>();

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage){
            const dataUser = localStorage.getItem("userSession")
            setDataUser(JSON.parse(dataUser!))
        }
    }, [pathname])

    console.log(pathname)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    

    return (

        <nav className="bg-gray-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <p className="text-white text-2xl font-bold">MyShopTecno</p>
                </Link>
            <div className="hidden md:block">
            
            {
                dataUser?.token ? (
                    <div className="flex space-x-4">
                        <p className="text-white hover:text-gray-400"> Welcome {dataUser?.dataLogin.name} </p>

                    <div className="flex space-x-4"> 
                        <Link href="/dashboard">
                            <p className="text-white hover:text-gray-400">My account</p>
                        </Link>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="/cars">
                            <p className="text-white hover:text-gray-400">Cars</p>
                        </Link>
                    </div>
                    
                    </div>
                        
                    ) : (
                        <div className="flex space-x-4">
                            <Link href={"/login"}>
                                <p className="text-white hover:text-gray-400">Login</p>
                            </Link>
                        </div>
                    )
                }
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M4 6h16M4" : "12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
                <p className="text-white hover:text-gray-400">Welcome {dataUser?.dataLogin.name}</p>
            </li>
            <li>
              <Link href="/dashboard">
                <p className="text-white hover:text-gray-400">Mi account</p>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <p className="text-white hover:text-gray-400">Login</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
)
};

export default Navbar;