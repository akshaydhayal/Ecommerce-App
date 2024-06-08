import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { RxAvatar } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartCheckoutStatus, cartItems } from "../store/cartItems";
import { filterBySearch } from "../store/filterProducts";

function Navbar({cartQuantity}:{cartQuantity:number}) {
    const setCartCheckoutStatus = useSetRecoilState(cartCheckoutStatus);
    const setSearchedProduct= useSetRecoilState(filterBySearch);
    const [searchProduct,setSearchProduct]= useState<string>('');

    const cartItem=useRecoilValue(cartItems);
    console.log("cartItems with recoil: ",JSON.stringify(cartItem));

    console.log("cartQuantity",cartQuantity);
    return (
        <div className="flex justify-between px-10 p-2 h-[10vh] bg-slate-50">
            <Link to="/">
                <div className="flex gap-3 items-center cursor-pointer">
                    <BsShop className="w-10 h-10 text-red-700 "/>
                    <p className="font-semibold text-3xl font-serif tracking-tight">Shop<span className="text-red-700">Kart</span></p>    
                </div>
            </Link>
            <div className="flex gap-3 w-2/5">
                <div className="w-full flex">
                    <div className="flex w-10/12 relative">
                    <input type="text" value={searchProduct} className="p-2 px-6 rounded-l-lg border border-slate-600 
                    w-full placeholder:text-slate-600 " placeholder="Search ShopKart" onChange={(e)=>{
                        setSearchProduct(e.target.value);
                    }}/>
                    {/* <input type="text" className="p-2 px-6 rounded-l-lg border border-slate-600 
                    w-10/12 placeholder:text-slate-600 " placeholder="Search ShopKart" onChange={(e)=>{
                        setSearchProduct(e.target.value);
                    }}/> */}
                    <div className="absolute right-0 top-0 h-full flex justify-center items-center px-3">
                        <RxCross2 className="w-5 h-5 cursor-pointer hover:w-6 hover:h-6" onClick={()=>{
                            setSearchedProduct(null);
                            setSearchProduct('');
                        }}/>

                    </div>
                    {/* <RxCross2 className="absolute right-2 top-3 w-5 h-5"/> */}
                    </div>
                    <button type="submit" className="w-2/12 border border-slate-600 p-2 flex justify-center
                     items-center rounded-r-lg hover:bg-slate-100" onClick={()=>{
                         setSearchedProduct(searchProduct);
                     }}>
                        <IoSearch className="w-7 h-7 text-blue-500 hover:text-blue-700"/>
                    </button>
                </div>
            </div>
            <div className="flex gap-3">
                <MdOutlineNotificationsNone className="w-8 h-8"/>
                <div className="relative flex border" onClick={()=>{
                    setCartCheckoutStatus(true);
                }}>
                    <MdOutlineShoppingCart className="w-8 h-8 border"/>
                    <p className="absolute bg-green-900 text-white text-sm font-medium rounded-full w-5 h-5 text-center top-[-4px] right-[-6px]">{cartItem.length}</p>
                </div>
                <RxAvatar className="w-8 h-8"/>
            </div>
        </div>
    );
}

export default Navbar;