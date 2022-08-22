import React, { useState, useRef } from "react";
import "./Menu.scss";

import { LandingHead } from "../../Main Components";
import Item from "./MenuItem/Item";

import { CgArrowRight, CgArrowLeft } from "../../icons";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const Data = {
  Starters: [
    {
      name: "Mozzarella Dippers",
      price: "27$",
      madeOf: "Fried mozzarella sticks, marinara sauce",
    },
    {
      name: "Onion Rings",
      price: "32$",
      madeOf: "Fried onion rings, smoked aioli",
    },
    {
      name: "Fried Jalapeno",
      price: "52$",
      madeOf: "Fried jalapeno pickles, cheddar sauce",
    },
    {
      name: "Buffalo Wings",
      price: "37$",
      madeOf: "Spicy chicken wings, blue cheese sauce, carrot, celery",
    },
    {
      name: "Chilli Con Carne",
      price: "32$",
      madeOf: "Spicy ground beef, bacon, kidney beans",
    },
    {
      name: "Potato Skins",
      price: "42$",
      madeOf: "Crispy potato skins; bacon & cheddar or vegetables",
    },
  ],
  Mains: [
    {
      name: "Rusty’s Burger",
      price: "27$",
      madeOf: "Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion",
    },
    {
      name: "Cajun Fish Steak",
      price: "32$",
      madeOf: "Cajun spicied seabass, deep fried baby potatoes, side salad",
    },
    {
      name: "Southern Fried Chicken",
      price: "52$",
      madeOf: "Cajun coated chicken breast, fries and honey mustard",
    },
    {
      name: "Crab Cake",
      price: "37$",
      madeOf: "Breaded crab cakes, tartar sauce, apple and fennel salad",
    },
    {
      name: "Baby Back Ribs",
      price: "32$",
      madeOf: "Bbq glazed baby pork ribs, coleslaw, fries",
    },
    {
      name: "Smokehouse Combo",
      price: "42$",
      madeOf: "Smoked beef brisket, rib and sausage, coleslaw, cornbread",
    },
  ],
  Salads: [
    {
      name: "Ceaser Salad",
      price: "27$",
      madeOf: "Romaine lettuce, croutons, parmigiano, Ceaser dressing.",
    },
    {
      name: "Waldorf Salad",
      price: "32$",
      madeOf: "Lettuce, celery, apple, grape, walnut, waldorf sauce",
    },
    {
      name: "Quinoa & Avocado Salad",
      price: "52$",
      madeOf: "Quinoa, avocado, mixed greens. Nuts, dried and fresh fruits",
    },
    {
      name: "Grilled Salmon Salad",
      price: "37$",
      madeOf: "Grilled salmon, mixed greens, capers, orange slices",
    },
    {
      name: "Chicken Cobb Salad",
      price: "32$",
      madeOf: "Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon",
    },
    {
      name: "Salad Chicken",
      price: "42$",
      madeOf: "Ceaser dressing. Optional grilled chicken breast",
    },
  ],
  Wine: [
    {
      name: "Château d'Yquem 2011",
      price: "400$",
      madeOf: "Dessert Wine, Bordeaux, Graves, Sauternes",
    },
    {
      name: "Alvear Cream NV",
      price: "30$",
      madeOf: "Dessert, Fortified Wine, Andalucia",
    },
    {
      name: "Chateau D'yquem 1990",
      price: "900$",
      madeOf: "Dessert Wine, Bordeaux, Graves, Sauternes",
    },
    {
      name: "La Grande Année 2007",
      price: "400$",
      madeOf: "Rosé, Champagne",
    },
    {
      name: "Sine Qua Non 2012",
      price: "520$",
      madeOf: "Syrah, Shiraz & Blends, California",
    },
    {
      name: "W.S. Keyes Winery 2006",
      price: "240$",
      madeOf: "Merlot, California, Napa, Howell Mountain",
    },
  ],
  Breakfast: [
    {
      name: "Egg Benedict",
      price: "60$",
      madeOf: "English muffin, beef, hollandaise sauce, poached egg.",
    },
    {
      name: "Texas Benedict",
      price: "30$",
      madeOf: "English muffin, short ribs, bbq sauce, poached egg.",
    },
    {
      name: "Rusty’s Omlette",
      price: "22$",
      madeOf: "Mozzarella, cheddar, caramelized onion, black beans.",
    },
    {
      name: "Salmon Bagel",
      price: "30$",
      madeOf: "Smoked salmon, cream cheese, dill, rocket, red onion.",
    },
    {
      name: "Breakfast Bagel",
      price: "33$",
      madeOf: "Chocolate, marshmallow, biscuit bar",
    },
    {
      name: "Rusty’s Pancake",
      price: "40$",
      madeOf: "Strawberry, white chocolate, dark chocolate, crispearls",
    },
  ],
  Dessert: [
    {
      name: "Bourbon Pecan Pie",
      price: "67$",
      madeOf: "Bourbon pecan stuffed pie, vanilla ice-cream",
    },
    {
      name: "New York Cheesecake",
      price: "50$",
      madeOf: "Cheesecake, strawberry & lime salad",
    },
    {
      name: "Rusty’s ice-cream",
      price: "32$",
      madeOf: "Vanilla, bourbon, cookie, chocolate ice-cream.",
    },
    {
      name: "S’mores40",
      price: "40$",
      madeOf: "Chocolate chip cookies, marshmallow, chocolate",
    },
    {
      name: "Rocky Road",
      price: "42$",
      madeOf: "Chocolate, marshmallow, biscuit bar",
    },
    {
      name: "Apple & Pear Crumble",
      price: "40$",
      madeOf: "Caramelized pear and apple, oat crumble, vanilla ice-cream",
    },
  ],
};

