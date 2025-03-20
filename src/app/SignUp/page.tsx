"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaGoogle, FaTelegramPlane } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";

const images = ["/sign3.jpg", "/sign4.jpg", "/sign5.jpg"];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const emailDomains = ["gmail.com", "hotmail.com", "orange.fr"];

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Image Slider */}
      <div className="w-[35%] bg-green-900 hidden lg:flex items-center justify-center relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
           effect="fade"
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image src={src} alt={`slide-${index}`} width={600} height={600} className="object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-sm">We offer the best</p>
          <h2 className="text-xl font-bold">Live Games</h2>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full lg:w-[65%] flex items-center justify-center bg-gray-900 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-white">Create your free account</h2>
          <p className="text-gray-400 text-[10px]">
            Already have an account? {" "}
            <Link href="/login" className="text-blue-400 text-sm">
              Log in
            </Link>
          </p>

          {/* Social Signup Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex items-center gap-10 p-3 bg-transparent border border-gray-600 text-white w-1/2 rounded">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center gap-10 p-3 bg-transparent border border-gray-600 text-white w-1/2 rounded">
              <FaTelegramPlane /> Telegram
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative mt-6 border-b border-gray-600">
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 text-gray-500">
              Or
            </span>
          </div>

          {/* Signup Form */}
          <form className="mt-6">
            <input type="text" placeholder="User name" className="w-full p-3 bg-transparent border border-gray-600 text-white rounded mb-4" />
            
            {/* Email Input with Suggestions */}
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-transparent border border-gray-600 text-white rounded mb-4"
              />
              {email && !email.includes("@") && (
                <ul className="absolute left-0 top-12 w-full bg-gray-800 text-white rounded shadow-lg">
                  {emailDomains.map((domain) => (
                    <li
                      key={domain}
                      onClick={() => setEmail(`${email}@${domain}`)}
                      className="p-2 cursor-pointer hover:bg-gray-700"
                    >
                      {email}@{domain}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input type="date" placeholder="Date of birth" className="w-full p-3 bg-transparent border border-gray-600 text-white rounded mb-4" />
            
            <select title="no" className="w-full p-3 bg-transparent border border-gray-600 text-white rounded mb-4">
              <option className="bg-gray-900">France (+33)</option>
              <option className="bg-gray-900">USA (+1)</option>
              <option className="bg-gray-900">UK (+44)</option>
            </select>

            <input type="tel" placeholder="Phone number (optional)" className="w-full p-3 bg-transparent border border-gray-600 text-white rounded mb-4" />

            {/* Checkboxes */}
           {/* Password Strength Indicator */}
<p className="text-red-500 text-sm">The password security level is <strong>Very weak</strong></p>

{/* Terms and Conditions Checkbox */}
<div className="flex items-start gap-2 text-gray-400 text-sm mb-4">
  <input type="checkbox" id="terms" className="mt-1" />
  <label htmlFor="terms">
    I confirm that I am at least 18 years old and accept the{" "}
    <Link href="#" className="font-bold text-white">Terms and Conditions</Link>
  </label>
</div>

{/* Signup Button */}
<button className="w-full bg-green-500 p-3 rounded text-white font-bold opacity-70 cursor-not-allowed">
  Create your free account
</button>

{/* Promotional Message */}
<p className="text-gray-400 text-xs mt-2">
  Spinwinners will send you exclusive offers, insights, promotional emails, and push notifications.
  You can unsubscribe in your account settings.
</p>

{/* Marketing Checkbox */}
<div className="flex items-start gap-2 text-gray-400 text-sm mt-4">
  <input type="checkbox" id="marketing" className="mt-1" checked />
  <label htmlFor="marketing">
    I agree to receive marketing communications about exclusive Sportsbet rewards and promotions.
  </label>
</div>
</form>
</div>
      </div>
    </div>
  );
}
