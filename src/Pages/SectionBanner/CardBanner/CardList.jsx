import React from "react";

function CardList({ product }) {
  return (
    <div className="">
      <div className=" ">
        <div
          key={product.id}
          className="relative h-50 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Content */}
          <div className="relative  z-10 p-8 h-full flex flex-col justify-end">
            <h1 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
              {product.title}
            </h1>
            <p className="text-xl text-white mb-6 opacity-90">
              {product.subtitle}
            </p>
            <button
              className={`${product.buttonColor} text-white px-8 py-3 rounded-lg font-semibold w-fit transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {product.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
