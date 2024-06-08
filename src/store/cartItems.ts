import { atom } from "recoil";

export const cartItems = atom<{
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    category: string;
    tag: string;
  }[]
>({
  key: "cartItems",
  default: [],
});

export const cartCheckoutStatus=atom({
    key:'cartCheckoutStatus',
    default:false
})