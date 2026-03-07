"use client";
import { useState ,useEffect} from "react";
import useDebounce from "../../hooks/useDebounce";
import { Search } from "lucide-react";
interface Product {
  id: number;
  title: string;
  images:string;
  description:string;
  price:number;
}
export default function product(){

    const [product, setProducts]=useState<Product[]>([]);
    const [search, setSearchTerm]=useState<string>("");
    const [allProduct, setAllProduct]=useState<Product[]>([]);

     const debounce=useDebounce(search, 5000);
    useEffect(()=>{
     const fetchData=async()=>{
        const res=await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);
        setAllProduct(data.products);
     }
     fetchData();
    },[])
    useEffect(()=>{
         const filter =allProduct.filter((item,i)=>item.title.toLowerCase().includes(debounce.toLowerCase()))
      setProducts(filter);
    },[debounce])
    const handleSearch=(e:any)=>{
      setSearchTerm(e.target.value);
 
    }

    return(
        <>
        <div className="flex justify-between px-2 py-2 items-center">
            <div>
        <h1 className=" text-xl font-bold text-center">Products</h1></div>
        <div className="flex flex-end border border-gray-400 h-9 rounded w-80 p-2">
            <div>
            <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input value={search} onChange={handleSearch} className=" w-full px-2 py-1 outline-none" type="text" placeholder="Search"/>
        </div>
        </div>
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