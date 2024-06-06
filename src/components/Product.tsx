import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

function Product({title, description, rating, reviewsCount,url,price}:
    {title:string,description:string,rating:number, reviewsCount:number,url:string,price:number}) {
  return (
    <div className="w-full p-4 border border-slate-600 rounded-lg flex flex-col gap-3"> 
      <div>
        <img
          src={url}
          className="w-full h-52 bg-slate-300"
        />
      </div>
      <div>
        {/* <p className="text-lg font-bold font-sans">Essence Mascara Lash Princess</p> */}
        <p className="text-lg font-bold font-serif tracking-tight">
          {title}
        </p>
        {/* <p className="text-lg font-bold font-mono tracking-tight">Essence Mascara Lash Princess</p> */}
        <div className="">
          <p className="font-medium font-sans text-slate-800">
            {description}
          </p>
        </div>
        <p className="text-slate-600 font-medium">{rating} ({reviewsCount} Reviews)</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium text-xl">${price}</p>
        <div className="flex gap-2 items-center">
          <FiPlusCircle/>
          <p className="px-6 border border-slate-700 rounded-sm">1</p>
          <FiMinusCircle/>

        </div>
      </div>
      <div className="flex gap-4">
        <button className="w-1/2 font-medium text-lg border-2 border-slate-400 rounded-md">Buy now</button>
        <button className="w-1/2 font-medium text-lg border-2 border-slate-400 rounded-md">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
