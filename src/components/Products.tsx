import { useEffect, useState } from "react";
import Product from "./Product";
import {  useRecoilValue } from "recoil";
import { filterByPrice, filterByRating, filterBySearch, selectedFilterCategory } from "../store/filterProducts";


function Products({setCartQuantity,}: {setCartQuantity: React.Dispatch<React.SetStateAction<number>>;}) {
  const [currPage, setCurrPage] = useState(1);
  let [currentPageProducts, setCurrentPageProducts] = useState([]);
  const filteredCategory = useRecoilValue(selectedFilterCategory);
  console.log("filtered cat : ", filteredCategory);

  const priceFilters = useRecoilValue(filterByPrice);
  const ratingFilter = useRecoilValue(filterByRating);
  const searchedProduct = useRecoilValue(filterBySearch);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `https://dummyjson.com/products?limit=15&skip=${(currPage - 1) * 15}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.products) {
        setCurrentPageProducts(data.products);
      }
      if (priceFilters) {
        filterProductsByPrice();
      }
      if (ratingFilter) {
        filterProductsByRating();
      }
    }

    async function fetchSelectedCategoryProducts() {
      const response = await fetch(
        `https://dummyjson.com/products/category/${filteredCategory}?limit=15&skip=${
          (currPage - 1) * 15
        }`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.products) {
        setCurrentPageProducts(data.products);
      }
      if (priceFilters) {
        filterProductsByPrice();
      }
      if (ratingFilter) {
        filterProductsByRating();
      }
    }

    async function fetchSearchedProducts() {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchedProduct}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.products) {
        setCurrentPageProducts(data.products);
      }
      if (priceFilters) {
        filterProductsByPrice();
      }
      if (ratingFilter) {
        filterProductsByRating();
      }
    }

    function filterProductsByPrice() {
      const updatedCurrentPage = currentPageProducts.filter((item: any) => {
        // if (item.price >= priceFilters.filterLowestPrice && item.price <= priceFilters.filterHighestPrice) {
        if (priceFilters && item.price >= priceFilters.filterLowestPrice && item.price <= priceFilters.filterHighestPrice) {
          return item;
        }
      });
      console.log("updated products by price : ",JSON.stringify(updatedCurrentPage));
      setCurrentPageProducts(updatedCurrentPage);
    }

    function filterProductsByRating() {
      // const ratingNumber = Number(ratingFilter.split("+")[0]);
      // const ratingNumber = ratingFilter && Number(ratingFilter.split("+")[0]);
      let ratingNumber:number;
      if(ratingFilter){
        ratingNumber=Number(ratingFilter.split("+")[0]);
      } 
      console.log("rating filter type : ", typeof ratingFilter);
      const updatedCurrentPage = currentPageProducts.filter((item:any) => {
        if (item.rating >= ratingNumber) {
          return item;
        }
      });
      console.log(
        "updated products by rating : ",
        JSON.stringify(updatedCurrentPage)
      );
      setCurrentPageProducts(updatedCurrentPage);
    }

    if (filteredCategory) {
      console.log("filtered prod fetch called");
      fetchSelectedCategoryProducts();
    } else if (searchedProduct) {
      console.log("searched products fetch called");
      fetchSearchedProducts();
    } else {
      console.log("all prod fetch called");
      fetchProducts();
    }
  }, [currPage, filteredCategory, priceFilters, ratingFilter, searchedProduct]);

  console.log("price filters", priceFilters);
  console.log("rating filters", ratingFilter, "type: ", typeof ratingFilter);

  console.log("searched product", searchedProduct);

  console.log(
    "prodcut 0 in products page : " + JSON.stringify(currentPageProducts[0])
  );
  console.log(
    "prodcut last in products page : " +
      JSON.stringify(currentPageProducts[currentPageProducts.length - 1])
  );

  if (currentPageProducts.length == 0) {
    return (
      <div className="w-[80vw] h-[90vh] flex justify-center items-center">
        <div className="flex items-center justify-center w-[35vw] h-[10vh] text-gray-900 dark:text-black">
          <div>
            <h1 className="text-lg md:text-3xl font-bold flex items-center font-mono">
              L
              <svg
                stroke="currentColor"
                fill="red"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="animate-spin "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
              </svg>{" "}
              ading Products ...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full grid grid-cols-3 gap-6">
        {currentPageProducts &&
          currentPageProducts.map((p: any) => {
            return (
              <Product
                id={p.id}
                title={p.title}
                description={p.description}
                price={p.price}
                rating={p.rating}
                thumbnail={p.thumbnail}
                category={p.category}
                reviewsCount={p.reviews.length}
                setCartQuantity={setCartQuantity}
                tag={p.tags.length > 1 ? p.tags[1] : p.tags[0]}
              />
            );
          })}
      </div>

      <div className="flex justify-center">
        <button
          className="border border-slate-600 px-4 font-medium font-mono 
           tracking-tighter cursor-pointer hover:bg-slate-200 rounded-sm hover:font-semibold"
          onClick={() => {
            setCurrPage((old) => (old > 1 ? old - 1 : old));
          }}
        >
          Previous Page
        </button>
        <p className="border px-4 p-1 border-slate-600 font-medium">
          {currPage}
        </p>
        <button
          className="border border-slate-600 px-4 font-medium font-mono 
          tracking-tighter cursor-pointer hover:bg-slate-200 hover:font-semibold"
          onClick={() => {
            setCurrPage((old) => old + 1);
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Products;