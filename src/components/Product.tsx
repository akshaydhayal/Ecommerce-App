import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartCheckoutStatus, cartItems } from "../store/cartItems";

function Product({
  id,
  title,
  description,
  rating,
  reviewsCount,
  thumbnail,
  price,
  setCartQuantity,
  category,
  tag,
}: {
  id: number;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  thumbnail: string;
  price: number;
  category: string;
  tag: string;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>
}) {
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItems] = useRecoilState(cartItems);
  const setCartCheckoutStatus = useSetRecoilState(cartCheckoutStatus);

  return (
    <div className="w-full p-4 border hover:border-[1.5px] hover:border-slate-400 cursor-pointer border-slate-600 rounded-lg flex flex-col gap-3">
      <div>
        <img
          src={thumbnail}
          className="w-full h-52 bg-gradient-to-r from-sky-300 via-gray-500 to-gray-800 object-contain rounded-md"
        />
      </div>
      <div>
        <p className="text-lg font-bold font-serif tracking-tight line-clamp-1">
          {title}
        </p>
        <div className="">
          <p className="font-medium font-sans text-slate-800 line-clamp-2">
            {description}
          </p>
        </div>
        <p className="text-slate-600 font-medium">
          {rating} ({reviewsCount} Reviews)
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium text-xl">${price}</p>
        <div className="flex gap-2 items-center">
          <FiPlusCircle
            className="cursor-pointer w-5 h-5 text-slate-900 hover:text-slate-500"
            onClick={() => {
              setQuantity((old) => old + 1);
            }}
          />
          <p className="px-6 border border-slate-700 rounded-sm">{quantity}</p>
          <FiMinusCircle
            className="cursor-pointer text-slate-900 hover:text-slate-500 w-5 h-5"
            onClick={() => {
              setQuantity((old) => {
                return old > 1 ? old - 1 : 1;
              });
            }}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <button
        //   className="w-1/2 p-[2px] font-medium text-lg border hover:border-[1.35px] border-slate-700 
        // rounded-md hover:border-slate-500"
          className="w-1/2 p-[2px] font-medium text-lg border  border-slate-950 
        rounded-md hover:border-slate-400"
          
          onClick={() => {
            setCartItems([
              ...cartItem,
              { id, title, price, quantity, thumbnail, category, tag },
            ]);
            setCartCheckoutStatus(true);
          }}
        >
          Buy now
        </button>
        <button
          className="w-1/2 p-[2px] font-medium text-lg border border-slate-950  hover:border-slate-400 rounded-md"
          onClick={() => {
            setCartQuantity((old) => old + 1);
            setCartItems([
              ...cartItem,
              { id, title, price, quantity, thumbnail, category, tag },
            ]);
          }}
        >
          {" "}
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
