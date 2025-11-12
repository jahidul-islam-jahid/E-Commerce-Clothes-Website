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
    <div>
      <div className="container mx-auto flex items-center justify-between">
        <Title
          title="Day of"
          secondTitle="The deal"
          description="Don't wait. The time will never be just right."
        ></Title>
      </div>
      <div className="container mx-auto flex items-center justify-between pb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealProduct;