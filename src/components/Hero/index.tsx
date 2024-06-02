"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {type ReactElement } from "react";

const Hero = (): ReactElement => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    draggable: true, // Enables dragging
    swipeToSlide: true, // Enables swipe navigation
    responsive: [
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440, // xl
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const images = [
    "https://demo.birdwp.com/halva/wp-content/uploads/2024/01/sincerely-media-h140-unsplash.jpg",
  ];
  const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/500/300?random=${randomId}`;
  };
  return (
    <section className="relative w-full h-full">
      <Slider className="relative w-full flex gap-x-2" {...settings}>
        {/* <div className="absolute top-5 left-1/2 -translate-x-1/2 shadow-xl"></div> */}
        <div className="relative slick-list w-full h-[350px]">
          <Image
            src={getRandomImageUrl()}
            quality={100}
            className="w-full rounded-tl-2xl rounded-tr-2xl h-auto object-cover outline-none border-none"
            alt="Slide 1"
            fill
          />
        </div>
        <div className="relative slick-list w-full h-[350px]">
          <Image
            src={getRandomImageUrl()}
            quality={100}
            className="w-full rounded-tl-2xl rounded-tr-2xl h-auto object-cover outline-none border-none"
            alt="Slide 1"
            fill
          />
        </div>
        <div className="relative slick-list w-full h-[350px]">
          <Image
            src={getRandomImageUrl()}
            quality={100}
            className="w-full rounded-tl-2xl rounded-tr-2xl h-auto object-cover outline-none border-none"
            alt="Slide 1"
            fill
          />
        </div>
        <div className="relative slick-list w-full h-[350px]">
          <Image
            src={getRandomImageUrl()}
            quality={100}
            className="w-full rounded-tl-2xl rounded-tr-2xl h-auto object-cover outline-none border-none"
            alt="Slide 1"
            fill
          />
        </div>
        <div className="relative slick-list w-full h-[350px]">
          <Image
            src={getRandomImageUrl()}
            quality={100}
            className="w-full rounded-tl-2xl rounded-tr-2xl h-auto object-cover outline-none border-none"
            alt="Slide 1"
            fill
          />
        </div>
        <div className="relative slick-list w-full h-[350px]">
          <Image
            src={getRandomImageUrl()}
            quality={100}
            className="w-full rounded-tl-2xl rounded-tr-2xl h-auto object-cover outline-none border-none"
            alt="Slide 1"
            fill
          />
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
