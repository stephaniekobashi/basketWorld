import React from "react";
import PlayerCardQ2 from "./PlayerCardQ2";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import {useState,useEffect } from "react";
const PlayerCarouselQ2 = () => {
  let [datasq2, setq2] = useState([]);
  useEffect(() => {
    getQ2();
  }, []);

  let getQ2 = async () => {
    let response = await fetch("/api/joueurs/q2");
    let data = await response.json();
    setq2(data);
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
        {datasq2.map((post) => (
          <SwiperSlide key={post.ID_JOUEUR}>
            <PlayerCardQ2
              id={post.ID_JOUEUR}
              nom={post.NOMJOUEUR}
              prenom={post.PRENOMJOUEUR}
              Lancelibre={post.Lancelibre}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlayerCarouselQ2;
