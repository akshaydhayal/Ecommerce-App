import { atom } from "recoil";

export const selectedFilterCategory=atom<null|string>({
    key:'selectedFilterCategory',
    default:null
})

export const filterByPrice = atom<null | {
  filterLowestPrice: number;
  filterHighestPrice:number
}>({
  key: "filterByPrice",
  default: null,
});

export const filterByRating=atom<null | string>({
    key:'filterByRating',
    default:null
})

export const filterBySearch=atom<null|string>({
    key:'filterBySearch',
    default:null
})
