import Filters from "../components/Filters";
import Products from "../components/Products";

function Home() {
    return (
        <div className="flex w-screen">
            <div className="w-1/5 border">
                <Filters/>
            </div>
            <div className="w-4/5 border">
                <Products/>
            </div>
        </div>
    );
}

export default Home;