import { useEffect } from "react";
import useGetAllProducts from "../hooks/useGetAllProducts";
import Product from "./Product";


// {
//     "id": 1,
//     "title": "Essence Mascara Lash Princess",
//     "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//     "category": "beauty",
//     "price": 9.99,
//     "discountPercentage": 7.17,
//     "rating": 4.94,
//     "stock": 5,
//     "tags": [
//         "beauty",
//         "mascara"
//     ],
//     "brand": "Essence",
//     "sku": "RCH45Q1A",
//     "weight": 2,
//     "dimensions": {
//         "width": 23.17,
//         "height": 14.43,
//         "depth": 28.01
//     },
//     "warrantyInformation": "1 month warranty",
//     "shippingInformation": "Ships in 1 month",
//     "availabilityStatus": "Low Stock",
//     "reviews": [
//         {
//             "rating": 2,
//             "comment": "Very unhappy with my purchase!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "John Doe",
//             "reviewerEmail": "john.doe@x.dummyjson.com"
//         },
//         {
//             "rating": 2,
//             "comment": "Not as described!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "Nolan Gonzalez",
//             "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//         },
//         {
//             "rating": 5,
//             "comment": "Very satisfied!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "Scarlett Wright",
//             "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//         }
//     ],
//     "returnPolicy": "30 days return policy",
//     "minimumOrderQuantity": 24,
//     "meta": {
//         "createdAt": "2024-05-23T08:56:21.618Z",
//         "updatedAt": "2024-05-23T08:56:21.618Z",
//         "barcode": "9164035109868",
//         "qrCode": "https://dummyjson.com/public/qr-code.png"
//     },
//     "images": [
//         "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//     ],
//     "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
// }

function Products({setCartQuantity}) {
    let products=useGetAllProducts();

    // console.log("prodcuts in products page : "+JSON.stringify(products));
    return (
      <div>
        <p>Products</p>
        <div className="w-full grid grid-cols-3 gap-6">
            {products && products.map((p)=>{
              return <Product id={p.id} title={p.title} description={p.description} price={p.price} 
                      rating={p.rating} imageUrl={p.images[0]} thumbnail={p.thumbnail} category={p.category}
                       reviewsCount={p.reviews.length} setCartQuantity={setCartQuantity} 
                       tag={p.tags.length>1?p.tags[1]:p.tags[0]}
              />
            })}
        </div>
      </div>
    );
}

export default Products;