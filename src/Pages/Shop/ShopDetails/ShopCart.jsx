import React from "react";

function ShopCart() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex gap-8 items-center ">
        <div className="flex-1 ">
          <img
            className="w-full rounded-2xl shadow-sm  hover:shadow-lg duration-400"
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 p-5">
          <p className="font-semibold">Eggs</p>
          <h2 className="text-4xl font-bold py-1">
            Potato Chips 52g, American Cream.
          </h2>
          <div className="flex items-center gap-15 font-semibold">
            <span>Sole: N/A</span>
            <p>Total Rating : 992</p>
          </div>
          <div className="flex items-center gap-10 py-2 font-semibold">
            <p className="text-2xl">Price: $664</p>
            <p className="line-through text-xl text-gray-600">$2999</p>
          </div>
          <p className=" text-sm font-semibold">
            Crunchy chips and snacks with American cream & onion flavour. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="pt-3">
            <strong>SKU :</strong> WH12
          </p>
          <p>
            <strong>Stock :</strong> In Stock
          </p>
          <p>
            <strong>Closure :</strong> Hook & Loop
          </p>
          <div className="py-2 flex items-center gap-4">
            <p className="font-bold text-xl">Size :</p>
            <button className="btn">weightOptions</button>
            <button className="btn">weightOptions</button>
            <button className="btn">weightOptions</button>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-4">
              <button className="btn text-3xl">-</button>
              <button>1</button>
              <button className="btn text-3xl">+</button>
            </div>
            <div>
              <button className="btn bg-[#516EBF] text-white">
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
