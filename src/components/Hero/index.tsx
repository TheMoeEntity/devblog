"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { type ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "@/app/post/components/svg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Hero = (): ReactElement => {
  const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/500/300?random=${randomId}`;
  };
  return (
    <section className="relative w-full h-full overflow-hidden bg-lightOne dark:bg-darkOne px-4 ">
      <Swiper
        className="w-full max-w-[1000px] h-fit  rounded-lg overflow-hidden"
        modules={[Navigation, Pagination]}
        pagination
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="z-20 absolute lg:top-8 top-0 flex justify-center items-center w-full px-4">
          <button className="swiper-button-prev bg-white fill-[white] w-[42px] h-[42px] rounded-l-lg  flex justify-center items-center">
            <ChevronLeft />
          </button>
          <button className="swiper-button-next bg-white fill-[white] w-[42px] h-[42px] rounded-r-lg flex justify-center items-center">
            <ChevronRight />
          </button>
        </div>
        <SwiperSlide className="relative w-full">
          <div className="relative flex justify-center items-center max-w-[1000px] rounded-lg overflow-hidden w-full h-[250px] lg:h-[300px]  mx-auto">
            <Image
              src={getRandomImageUrl()}
              alt="paragraph"
              className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <div className="relative flex justify-center items-center max-w-[1000px] rounded-lg overflow-hidden w-full h-[250px] lg:h-[300px]  mx-auto">
            <Image
              src={getRandomImageUrl()}
              alt="paragraph"
              className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <div className="relative flex justify-center items-center max-w-[1000px] rounded-lg overflow-hidden w-full h-[250px] lg:h-[300px]  mx-auto">
            <Image
              src={getRandomImageUrl()}
              alt="paragraph"
              className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <div className="relative flex justify-center items-center max-w-[1000px] rounded-lg overflow-hidden w-full h-[250px] lg:h-[300px]  mx-auto">
            <Image
              src={getRandomImageUrl()}
              alt="paragraph"
              className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <div className="relative flex justify-center items-center max-w-[1000px] rounded-lg overflow-hidden w-full h-[250px] lg:h-[300px]  mx-auto">
            <Image
              src={getRandomImageUrl()}
              alt="paragraph"
              className="transition transform hover:scale-105 rounded-lg overflow-hidden duration-300"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 800px) 355px, (max-width: 1200px) 1000px, 1000px"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
