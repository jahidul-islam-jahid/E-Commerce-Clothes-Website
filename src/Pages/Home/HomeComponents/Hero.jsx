import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Hero() {
  return (
    <div className="container mx-auto py-10">
      {/* <div>
        <img className="rounded-2xl" src="./image/hero.jpg" alt="" />
      </div> */}
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <div className="bg-slider-1 flex justify-start items-center px-[100px] py-[220px] rounded-2xl">
            <div>
              <span className="text-[#516EBF] text-xl">
                Starting at $<strong>20.00</strong>
              </span>
              <h2 className="text-6xl font-[600] text-gray-600 py-5 leading-18">
                Fashion sale for <br /> women's
              </h2>
              <button className="btn bg-[#516EBF] text-white font-semibold px-8 mt-4">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider-2 flex justify-start items-center px-[100px] py-[220px] rounded-2xl">
            <div>
              <span className="text-[#516EBF] text-xl">
                Starting at $<strong>20.00</strong>
              </span>
              <h2 className="text-6xl font-[600] text-gray-600 py-5 leading-18">
                Expolre Jackets <br /> sale for Men's
              </h2>
              <button className="btn bg-[#516EBF] text-white font-semibold px-8 mt-4">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
