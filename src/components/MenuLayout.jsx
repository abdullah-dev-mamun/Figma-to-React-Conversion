import React from "react";
import Breadcrumb from "./Breadcrumb";

const productCardData = [
  {
    id: 1,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 1,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
  {
    id: 2,
    img: "/images/product-1.png",
    title: "Chicken Burger",
    price: 25.0,
  },
];

const MenuLayout = () => {
  return (
    <>
      <div className="w-full h-8 bg-dark-primary py-8 px-6 flex justify-between items-center">
        <p className="text-brand-primary">Menu Layout</p>
        <Breadcrumb />
      </div>

      <section className="p-6 mt-4">
        <div className="w-full h-8 bg-dark-primary p-10 pr-20 flex justify-between items-center mb-6 relative">
          <button
            type="button"
            className="menu_add absolute w-12 h-12 bg-brand-primary font-bold text-4xl rounded-full flex justify-center items-center -top-6 right-4"
          >
            +
          </button>
          <p className="text-brand-primary">Menu Item 1</p>
          <div className="flex gap-4">
            <img src="/images/menu-icon.svg" alt="" />
            <img src="/images/menu-icon.svg" alt="" />
            <img src="/images/menu-icon.svg" alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {productCardData.map((items, index) => {
            const { img, title, price } = items;
            return (
              <a
                href="#"
                className="bg-dark-primary flex justify-center items-center flex-col p-8 relative"
              >
                <button
                  type="button"
                  className="kebab_menu flex gap-1 flex-col absolute top-6 right-6"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div className="rounded-full w-32 h-32 bg-dark-tertiary flex justify-center items-center">
                  <img className="w-28" src={img} alt="" />
                </div>
                <h2>{title}</h2>
                <p>${price}</p>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MenuLayout;
