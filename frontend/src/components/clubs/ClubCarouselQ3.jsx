import React from "react";
import ClubCardQ3 from "./ClubCardQ3";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useState, useEffect } from "react";
const ClubCarouselQ3 = () => {
  let [datasq3, setq3] = useState([]);
  useEffect(() => {
    getQ3();
  }, []);

  let getQ3 = async () => {
    let response = await fetch("/api/clubs/q3");
    let data = await response.json();
    setq3(data);
  };
  return (
    <div className="containerpy-4 justify-content bg-dark">
      <Swiper
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {datasq3.map((post) => (
          <SwiperSlide key={post.ID_CLUB}>
            <ClubCardQ3
              id={post.ID_CLUB}
              nom={post.NOMCLUB}
              avTail={post.avg}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClubCarouselQ3;
