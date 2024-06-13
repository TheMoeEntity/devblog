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
import SliderPost from "../SliderPost";
import { PostDummy } from "../dummies";

const Hero = (): ReactElement => {
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
          900: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
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

        {PostDummy.map((post) => (
          <SwiperSlide key={post.id} className="relative w-full">
            <SliderPost data={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
