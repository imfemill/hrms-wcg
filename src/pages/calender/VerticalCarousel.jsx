import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";

export default function VerticalCarousel({ currentDate, setCurrentDate }) {
  const sliderRef = useRef();
  const [activeSlide, setActiveSlide] = useState(currentDate?.getMonth());
  useEffect(() => {
    // Update the active slide based on the month of the currentDate prop
    setActiveSlide(currentDate?.getMonth());
    sliderRef.current.swiper.slideTo(currentDate?.getMonth());
  }, [currentDate]);

  const handleSlideChange = (swiper) => {
    // Update the active slide when the Swiper component changes
    setActiveSlide(swiper.activeIndex);

    const activeIndex = swiper.activeIndex;
    const newDate = new Date(currentDate);
    newDate.setMonth(activeIndex);
    setCurrentDate(newDate);
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const handleSlideClick = (index) => {
    // Function to handle slide click
    sliderRef.current.swiper.slideTo(index); // Slide to the clicked index
  };
  return (
    <div className="h-[500px] w-[300px] ">
      {/* Previous button */}
      <div className="swiper-button-prev   flex justify-center items-center rounded-md cursor-pointer">
        <ChevronUpIcon
          className="h-8 w-8 text-wcg_navy/70 hover:text-wcg_blue"
          aria-hidden="true"
        />
      </div>

      {/* Swiper Container */}
      <Swiper
        ref={sliderRef}
        direction={"vertical"}
        slidesPerView={4}
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
        initialSlide={activeSlide}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
        slideClass="swiper-slide"
        slideActiveClass="swiper-slide-active"
      >
        {/* Slides */}
        {months.map((item, index) => (
          <SwiperSlide
            key={index}
            className="h-28 cursor-pointer"
            onClick={() => handleSlideClick(index)}
          >
            <div className="flex p-3 w-full h-full gap-5">
              <div className="w-3/12 bg-blue rounded-lg flex justify-center items-center bg-orange-100 border-2 border-orange-300 text-2xl font-semibold">
                {item}
              </div>
              <div className="flex flex-col justify-center gap-1">
                <div className="flex gap-1 items-center">
                  <div className="flex justify-center items-center font-bold text-red-900 rounded-full p-1 h-10 w-10 bg-red-100">
                    0
                  </div>
                  <div className="flex justify-center items-center font-bold text-green-900 rounded-full p-1 h-10 w-10 bg-green-100">
                    1
                  </div>
                  <div className="flex justify-center items-center font-bold text-yellow-900 rounded-full p-1 h-10 w-10 bg-yellow-100">
                    3
                  </div>
                </div>
                <div className="text-gray-600 text-sm">Days</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next button */}
      <div className="swiper-button-next  p-3 flex justify-center items-center rounded-md cursor-pointer">
        <ChevronDownIcon
          className="h-8 w-8 text-wcg_navy/70 hover:text-wcg_blue"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
