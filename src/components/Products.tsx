import { useEffect, useMemo, useState } from "react";
import useGetAllProducts from "../hooks/useGetAllProducts";
import Product from "./Product";
import useGetFirstPageProducts from "../hooks/useGetFirstPageProducts";
import { useRecoilValue } from "recoil";
import { filterByPrice, filterByRating, selectedFilterCategory } from "../store/filterProducts";


function Products({setCartQuantity}) {
  const [currPage,setCurrPage]=useState(1);
  let [currentPageProducts,setCurrentPageProducts]=useState([]);
  const filteredCategory=useRecoilValue(selectedFilterCategory);
  console.log("filtered cat : ",filteredCategory);

  const priceFilters=useRecoilValue(filterByPrice);
  const ratingFilter=useRecoilValue(filterByRating);

  useEffect(()=>{
    async function fetchProducts(){
      const response = await fetch(`https://dummyjson.com/products?limit=15&skip=${(currPage - 1) * 15}`,
        {method: "GET"}
      );
      const data = await response.json();
      if (data.products) {
        setCurrentPageProducts(data.products);
      }
      if(priceFilters){
        filterProductsByPrice();
      }
      if(ratingFilter){
        filterProductsByRating();
      }
    }
    
    async function fetchSelectedCategoryProducts(){
      const response = await fetch(`https://dummyjson.com/products/category/${filteredCategory}?limit=15&skip=${(currPage - 1) * 15}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.products) {
        setCurrentPageProducts(data.products);
      }
      if(priceFilters){
        filterProductsByPrice();
      }
      if(ratingFilter){
        filterProductsByRating();
      }
    }

    function filterProductsByPrice(){
      const updatedCurrentPage=currentPageProducts.filter((item)=>{
        if(item.price>=priceFilters.filterLowestPrice && item.price<=priceFilters.filterHighestPrice){
          return item;
        }
      })
      console.log('updated products by price : ',JSON.stringify(updatedCurrentPage));
      setCurrentPageProducts(updatedCurrentPage);
    }
    
    
    function filterProductsByRating(){
      const ratingNumber=Number(ratingFilter.split('+')[0]);
      console.log('rating filter type : ',typeof(ratingFilter));
      const updatedCurrentPage=currentPageProducts.filter((item)=>{
        if(item.rating>=ratingNumber){
          return item;
        }
      })
      console.log('updated products by rating : ',JSON.stringify(updatedCurrentPage));
      setCurrentPageProducts(updatedCurrentPage);
    }


    if(filteredCategory){
      console.log("filtered prod fetch called")
      fetchSelectedCategoryProducts();
    }else{
      console.log("all prod fetch called")
      fetchProducts();
    }
  },[currPage,filteredCategory,priceFilters])

    console.log("price filters",priceFilters);
    console.log("rating filters",ratingFilter,"type: ",typeof(ratingFilter));

    console.log("prodcut 0 in products page : "+JSON.stringify(currentPageProducts[0]));
    console.log("prodcut last in products page : "+JSON.stringify(currentPageProducts[currentPageProducts.length-1]));
    return (
      <div className="flex flex-col gap-4">
        <p>Products</p>
        <div className="w-full grid grid-cols-3 gap-6">
            {currentPageProducts && currentPageProducts.map((p)=>{
              return <Product id={p.id} title={p.title} description={p.description} price={p.price} 
                      rating={p.rating} imageUrl={p.images[0]} thumbnail={p.thumbnail} category={p.category}
                       reviewsCount={p.reviews.length} setCartQuantity={setCartQuantity} 
                       tag={p.tags.length>1?p.tags[1]:p.tags[0]}
              />
            })}
        </div>

        <div className="flex justify-center">
          <button className="border border-slate-600 px-4 font-medium font-mono 
           tracking-tighter cursor-pointer hover:bg-slate-200 rounded-sm hover:font-semibold" onClick={()=>{
            setCurrPage(old=>old>1?old-1:old);
          }}>Previous Page</button>
          <p className="border px-4 p-1 border-slate-600 font-medium">{currPage}</p>
          <button className="border border-slate-600 px-4 font-medium font-mono 
          tracking-tighter cursor-pointer hover:bg-slate-200 hover:font-semibold" onClick={()=>{
            setCurrPage(old=>old+1);
          }}>Next Page</button>
        </div>

      </div>
    );
}

export default Products;