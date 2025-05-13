import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5 " alt="" />
          <p className="w-full text-gray-600 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            delectus ad libero soluta consequatur doloremque aliquid doloribus
            suscipit debitis iure impedit, fugit obcaecati atque incidunt
            eligendi neque voluptatum sapiente quos.
          </p>
        </div>
        <div>
            <p className="mb-5 text-xl font-medium">ORGANIZATION</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Private policy</li>
            </ul>
        </div>
        <div>
            <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-324-536-3546</li>
                <li>contact@fashionmart.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ forever.com</p>
      </div>
    </div>
  );
};

export default Footer;
