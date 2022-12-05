import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/products'
export default function Product() {
    const [product, setProduct] = useState({})
    let {id} = useParams()
    useEffect(()=>{
        setProduct(data[id])
        console.log(product)
    },[])
    return (
        <div class='min-h-screen'>
            <h1 class='text-xl text-black m-10'>Product: {product.productName}</h1>
            <div class='w-[500px] h-[500px]'>
                
            </div>
            
        </div>
    )
}