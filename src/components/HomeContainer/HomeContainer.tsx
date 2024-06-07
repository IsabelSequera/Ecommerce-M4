import React from 'react'
import productsToPreload from '@/helpers/products';
import Cards from '../Cards/Cards';
import { getProducts } from '@/helpers/petitins';

const HomeContainer = async () => {
    const products = await getProducts();
    return (
        <div className="bg-gray-900"> 
            <Cards products={products}/>
         </div>
    )
}
export default HomeContainer;