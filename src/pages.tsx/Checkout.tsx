import { useState } from "react";

function Checkout() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart-items")));
    let totalCartItemsCosts=0;
    cartItems.forEach((i)=>{
        totalCartItemsCosts+=i.price*i.quantity;
    })
    const [totalCartItemsCost, setTotalCartItemsCost]=useState(Math.round(totalCartItemsCosts));
    const [deliveryCost, setDeliveryCost]=useState(Math.round(0.1*totalCartItemsCosts));

    console.log(cartItems);

    function addQuantity(itemId:number){
        // setCartItems((old)=>{
        //     return(
        //         old.filter((item)=>{
        //             if(item.id===itemId){
        //                 return {...item,quantity:item.quantity+1}
        //             }else{
        //                 return item;
        //             }
        //         })
        //     )
        // })
        
        const updatedCartItems=cartItems.filter((item)=>{
            console.log("id : ",item.id, " itemId : ",itemId);
            console.log(item.id==itemId);
            console.log(item.id===itemId);
            if(item.id===itemId){
                return {quantity:9,...item}
                // return {...item,quantity:item.quantity+1}
            }else{
                return item;
            }
        })
        setCartItems(updatedCartItems);
        console.log("updated cart",JSON.stringify(updatedCartItems));  
        localStorage.setItem('cart-items',JSON.stringify(updatedCartItems));
    }
    return (
        <div className=" flex justify-center">
            <div className="w-2/5 border border-green-700 p-4 flex flex-col gap-4">
                <div>
                    <p className="font-serif font-semibold text-xl">Your Cart</p>
                </div>
                <div className="flex flex-col gap-2">
                    {cartItems.map((i)=>{
                        return <div className="w-full h-20 flex items-center gap-2">
                            <img src={i.thumbnail} className="h-full w-1/5 bg-slate-200 rounded-sm"/>
                            <div className="w-3/5 ">
                                <p className="uppercase font-mono font-semibold text-lg tracking-tight leading-tight">{i.title}</p>
                                <div className="flex gap-2 md:gap-4">
                                    <p className="text-slate-600 text-sm">{i.category}</p>
                                    <p className="text-slate-600 text-sm">{i.tag}</p>
                                </div>
                            </div>
                            <div className="w-1/5 flex flex-col gap-1 items-center">
                                <p className="font-semibold font-mono tracking-tight text-lg">${i.price}</p>
                                <div className="flex gap-[0.4]"> 
                                    <div className="border border-slate-500 text-center font-medium w text-base m-0 p-0 px-1
                                     hover:bg-slate-950 hover:text-white cursor-pointer" onClick={()=>{
                                        addQuantity(i.id);
                                     }}>+</div>
                                    <p className="border border-slate-500 px-2 text-sm font-medium">{i.quantity}</p>
                                    <div className="border border-slate-500 text-center font-medium w text-base m-0 p-0 px-2
                                     hover:bg-slate-950 hover:text-white cursor-pointer">-</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-semibold text-lg font-sans">Have a promotion code?</p>
                    <div className="flex gap-2">
                        <input type="text" className="border w-3/4 border-slate-500 rounded-md
                         placeholder:text-slate-700 p-2" placeholder="Enter Code"/>
                        <button className="w-1/4 border border-slate-500 p-2 rounded-sm font-medium text-base">Apply Code</button>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-lg font-sans mb-2">Order Summary</p>
                    <div className="flex justify-between">
                        <p className="font-medium font-serif px-2">Items Cost</p>
                        {/* <p className="font-semibold text-lg font-mono tracking-tight">${Math.round(totalCartItemsCost)}</p> */}
                        <p className="font-semibold text-lg font-mono tracking-tight">${totalCartItemsCost}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium font-serif px-2">Delivery Cost</p>
                        <p className="font-semibold text-lg font-mono tracking-tight">${deliveryCost}</p>
                        {/* <p className="font-semibold text-lg font-mono tracking-tight">${Math.round(0.1*totalCartItemsCost)}</p> */}
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="font-semibold text-xl font-serif tracking-tight">Total</p>
                    <p className="font-semibold text-xl font-mono tracking-tight">${totalCartItemsCost+deliveryCost}</p>
                </div>
                <button className="bg-slate-950 text-white font-medium text-lg p-2 rounded-md">Conform checkout</button>
            </div>
        </div>
    );
}

export default Checkout;