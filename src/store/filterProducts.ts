import { atom } from "recoil";

export const selectedFilterCategory=atom({
    key:'selectedFilterCategory',
    default:null
})

export const filterByPrice=atom({
    key:'filterByPrice',
    default:null
})

export const filterByRating=atom({
    key:'filterByRating',
    default:null
})