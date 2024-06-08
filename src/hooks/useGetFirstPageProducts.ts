import { useEffect, useState } from "react";

export default function useGetFirstPageProducts(pageNo:number) {
  const [products, setProducts] = useState([]);
  let productData;
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        // "https://dummyjson.com/products?limit=15&skip=0",
        `https://dummyjson.com/products?limit=15&skip=${(pageNo-1)*15}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log('data 0 in hook',data.products[0]);
      if (data.products) {
        setProducts(data.products);
        productData=data.products;
      }
    }
    getProducts();
  }, []);

  // return data.products;
//   return [products,setProducts];
  return products;
    //  return productData;
}
