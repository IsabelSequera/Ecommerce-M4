import categoriesToPreload from "@/helpers/category";
import { IProduct } from "@/types";
import React from "react";

const Card:React.FC<IProduct> = ({name, price, image, description, stock, categoryId}) => {
    return (
        <div className="flex flex-col items-center justify-between bg-slate-400 text-black rounded-xl p-4 border gap-2 m-4 max-w-[300px] h-[450px] max-h-[450px] shadow">
            <img className="w-full max-w-[100px] h-full max-h-[150px] rounded-xl" src={image} alt="Imagen del producto" />
            <h2 className="text-xl text-center">{name}</h2>
            <p className="text-sm text-center overflow-hidden overflow-ellipsis h-20">{description}</p>
            <p className="text-lg">${price}</p>
            <p className="text-sm">Category: {categoriesToPreload[categoryId].name} </p>
            <p className="text-sm">Stock: {stock}</p>
        </div>
    )
}

export default Card;