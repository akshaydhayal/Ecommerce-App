// import { useEffect, useState } from "react";

// export default function useGetAllProducts(){
//     const [products,setProducts]=useState([]);
//     let productsData;
//     useEffect(()=>{
//         async function getProducts(){
//             const response=await fetch('https://dummyjson.com/products',{
//                 method:"GET"
//             });
//             const data=await response.json();
//             // console.log(data);
//             if(data.products){
//                 setProducts(data.products);
//                 productsData=data.products;
//                 console.log(productsData);
//             }
//         }
//         getProducts();
//     },[])

//     return productsData;
//     // return data.products;
//     // return products;
// }