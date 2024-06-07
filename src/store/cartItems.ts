import { atom } from "recoil";

export const cartItems=atom({
    key:'cartItems',
    default:[]
})

export const cartCheckoutStatus=atom({
    key:'cartCheckoutStatus',
    default:false
})