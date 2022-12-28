import React from "react";
import ClubCardQ6 from "./ClubCardQ6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useState, useEffect } from "react";
const ClubCarouselQ6 = (props) => {
  const fetchId = props.id;
  let [datasq6, setq6] = useState([]);
  useEffect(() => {
    getQ6();
  }, []);

  let getQ6 = async () => {
    let response = await fetch("/api/clubs/q6/" + fetchId);
    let data = await response.json();

    // console.log(data);
    setq6(data);
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
        {datasq6.map((post) => (
          <SwiperSlide key={post.ID_Joueur}>
            <ClubCardQ6
              id={post.ID_Joueur}
              nom={post.NOMJOUEUR}
              prenom={post.PRENOMJOUEUR}
              pass={post.Passe}
              image={post.IMAGE}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClubCarouselQ6;
