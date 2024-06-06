import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsShop } from "react-icons/bs";

function Navbar() {
    const links=[
        {title:"Home",link:"/home"},
        {title:"Our Shop",link:"/home"},
        {title:"Offer Zone",link:"/home"},
        {title:"Blogs",link:"/home"},
        {title:"Contact us",link:"/home"},
    ]
    return (
        <div className="flex justify-between px-16">
            <div className="flex gap-3 items-center">
                <BsShop className="w-10 h-10 text-red-700 "/>
                <p className="font-semibold text-3xl font-serif tracking-tight">Shop<span className="text-red-700">Kart</span></p>    
            </div>
            <div className="flex gap-3">
                {links.map((l)=>{
                    return <Link to={l.link}>
                        <p className="font-semibold text-slate-600 text-lg">{l.title}</p>
                    </Link>
                })}
            </div>
            <div className="flex gap-3">
                <MdOutlineNotificationsNone className="w-8 h-8"/>
                <MdOutlineShoppingCart className="w-8 h-8"/>
                {/* <IoCartOutline className="w-8 h-8"/> */}
                {/* <HiOutlineShoppingBag className="w-8 h-8"/> */}
                {/* <BiShoppingBag className="w-8 h-8"/> */}
                {/* <TbShoppingBag className="w-8 h-8"/> */}
            </div>
        </div>
    );
}

export default Navbar;