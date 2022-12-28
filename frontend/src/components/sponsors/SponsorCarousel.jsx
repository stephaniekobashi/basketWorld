import React from "react";
import SponsorCardQ4 from "./SponsorCardQ4";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useState, useEffect } from "react";
const SponsorCarousel = () => {
  let [datasq4, setq4] = useState([]);
  useEffect(() => {
    getQ4();
  }, []);

  let getQ4 = async () => {
    let response = await fetch("/api/sponsors/q4");
    let data = await response.json();
    setq4(data);
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
        {datasq4.map((post) => (
          <SwiperSlide key={post.id_sponsor}>
            <SponsorCardQ4
              id={post.id_sponsor}
              pays={post.PAYS}
              nom={post.NOMSPONSOR}
              season={post.season}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorCarousel;
