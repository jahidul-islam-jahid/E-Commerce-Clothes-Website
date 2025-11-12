import React, { useEffect, useState } from "react";
import Title from "../../../Components/SharedComponents/SectionTitle/Title";
import ProductCard from "../ProductComponents/ProductCard"

function DealProduct() {
  const [dealProducts, setDealProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setDealProducts(data));
  }, []);
  
  // Show only first 4 products
  const displayProducts = dealProducts.slice(0, 4);
  
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <Title
          title="Day of"
          secondTitle="The deal"
          description="Don't wait. The time will never be just right."
        ></Title>
      </div>
      <div className="container mx-auto px-4 pb-8 md:pb-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealProduct;