import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { ServiceData } from "../../constants/constants";

const ServiceSection = () => {
  return (
    <>
      <h1 className="font-bold text-2xl my-6 flex">
        SERVIÇOS <ArrowRight className="w-[35px] h-[35px] text-white " />
      </h1>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // Quando a tela tiver 640px ou mais (tablets e desktops)
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // Quando a tela tiver 1024px ou mais (desktops maiores)
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.content} </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServiceSection;
