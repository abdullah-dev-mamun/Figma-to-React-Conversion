import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <div className="bg-dark-primary w-full h-20 text-white flex mb-[10px]">
        <div className="w-[15%] md:w-[30%] lg:w-[20%] flex justify-between items-center p-3 border-r border-dark-secondary">
          <Link className="hidden sm:block" to="/">
            <img
              className="w-24"
              src="/images/brand-logo.svg"
              alt="Brand logo"
            />
          </Link>
          <button
            type="button"
            className="relative group hover:bg-dark-semiLight/20 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 ease-in ring-0 ring-gray-300 hover:ring-[2px] md:hover:ring-[3px] ring-opacity-50"
          >
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 9.66699H1C0.447998 9.66699 0 9.21899 0 8.66699C0 8.11499 0.447998 7.66699 1 7.66699H23C23.552 7.66699 24 8.11499 24 8.66699C24 9.21899 23.552 9.66699 23 9.66699Z"
                fill="white"
              />
              <path
                d="M23 2H1C0.447998 2 0 1.552 0 1C0 0.447998 0.447998 0 1 0H23C23.552 0 24 0.447998 24 1C24 1.552 23.552 2 23 2Z"
                fill="white"
              />
              <path
                d="M23 17.333H1C0.447998 17.333 0 16.885 0 16.333C0 15.781 0.447998 15.333 1 15.333H23C23.552 15.333 24 15.781 24 16.333C24 16.885 23.552 17.333 23 17.333Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* right side */}
        <div className="w-[85%] md:w-[70%] lg:w-[80%] flex justify-between items-center p-3">
          <div className="p-2 relative flex items-center rounded-full bg-dark-tertiary overflow-hidden">
            <input
              className="peer h-full w-full outline-none text-sm text-white pl-3 pr-2 bg-transparent"
              type="text"
              id="search"
              placeholder="Search"
            />
            {/* search icon */}
            <button
              type="button"
              className="search_icon grid place-items-center h-full w-12 text-white  cursor-pointer transition-all duration-300 ease-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center ">
            <svg
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                fill="#f75757"
              />
            </svg>
            <img
              className="w-9 h-9 rounded-full ml-6 ring-2 ring-brand-secondary"
              src="/images/user.png"
              alt=""
            />
            <div>
              <button type="button" className="flex items-center p-2">
                Indigo Violet
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
