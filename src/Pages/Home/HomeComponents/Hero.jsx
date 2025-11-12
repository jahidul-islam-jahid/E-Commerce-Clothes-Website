import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Hero() {
  return (
    <div className="container mx-auto py-6 md:py-10 px-4">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded-2xl"
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-slider-1 flex justify-start items-center px-4 sm:px-8 md:px-16 lg:px-[100px] py-16 sm:py-24 md:py-32 lg:py-[220px] rounded-2xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            <div className="max-w-lg">
              <span className="text-[#516EBF] text-lg sm:text-xl font-semibold">
                Starting at $<strong>20.00</strong>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 py-4 sm:py-5 leading-tight sm:leading-18">
                Fashion sale for <br /> women's
              </h2>
              <button className="btn bg-[#516EBF] text-white font-semibold px-6 sm:px-8 py-3 mt-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider-2 flex justify-start items-center px-4 sm:px-8 md:px-16 lg:px-[100px] py-16 sm:py-24 md:py-32 lg:py-[220px] rounded-2xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            <div className="max-w-lg">
              <span className="text-[#516EBF] text-lg sm:text-xl font-semibold">
                Starting at $<strong>20.00</strong>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 py-4 sm:py-5 leading-tight sm:leading-18">
                Explore Jackets <br /> sale for Men's
              </h2>
              <button className="btn bg-[#516EBF] text-white font-semibold px-6 sm:px-8 py-3 mt-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
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