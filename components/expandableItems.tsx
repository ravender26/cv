"use client";

import React, { useState } from "react";
import "./Component.css";

const imgArr = [
  "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg",
  "https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19598320/pexels-photo-19598320/free-photo-of-cathedral-basilica-in-leon-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23279639/pexels-photo-23279639/free-photo-of-a-solar-eclipse-is-seen-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/22669930/pexels-photo-22669930/free-photo-of-a-building-with-windows-and-balconies-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19183351/pexels-photo-19183351/free-photo-of-scenic-navagio-beach-on-zakynthos-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23383925/pexels-photo-23383925/free-photo-of-a-small-white-boat-floating-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23105931/pexels-photo-23105931/free-photo-of-black-and-white-photo-of-a-lighthouse-on-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg",
  "https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19598320/pexels-photo-19598320/free-photo-of-cathedral-basilica-in-leon-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23279639/pexels-photo-23279639/free-photo-of-a-solar-eclipse-is-seen-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/22669930/pexels-photo-22669930/free-photo-of-a-building-with-windows-and-balconies-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19183351/pexels-photo-19183351/free-photo-of-scenic-navagio-beach-on-zakynthos-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23383925/pexels-photo-23383925/free-photo-of-a-small-white-boat-floating-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23105931/pexels-photo-23105931/free-photo-of-black-and-white-photo-of-a-lighthouse-on-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg",
  "https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19598320/pexels-photo-19598320/free-photo-of-cathedral-basilica-in-leon-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23279639/pexels-photo-23279639/free-photo-of-a-solar-eclipse-is-seen-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/22669930/pexels-photo-22669930/free-photo-of-a-building-with-windows-and-balconies-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19183351/pexels-photo-19183351/free-photo-of-scenic-navagio-beach-on-zakynthos-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23383925/pexels-photo-23383925/free-photo-of-a-small-white-boat-floating-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/23105931/pexels-photo-23105931/free-photo-of-black-and-white-photo-of-a-lighthouse-on-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const ExpandableItems: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleHover = (index: number) => {
      setExpandedIndex(index);
    };
  
    const handleMouseLeave = () => {
      setExpandedIndex(null);
    };
  
    return (
      <div className="parent">
        {imgArr.map((url, index) => (
          <div
            key={index}
            className="child"
            style={{
              backgroundImage: `url(${url})`,
              height: '200px',
              flexGrow: expandedIndex === index ? 3 : 1,
              transition: 'flex-grow 0.2s ease-in-out'
            }}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
          >
          </div>
        ))}
      </div>
    );
};

export default ExpandableItems;
