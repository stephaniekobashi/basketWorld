import React from "react";
import ClubCardQ7c from "./ClubCardQ7c";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useState, useEffect } from "react";
const ClubCarousel = () => {
  let [datasq7c, setq7c] = useState([]);
  useEffect(() => {
    getQ7c();
  }, []);

  let getQ7c = async () => {
    let response = await fetch("/api/clubs/q7c");
    let data = await response.json();
    setq7c(data);
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
        {datasq7c.map((post) => (
          <SwiperSlide key={post.ID_club}>
            <ClubCardQ7c
              id={post.ID_club}
              nom={post.NOMCLUB}
              Combien={post.Combien}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClubCarousel;
