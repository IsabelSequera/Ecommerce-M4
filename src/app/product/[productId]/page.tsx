'use client'
import { getProductsId } from "@/helpers/petitins";
import { IProduct } from "@/types";
import React, { useState, useEffect} from "react";
import { userSession } from "@/types";
import { useRouter } from "next/navigation";

const productDetails = ({params}: {params: {productId: string}}) => {
    const router = useRouter();
    const [productData, setProductData] = useState<IProduct>()
    const [dataUser, setDataUser] = useState<userSession>();

    useEffect(() => {

        if(typeof window !== "undefined" && window.localStorage){
            const dataUser = localStorage.getItem("userSession")
            setDataUser(JSON.parse(dataUser!))
        }

        const fetchData = async () => {
            const product = await getProductsId(params.productId)
            setProductData(product)
        }

        fetchData()
    }, [])

    const handleAddCars = (e: any) => {
        if(!dataUser?.token) {
            alert("You are not logged")
        } else {
            const cars = JSON.parse(localStorage.getItem("cars") || "[]")
            const prodExist = cars.some((product: IProduct) => {
            if(e && e.target && e.target.id && product.id === Number(e.target.id)) {
                return true; 
            }
            return false;
            
            }); 

            if(prodExist) {
                alert("This product exists in your cars!")
                router.push("/cars")
            } else {
                cars.push(productData)
                localStorage.setItem("cars", JSON.stringify(cars));
                alert("Product added to your cars!")
                router.push("/cars")
            }
        }
    };


    return (
        <div className="w-full items-center bg-gray-900 justify-center flex flex-col">
            <div className="w-1/2 items-center justify-center flex flex-col bg-slate-400 p-6 rounded my-4">
                <h2>{productData?.name}</h2>
                <img src={productData?.image} alt={productData?.image}/>
                <p>{productData?.description}</p>
                <p>Price: {productData?.price}</p>
                <p>Stock: {productData?.stock}</p>
                <button id={productData?.id.toString()} onClick={handleAddCars} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">Add to cars</button>
            </div>
        </div>
    )
}

export default productDetails;