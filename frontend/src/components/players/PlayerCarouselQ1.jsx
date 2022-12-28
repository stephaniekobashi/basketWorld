import React from "react";
import PlayerCardQ1 from "./PlayerCardQ1";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useState,useEffect } from "react";
const PlayerCarouselQ1 = () => {
  let [datasq1, setq1] = useState([]);
  useEffect(() => {
    getQ1();
  }, []);

  let getQ1 = async () => {
    let response = await fetch("/api/joueurs/q1");
    let data = await response.json();
    setq1(data);
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
        {datasq1.map((post) => (
          <SwiperSlide key={post.ID_JOUEUR}>
            <PlayerCardQ1
              id={post.ID_JOUEUR}
              nom={post.NOMJOUEUR}
              prenom={post.PRENOMJOUEUR}
              nationalite={post.NATIONALITE}
              point={post.PointsTotal}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlayerCarouselQ1;
