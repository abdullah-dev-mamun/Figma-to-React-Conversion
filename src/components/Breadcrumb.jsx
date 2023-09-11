import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
const BreadcrumbItems = [
  {
    id: 1,
    item: "Home",
    path: "/",
  },

  {
    id: 2,
    item: "Food",
    path: "/food",
  },
];

const CheckHome = ({ item, isHome = false }) => {
  console.log("location", item);
  return (
    <>
      <a
        href={item.path}
        className={`text-base font-medium transition-all duration-300 ease-in-out ${
          !isHome ? "text-brand-primary pointer-events-none" : "text-white"
        }`}
      >
        {item?.title}
      </a>

      <svg
        className=""
        width="8"
        height="17"
        viewBox="0 0 8 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.12718 0.859863L7.98697 1.59553L2.10165 16.4738L0.241864 15.7381L6.12718 0.859863Z"
          fill="#fff"
        />
      </svg>
    </>
  );
};

const Breadcrumb = () => {
  const location = useLocation();

  return (
    <nav className="flex my-4">
      <div className="flex items-center truncate space-x-1 md:space-x-2 [&>*:last-child]:hidden [&>*:last-child]:text-red-500">
        <CheckHome
          isHome={true}
          item={{
            id: 1,
            title: "Home",
            path: "/",
          }}
        />
        {location.pathname.split("/")[1] && (
          <CheckHome
            item={{
              id: 1,
              title: location.pathname.split("/")[1],
              path: location.pathname,
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Breadcrumb;
