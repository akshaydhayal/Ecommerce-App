import { useEffect, useState } from "react";

export default function useGetAllProducts(){
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        async function getProducts(){
            const response=await fetch('https://dummyjson.com/products?limit=15&skip=0',{
                method:"GET"
            });
            const data=await response.json();
            console.log(data);
            if(data.products){
                setProducts(data.products);
            }
        }
        getProducts();
    },[])

    // return data.products;
    return products;
}