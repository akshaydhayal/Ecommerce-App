import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartCheckoutStatus, cartItems } from "../store/cartItems";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

function Checkout() {
    const setCartCheckoutStatus=useSetRecoilState(cartCheckoutStatus);
    const [cartItem,setCartItem]=useRecoilState(cartItems);
    const [totalCartItemsCost, setTotalCartItemsCost]=useState(0);
    const [deliveryCost, setDeliveryCost]=useState(0);

    useEffect(()=>{
        let totalCartItemsCosts=0;
        cartItem.forEach((i:any)=>{
            totalCartItemsCosts+=i.price*i.quantity;
        })
        setTotalCartItemsCost(Math.round(totalCartItemsCosts));
        setDeliveryCost(Math.round(0.1*totalCartItemsCosts));
    },[cartItem]);

    console.log(cartItem);

    function addQuantity(itemId:number){    
        // const updatedCartItems=cartItems.map((item)=>{
        //     console.log("id : ",item.id, " itemId : ",itemId);
        //     console.log(item.id==itemId);
        //     console.log(item.id===itemId);
        //     if(item.id===itemId){
        //         return {...item,quantity:item.quantity+1}
        //     }
        //    return item;
            
        // })
        // setCartItems(updatedCartItems);
        // console.log("updated cart",JSON.stringify(updatedCartItems));  
        // localStorage.setItem('cart-items',JSON.stringify(updatedCartItems));


        const updatedCartItems:any=cartItem.map((item:any)=>{
            if(item.id===itemId){
                return {...item,quantity:item.quantity+1}
            }
            return item;
        })
        setCartItem(updatedCartItems);
        // setTotalCartItemsCost(Math.round(findCartCosts()))
        // setDeliveryCost(Math.round(0.1*findCartCosts()))
        console.log("updated cart",JSON.stringify(updatedCartItems));  
    }

    function removeQuantity(itemId:number){    
        let updatedCartItems: {id:number,title:string,price:number,quantity:number,thumbnail:string,
          category:string,tag:string}[] = [];
        cartItem.forEach((item:any)=>{
            if(item.id===itemId){
                if (item.quantity > 1){
                    updatedCartItems.push({...item,quantity: item.quantity - 1,});
                }
            }else{
                updatedCartItems.push(item);
            }
        })
        setCartItem(updatedCartItems);
        console.log("updated cart",JSON.stringify(updatedCartItems));  
    }
    return (
        <div className="w-screen h-screen flex justify-center py-2">
            <div className="w-2/5 p-4 h-max flex flex-col gap-4 rounded-lg shadow-xl border border-slate-300 divide-y divide-slate-400">
                <div className="flex justify-between items-center">
                    <p className="font-serif font-semibold text-xl">Your Cart</p>
                    <RxCross2 className="w-6 h-6 hover:w-7 hover:h-7 cursor-pointer" onClick={()=>{
                        setCartCheckoutStatus(false);
                    }}/>
                </div>
                <div className="flex flex-col gap-2">
                    {cartItem.map((i:any)=>{
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
                                     hover:bg-slate-950 hover:text-white cursor-pointer" onClick={()=>{
                                        removeQuantity(i.id);
                                     }}>-</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="flex flex-col gap-4 py-2">
                    <p className="font-semibold text-lg font-sans">Have a promotion code?</p>
                    <div className="flex gap-2">
                        <input type="text" className="border w-3/4 border-slate-500 rounded-md
                         placeholder:text-slate-700 p-2" placeholder="Enter Code"/>
                        <button className="w-1/4 border border-slate-500 p-2 rounded-sm font-medium text-base">Apply Code</button>
                    </div>
                </div>

                <div className="py-2">
                    <p className="font-semibold text-lg font-sans mb-2">Order Summary</p>
                    <div className="flex justify-between">
                        <p className="font-medium font-serif px-2">Items Cost</p>
                        <p className="font-semibold text-lg font-mono tracking-tight">${totalCartItemsCost}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium font-serif px-2">Delivery Cost</p>
                        <p className="font-semibold text-lg font-mono tracking-tight">${deliveryCost}</p>
                    </div>
                </div>
                <div className="flex justify-between py-2">
                    <p className="font-semibold text-xl font-serif tracking-tight">Total</p>
                    <p className="font-semibold text-xl font-mono tracking-tight">${totalCartItemsCost+deliveryCost}</p>
                </div>
                <button className="bg-slate-950 text-white font-medium text-lg p-2 
                rounded-md" onClick={()=>{

                    toast.promise(
                        new Promise((res)=>{
                            setTimeout(()=>{
                                res('Hi')
                                setCartCheckoutStatus(false);
                                setCartItem([]);
                            },2000);
                        }), {
                      loading: "Processing Order...",
                      success: <b>Congrats, Order Placed Sucessfully!!</b>,
                      error: <b>Could not save.</b>,
                    });

                }}>Confirm checkout</button>
            </div>
        </div>
    );
}

export default Checkout;