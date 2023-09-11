import React, { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="w-full h-8 bg-dark-primary py-8 px-6 flex justify-between items-center">
        <p className="text-brand-primary">Menu Layout</p>
        <Breadcrumb />
      </div>

      <section className="p-6 mt-4">
        <div className="w-full h-8 bg-dark-primary p-10 pr-20 flex justify-between items-center mb-6 relative">
          <button
            onClick={() => setShowModal(true)}
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

      {/* modal section */}
      {showModal && (
        <div
          className={`fixed top-0 left-0 w-full h-screen overflow-hidden bg-dark-tertiary/60 flex justify-center items-center`}
        >
          <div className="w-full max-w-3xl relative">
            <button
              type="button"
              className="absolute -right-3 -top-8 bg-brand-primary w-6 h-6 flex justify-center items-center rounded-sm focus:outline-none group transition-all duration-300 ease  hover:rounded-full"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="bg-dark-primary p-4 ">
              <p className="text-brand-primary">Add Menu List</p>
            </div>

            <div className="bg-dark-primary p-10 mt-4 flex items-start gap-8">
              {/* img section */}
              <div className="flex justify-center items-center flex-col gap-4">
                <div className="w-24 h-24 bg-dark-tertiary rounded-full flex justify-center items-center">
                  <img src="/images/add-item.svg" alt="" />
                </div>
                <p className="text-brand-primary">Add Product Image</p>
              </div>
              {/* input section */}
              <div className=" space-y-4">
                <div className="flex items-center">
                  <label
                    className="w-full max-w-[130px]  inline-block"
                    htmlFor="#"
                  >
                    Product Name:
                  </label>
                  <input
                    className="bg-transparent border ml-4 p-2 rounded-sm focus:outline-none w-72"
                    placeholder="Item . . ."
                    type="text"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    className="w-full max-w-[130px] inline-block"
                    htmlFor="#"
                  >
                    Product Price:
                  </label>
                  <input
                    className="bg-transparent border ml-4 p-2 rounded-sm focus:outline-none w-72"
                    placeholder="$0.00"
                    type="text"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    className="w-full max-w-[130px] inline-block"
                    htmlFor="#"
                  >
                    Product Category:
                  </label>
                  <select
                    className="w-full ml-4 bg-transparent border p-2 rounded-sm focus:outline-none"
                    name=""
                    id=""
                  >
                    <option className="bg-dark-tertiary" selected value="">
                      Category. . .
                    </option>
                    <option className="bg-dark-tertiary" value="">
                      Items One
                    </option>
                    <option className="bg-dark-tertiary" value="">
                      Items Two
                    </option>
                    <option className="bg-dark-tertiary" value="">
                      Items Three
                    </option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label
                    className="w-full max-w-[130px] inline-block"
                    htmlFor="#"
                  >
                    Product Details:
                  </label>
                  <textarea
                    className="bg-transparent border ml-4 p-2 rounded-sm focus:outline-none w-72"
                    placeholder="Description"
                    type="textarea"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-brand-primary text-white rounded-full py-2 px-6 text-sm"
                  >
                    Menu Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuLayout;