const Menu = () => {
  const [Active, setActive] = useState("Starters");

  const parentEle = useRef();
  const rightArrow = useRef();
  const leftArrow = useRef();

  const clickHandler = (e) => {
    Array.from(parentEle.current.children[0].children).forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    setActive(e.getAttribute("name"));
  };

  return (
    <section className="menu">
      <div className="container">
        <LandingHead small="LUXURY HOTEL" main="Restaurant Menu" />
        <article className="menu-tab">
          <Swiper
            ref={parentEle}
            className="menu-swiper"
            modules={[Navigation]}
            Navigation
            loop={true}
            speed={300}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: leftArrow.current,
              nextEl: rightArrow.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = leftArrow.current;
              swiper.params.navigation.nextEl = rightArrow.current;
            }}
          >
            <SwiperSlide
              name="Starters"
              onClick={(e) => clickHandler(e.currentTarget)}
            >
              <h4 className="menu-category">Starters</h4>
            </SwiperSlide>
            <SwiperSlide
              name="Mains"
              onClick={(e) => clickHandler(e.currentTarget)}
            >
              <h4 className="menu-category">Mains</h4>
            </SwiperSlide>
            <SwiperSlide
              name="Salads"
              onClick={(e) => clickHandler(e.currentTarget)}
            >
              <h4 className="menu-category">Salads</h4>
            </SwiperSlide>
            <SwiperSlide
              name="Wine"
              onClick={(e) => clickHandler(e.currentTarget)}
            >
              <h4 className="menu-category">Wine</h4>
            </SwiperSlide>
            <SwiperSlide
              name="Breakfast"
              onClick={(e) => clickHandler(e.currentTarget)}
            >
              <h4 className="menu-category">Breakfast</h4>
            </SwiperSlide>
            <SwiperSlide
              name="Dessert"
              onClick={(e) => clickHandler(e.currentTarget)}
            >
              <h4 className="menu-category">Dessert</h4>
            </SwiperSlide>
            <div ref={rightArrow} className="arrow right">
              <CgArrowRight className="arrowIcon" />
            </div>
            <div ref={leftArrow} className="arrow left">
              <CgArrowLeft className="arrowIcon" />
            </div>
          </Swiper>
        </article>
        <section className="menu-items">
          <div className="row">
            <Item menuData={Data[Active]} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Menu;
