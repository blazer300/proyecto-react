import React, { useState } from "react";
import HeroSlide from "./HeroSlide";

const HeroContainer = () => {
  const slides = [
    {
      title: "Compramos Oro,Rolex,Brillantes ",
      subtitle: "El Mejor precio garantizado ",
      img: "https://bonhillgroup.com/wp-content/uploads/2021/09/vender-joyas-slider1.jpeg",
      id: 1,
    },
    {
      title: "Compramos Oro,Rolex,Brillantes",
      subtitle: "El Mejor precio garantizado",
      img: "https://mybruselas.com/web/wp-content/uploads/2021/08/slide-nueva-bruselas-joyeria-contemporanea-5.png",
      id: 2,
    },
    {
      title: "Compramos Oro,Rolex,Brillantes",
      subtitle: "El Mejor precio garantizado ",
      img: "https://imgscf.slidemembers.com/docs/1/1/258/pearl_jewelry_presentation_templates_design_257489.jpg",
      id: 3,
    },
    {
      title: "Compramos Oro,Rolex,Brillantes",
      subtitle: "El Mejor precio garantizado ",
      img: "https://imgscf.slidemembers.com/docs/1/1/227/pearl_jewelry_google_slides_themes_templates_226685.jpg",
      id: 4,
    },
    {
      title: "Compramos Oro,Rolex,Brillantes",
      subtitle: "El Mejor precio garantizado ",
      img: "https://roibas.com/img/cms/slider-joyas-dia-de-la-madre.jpg",
      id: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const changeSlide = (i) => {
    setIndex(i);
  };
  return (
    <HeroSlide
      slide={slides[index]}
      changeSlide={changeSlide}
      arrayIndex={slides.map((el) => el.id)}
    />
  );
};

export default HeroContainer;
