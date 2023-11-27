import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
export default function Slider() {
  const images = [
    { url: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/928000/pexels-photo-928000.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { url: "https://images.pexels.com/photos/7992686/pexels-photo-7992686.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  return (
    <div className="slider">
    <SimpleImageSlider
    // style={"sliderimg"}
    width={896}
    height={504}
    images={images}
    showBullets={true}
    showNavs={true}
    loop={true}
    autoPlayDelay={2}
    autoPlay={1}
  />
  </div>
  )
}
