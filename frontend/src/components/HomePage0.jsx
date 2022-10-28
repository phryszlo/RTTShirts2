import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../pages/HomePage.css";
import Carousel from 'react-bootstrap/Carousel';

function HomePage0({ addToCart }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <>
      <div className="carousel">
      <Carousel variant="light" className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="carouselImage"
            src="https://cdn.discordapp.com/attachments/1034195339739148308/1034914687239860225/22.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="carouselImage"
          src="https://cdn.discordapp.com/attachments/1034195339739148308/1034919968237699152/4.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src="https://cdn.discordapp.com/attachments/1034195339739148308/1034914687239860225/22.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
    </div>

      <div className="productContainer">
        <div className="shirtContainer" id = "shirtOne">
          <div className="shirtImage">
            {" "}
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084326531092/1.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> Our original T-shirt design, in a trendy and eye-catching grey </div>
          <button type="button" className="add-to-cart-btn" id="1" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
        </div>
        <div className="shirtContainer" id="shirtTwo">
          <div className="shirtImage" >
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084628525056/2.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> A modern and professional take on our classic, revamped for the workplace. </div>
          <button type="button" className="add-to-cart-btn" id="2" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
        </div>
        <div className="shirtContainer" id="shirtThree">
          <div className="shirtImage">
            <img src="https://cdn.discordapp.com/attachments/1034195339739148308/1034917084951482368/3.jpg" className="shirt" alt=""></img>
          </div>
          <div className="itemDescrip"> This one is for girls. Its the same as the one before it, but different. </div>

          <button type="button" className="add-to-cart-btn" id="3" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
        </div>
      </div>
    </>
  );
}
export default HomePage0;