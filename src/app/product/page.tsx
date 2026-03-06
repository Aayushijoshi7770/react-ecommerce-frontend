"use client";
import { useState ,useEffect} from "react";
interface Product {
  id: number;
  title: string;
  images:string;
  description:string;
  price:number;
}
export default function product(){

    const [product, setProducts]=useState<Product[]>([]);
    useEffect(()=>{
     const fetchData=async()=>{
        const res=await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);
     }
     fetchData();
    },[])

    return(
        <>
        <h1>Products</h1>
        <div className="flex flex-wrap gap-2 px-4 py-2">
        {product.length>0?product.map((item, index)=>{
            return(
                <>
                 <div className="p-2 bg-white-300 border border-gray-200 rounded h-50 w-60">
                    <h1>{item.title}</h1>
                    <div className="flex gap-1 items-center">
                    
                    <img src={item.images[0]} className="h-30 w-30"/>
                    <p className="text-gray-600 text-sm truncate">{item.description}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                    <span className="text-sm">{item.price}$</span>
                    </div>
                 </div>
                </>
            )
        }):<h1>No data</h1>}
        </div>

        </>
    )
}