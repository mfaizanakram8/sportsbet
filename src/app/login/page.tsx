"use client";

import Image from "next/image";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; // Import fade effect
import "swiper/css";
import "swiper/css/effect-fade"; // Import fade effect CSS
import { FaGoogle, FaTelegramPlane } from "react-icons/fa";

const images = ["/sign1.jpg", "/sign2.jpg", "/sign3.jpg"];

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Image Slider */}
      <div className="w-[35%] bg-green-900 hidden lg:flex items-center justify-center relative">
        <Swiper
          modules={[Autoplay, EffectFade]} // Apply modules
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade" // Apply fade effect
          loop={true}
          className="w-full h-screen"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={src}
                alt={`slide-${index}`}
                width={600}
                height={600}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-sm">We offer the best</p>
          <h2 className="text-xl font-bold">Live Games</h2>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-[65%] flex items-center justify-center bg-gray-900 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-white">Log in</h2>
          <p className="text-gray-400 text-[10px]">
            Don’t have an account?{" "}
            <Link href="/SignUp" className="text-blue-400 text-sm">
              Create an account
            </Link>
          </p>

          <div className="flex gap-2 mt-4">
            <button className="flex items-center gap-10 p-3 bg-transparent border border-gray-600 text-white w-1/2 rounded">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center gap-10 p-3 bg-transparent border border-gray-600 text-white w-1/2 rounded">
              <FaTelegramPlane /> Telegram
            </button>
          </div>

          <div className="relative mt-6 border-b border-gray-600">
            <span className="absolute left-1/2   transform -translate-x-1/2 bg-gray-900 px-2 text-gray-500">
              Or
            </span>
          </div>

          <form className="mt-6 ">
            <input
              type="text"
              placeholder="Username or email"
              className="w-full p-3  bg-transparent border-1 border-gray-600 text-white rounded"
            />
            <div className="relative mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-transparent border-1 border-gray-600 text-white rounded"
              />
              <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                To show
              </span>
            </div>
            <a href="#" className="text-blue-400 text-sm  ">
              Forgot your password?
            </a>
            <button className="w-full bg-green-500 p-3 mt-6 rounded text-white font-bold">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
