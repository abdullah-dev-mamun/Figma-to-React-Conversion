import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import MainContent from "./MainContent";
const Menus = [
  {
    id: 1,
    menuName: "Dashboard",
    img: "/images/menu-icon.svg",
    path: "/",
    subMenu: [
      {
        id: 10,
        menuName: "Menu Layout",
        path: "",
      },
      {
        id: 11,
        menuName: "Order List",
        path: "",
      },
      {
        id: 12,
        menuName: "Chef Page",
        path: "",
      },
      {
        id: 13,
        menuName: "Customer Reviews",
        path: "",
      },
      {
        id: 14,
        menuName: "Upload Menu",
        path: "",
      },
    ],
  },
  {
    id: 2,
    menuName: "authentication pages",
    img: "/images/menu-icon.svg",
    path: "/",
    subMenu: [
      {
        id: 20,
        menuName: "Login",
        path: "",
      },
      {
        id: 21,
        menuName: "Register Now",
        path: "",
      },
      {
        id: 22,
        menuName: "Lock Screen",
        path: "",
      },
      {
        id: 23,
        menuName: "Recover Password",
        path: "",
      },
    ],
  },
  /* {
    id: 3,
    menuName: "Other pages",
    img: "/images/menu-icon.svg",
    path: "/",
  }, */
];

const SideNav = () => {
  return (
    <div className="w-[15%] md:w-[30%] lg:w-[20%] h-[calc(100vh-90px)] bg-dark-primary p-3 border-r border-dark-secondary">
      <p className="uppercase text-brand-primary">Main</p>
      <ul className="space-y-6">
        {Menus.map((item, index) => {
          const { menuName, img, path } = item;
          return (
            <li key={index}>
              {item.subMenu && item.subMenu.length ? (
                <>
                  <input
                    type="checkbox"
                    id={`label_id_${index}`}
                    className="peer absolute left-0 top-2 z-50 appearance-none"
                  />
                  <label
                    htmlFor={`label_id_${index}`}
                    className="text-grayishCyan cursor-pointer flex items-center "
                  >
                    <div className="p-3 flex items-center  bg-dark-tertiary w-full">
                      <img src={img} alt="Menu icon" />
                      <p className="ml-2 text-brand-primary">{menuName}</p>
                    </div>
                  </label>

                  <ul className="mt-3 hidden peer-checked:block ml-10">
                    {item.subMenu.map((subitem, subIndex) => {
                      const { menuName, path } = subitem;
                      return (
                        <li key={subIndex + index} className="mb-5 last:mb-0">
                          <Link
                            className="text-grayishCyan hover:text-brand-primary active:hover:text-brand-primary transition-all duration-200 ease-in cursor-pointer"
                            href={path}
                          >
                            {menuName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <Link className="" href={path}>
                  <div className="p-3 flex items-center w-full">
                    <img src={img} alt="Menu icon" />
                    <p className="ml-2 text-brand-primary">{menuName}</p>
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
