import React, { useEffect, useState } from 'react'
import data from '../data/products'
function ProductCard(props) {

    
    return (
        <div class='card w-[600px] h-[500px] '>
            <div class='w-4/5 h-4/5 left-[60px] top-[28px] opacity-0 hover:opacity-75 bg-gray-200 absolute'>
                <h2 class='card-title mx-auto mt-[180px] w-max'> Show more</h2>
            </div>
            <h1 class='card-title ml-20' > {props.product.productName}</h1>
            <img class='w-4/5 h-4/5 mx-auto '  src={window.location.origin + props.product.imgurl}></img>
        </div>
    )
}

export default function Products() {
    const [products , setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
        console.log(data)
    },[])
    return (
        <div class='h-full '>
            <div class='w-full h-[200px]'>
                <div class='bg-gray-300 opacity-80 absolute h-[200px] w-[200px] '>
                    <h2 class='w-min text-lg text-black mx-auto mt-10'>Preview</h2>
                </div>
            <img src={window.location.origin + '/tileStock/northern-beaches-tiling.jpg'}  class='w-full h-full' style={{objectFit: 'cover'}}/>
            </div>
            
            <h1 class='text-xl text-black w-max mx-auto'>Our Products</h1>
            <div class='divider w-3/4 mx-auto'/>
            <div>
                <div class='mx-auto w-fit '>
                {products.map((product) => (
                    <div class=''>

                        <ProductCard product ={product}/>
                    </div>

                    
                ))}
                </div>

                
            </div>
        </div>
    )
}