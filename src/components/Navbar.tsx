import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { useState } from "react";
import Checkout from "../pages.tsx/Checkout";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartCheckoutStatus, cartItems } from "../store/cartItems";

function Navbar({cartQuantity}) {
    // const [checkoutStatus,setCheckoutStatus]=useState(false);
    const setCartCheckoutStatus = useSetRecoilState(cartCheckoutStatus);
    const cartItem=useRecoilValue(cartItems);
    console.log("cartItems with recoil: ",JSON.stringify(cartItem));

    const links=[
        {title:"Home",link:"/home"},
        {title:"Our Shop",link:"/home"},
        {title:"Offer Zone",link:"/home"},
        {title:"Blogs",link:"/home"},
        {title:"Contact us",link:"/home"},
    ]
    console.log("cartQuantity",cartQuantity);
    return (
        <div className="flex justify-between px-16">
            <Link to="/">
                <div className="flex gap-3 items-center cursor-pointer">
                    <BsShop className="w-10 h-10 text-red-700 "/>
                    <p className="font-semibold text-3xl font-serif tracking-tight">Shop<span className="text-red-700">Kart</span></p>    
                </div>
            </Link>
            <div className="flex gap-3">
                {links.map((l)=>{
                    return <Link to={l.link}>
                        <p className="font-semibold text-slate-600 text-lg">{l.title}</p>
                    </Link>
                })}
            </div>
            <div className="flex gap-3">
                <MdOutlineNotificationsNone className="w-8 h-8"/>
                <div className="relative flex" onClick={()=>{
                    // setCheckoutStatus(true);
                    setCartCheckoutStatus(true);
                }}>
                    <MdOutlineShoppingCart className="w-8 h-8"/>
                    {/* <p className="absolute bg-red-700 text-white">{cartQuantity}</p> */}
                    <p className="absolute bg-red-700 text-white">{cartItem.length}</p>
                </div>
                <RxAvatar className="w-8 h-8"/>
                {/* <IoCartOutline className="w-8 h-8"/> */}
                {/* <HiOutlineShoppingBag className="w-8 h-8"/> */}
                {/* <BiShoppingBag className="w-8 h-8"/> */}
                {/* <TbShoppingBag className="w-8 h-8"/> */}
            </div>
        </div>
    );
}

export default Navbar;