import React, { useEffect, useState } from "react";
import CardList from "./CardList";

function CardBanner() {
  const [cardBanners, setCardBanners] = useState([]);
  useEffect(() => {
    fetch("cardBanner.json")
      .then((res) => res.json())
      .then((data) => setCardBanners(data));
  }, []);
  return <div className="container mx-auto grid grid-cols-3  justify-between gap-6 py-10">
    {
        cardBanners.map((product)=>
            <CardList product={product}/>
        )
    }
  </div>;
}

export default CardBanner;
