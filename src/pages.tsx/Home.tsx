import { useRecoilValue } from "recoil";
import Filters from "../components/Filters";
import Products from "../components/Products";
import { cartCheckoutStatus } from "../store/cartItems";
import Checkout from "./Checkout";

function Home({setCartQuantity,}: {setCartQuantity: React.Dispatch<React.SetStateAction<number>>}) {
  const checkoutStatus = useRecoilValue(cartCheckoutStatus);
  console.log("checkoutStataus in home page: ", checkoutStatus);
  return (
    <div className="pt-4">
      {checkoutStatus && <Checkout />}
      {!checkoutStatus && (
        <div className="flex w-screen">
          <div className="w-1/5 border">
            <Filters />
          </div>
          <div className="w-4/5 border">
            <Products setCartQuantity={setCartQuantity} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;