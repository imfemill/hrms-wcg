import "swiper/css";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function VerticalCarousel({ setDate, date }) {
  const handleSlideChange = (swiper) => {
    setDate((date) => {
      return { ...date, month: swiper.activeIndex };
    });
    // setDate(swiper.activeIndex);
  };
  return (
    <div className="h-[600px] w-[300px]">
      <div className="swiper-button-prev  flex justify-center">
        {" "}
        <ChevronUpIcon
          className={`ml-2 h-10 w-10 text-wcg_navy/70 hover:text-wcg_blue `}
          aria-hidden="true"
        />
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        mousewheel={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
        }}
        initialSlide={date.month}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
        slideClass="swiper-slide" // Set class for non-active slides
        slideActiveClass="swiper-slide-active" // Set class for active slide
      >
        {/* Slides */}
        <SwiperSlide>January</SwiperSlide>
        <SwiperSlide>February</SwiperSlide>
        <SwiperSlide>March</SwiperSlide>
        <SwiperSlide>April</SwiperSlide>
        <SwiperSlide>May</SwiperSlide>
        <SwiperSlide>June</SwiperSlide>
        <SwiperSlide>July</SwiperSlide>
        <SwiperSlide>August</SwiperSlide>
        <SwiperSlide>September</SwiperSlide>
        <SwiperSlide>October</SwiperSlide>
        <SwiperSlide>November</SwiperSlide>
        <SwiperSlide>December</SwiperSlide>
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-button-next  flex justify-center text-3xl ">
        {" "}
        <ChevronDownIcon
          className={`ml-2 h-10 w-10 text-wcg_navy/70  hover:text-wcg_blue`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
