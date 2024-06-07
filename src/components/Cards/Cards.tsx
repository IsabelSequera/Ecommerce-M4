import { IProduct } from "@/types";
import React from "react";
import Card from "../Card/Card";
import Link from "next/link";

const Cards = ({ products }: { products: IProduct[] }) => {
    return (
        <div>
            {products && 
                products?.map((product) => {
                    return (
                        <Link  className="flex" key={product.id} href={`/product/${product.id}`}>
                             <Card key={product.id} {...product} />;
                        </Link>
                    ) 
                })}
        </div>
    );
};

export default Cards;