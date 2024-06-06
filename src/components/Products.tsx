import Product from "./Product";

function Products() {
    return (
      <div>
        <p>Products</p>
        <div className="w-full flex gap-6">
          <div className="w-1/3">
            <Product
              url="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              title="Essence Mascara Lash Princess"
              description="The Essence Mascara Lash Princess is a popular mascara known for its volumizing and length"
              rating={4.9}
              reviewsCount={23}
              price={8.9}
            />
          </div>
          <div className="w-1/3">
            <Product
              url="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              title="Essence Mascara Lash Princess"
              description="The Essence Mascara Lash Princess is a popular mascara known for its volumizing and length"
              rating={4.9}
              reviewsCount={23}
              price={8.9}
            />
          </div>
          <div className="w-1/3">
            <Product
              url="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
              title="Essence Mascara Lash Princess"
              description="The Essence Mascara Lash Princess is a popular mascara known for its volumizing and length"
              rating={4.9}
              reviewsCount={23}
              price={8.9}
            />
          </div>
        </div>
      </div>
    );
}

export default Products;