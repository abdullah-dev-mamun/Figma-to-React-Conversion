import React, { Fragment } from "react";

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

const Breadcrumb = () => {
  return (
    <nav className="flex my-4">
      <div className="flex items-center truncate space-x-1 md:space-x-2 [&>*:last-child]:hidden [&>*:last-child]:text-red-500">
        {BreadcrumbItems.map((props, index) => {
          const { item, path } = props;
          return (
            <Fragment key={index}>
              <a
                href={path}
                className={`text-base font-medium transition-all duration-300 ease-in-out ${
                  BreadcrumbItems.length === index + 1
                    ? "text-brand-primary pointer-events-none"
                    : "text-white"
                }`}
              >
                {item}
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
            </Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
