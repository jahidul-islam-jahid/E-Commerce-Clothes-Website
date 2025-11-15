import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function ShopCart() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        setProduct(found);
      });
  }, []);
  if (!product) return <h1>Loadding...</h1>;
  return (
    <div className="container mx-auto py-10 md:py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full lg:flex-1">
          <img
            className="w-full rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-400 max-w-2xl mx-auto"
            src={product.image}
            alt="Potato Chips"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:flex-1 p-4 md:p-5">
          <p className="font-semibold text-gray-600">{product.categoryName}</p>
          <h2 className="text-2xl md:text-4xl font-bold py-1 text-gray-900">
            {product.name}
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-15 font-semibold py-2">
            <span className="text-gray-600">Sole: {product.sole}</span>
            <p className="text-gray-600">Total Rating : {product.ratings}</p>
          </div>

          <div className="flex items-center gap-6 md:gap-10 py-2 font-semibold">
            <p className="text-xl md:text-2xl text-green-600">
              Price: ${product.price}
            </p>
            <p className="line-through text-lg md:text-xl text-gray-600">
              ${product.mrp}
            </p>
          </div>

          <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-2 pt-3">
            <p>
              <strong>SKU :</strong> {product.sku}
            </p>
            <p>
              <strong>Stock :</strong>
              <span className="text-green-600">{product.stock}</span>
            </p>
          </div>

          {/* Size Options */}
          <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-bold text-lg">Size : {product.width}</p>
 
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-2xl font-light hover:bg-gray-50 transition-colors">
                -
              </button>
              <span className="w-12 text-center text-lg font-semibold">1</span>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-2xl font-light hover:bg-gray-50 transition-colors">
                +
              </button>
            </div>
            <div className="w-full sm:w-auto">
              <button className="w-full bg-[#516EBF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
