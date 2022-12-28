import React from "react";
import ClubCardQ7a from "./ClubCardQ7a";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useState, useEffect } from "react";
const ClubCarousel = () => {
  let [datasq7a, setq7a] = useState([]);
  useEffect(() => {
    getQ7a();
  }, []);

  let getQ7a = async () => {
    let response = await fetch("/api/clubs/q7a");
    let data = await response.json();
    setq7a(data);
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
        {datasq7a.map((post) => (
          <SwiperSlide key={post.ID_club}>
            <ClubCardQ7a
              id={post.ID_club}
              nom={post.NOMCLUB}
              season={post.season}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClubCarousel;
