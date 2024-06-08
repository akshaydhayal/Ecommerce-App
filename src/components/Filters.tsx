import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterByPrice, filterByRating, selectedFilterCategory } from "../store/filterProducts";
import { Link } from "react-router-dom";

function Filters() {
    const [categories,setCategories]=useState([]);
    const [filteredCategory,setFilterCategory]=useRecoilState(selectedFilterCategory);

    const setFilterByPrice=useSetRecoilState(filterByPrice);
    const [filterLowestPrice,setFilterLowestPrice]=useState<number>(0);
    const [filterHighestPrice,setFilterHighestPrice]=useState<number>(0);
    
    const setFilterByRating=useSetRecoilState(filterByRating);

    useEffect(()=>{
      async function fetchCategories(){
        const response=await fetch('https://dummyjson.com/products/category-list',{
          method:"GET"
        });
        const data=await response.json();
        if(data){
          setCategories(data);
        }
      }
      fetchCategories();
    },[])

    console.log("categories : ",categories);
    return (
    // <div className=" h-[90vh] divide-y divide-slate-400">
    <div className=" h-[90vh] ">
        <p className="font-bold text-xl font-serif px-4 pt-4">Filters</p>
      {/* <div className="flex flex-col justify-center px-6 p-4 gap-6 divide-y divide-slate-400"> */}
      <div className="flex flex-col justify-center px-6 p-4 gap-6">
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg font-serif">Categories</p>
              <p className=" text-blue-700 hover:text-blue-600 hover:underline 
              hover:font-semibold text-sm font-medium cursor-pointer font-sans " onClick={()=>{
                setFilterCategory(null);
              }}>CLEAR</p>
            </div>
          <div className="flex flex-col gap-2 h-[30vh] overflow-auto">
            {categories && categories.map((c) => {
              return (
                <div className="flex gap-4">
                  <input type="checkbox" value={c} checked={c===filteredCategory} onChange={(e)=>{
                    console.log('checked',e.target.value);
                    setFilterCategory(e.target.value);
                    }}/>
                  <p className="font-medium text-slate-700">{c}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg font-serif">Price range</p>
            <p className=" text-blue-700 hover:text-blue-600 hover:underline 
            hover:font-semibold text-sm font-medium cursor-pointer font-sans " onClick={()=>{
              setFilterByPrice(null);
            }}>CLEAR</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="text" placeholder="$5" className="placeholder:text-slate-500
             border px-3 p-1 w-1/3 border-slate-500 rounded-sm" onChange={(e)=>{
              setFilterLowestPrice(e.target.value)
             }}/>
            <p className="text-slate-600">to</p>
            <input type="text" placeholder="$10" className="placeholder:text-slate-500
             border px-3 p-1 w-1/3 border-slate-500 rounded-sm" onChange={(e)=>{
              setFilterHighestPrice(e.target.value);
             }}/>
          </div>
          <button className="bg-red-500 text-white font-medium text-base p-[6px] 
          rounded-md" onClick={()=>{
            setFilterByPrice({filterLowestPrice,filterHighestPrice});
          }}>Set Price
          </button>
        </div>

        <div>
          <p className="font-semibold text-lg font-serif">Customer Ratings</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <input type="checkbox" value='4+' onChange={(e)=>{
                if(e.target.checked){
                  setFilterByRating(e.target.value);
                }else{
                  setFilterByRating(null);
                }
              }}/>
              <p className="font-medium text-slate-700">4★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">2★ & above</p>
            </div>
        
          </div>
        </div>

      </div>
    </div>
    );
}

export default Filters;