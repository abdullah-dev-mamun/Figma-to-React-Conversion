import React from "react";

const Congratulation = () => {
  return (
    <div className="bg-dark-primary p-12 text-center flex justify-center flex-col items-center">
      <img src="/images/congratulation.svg" alt="" />
      <h1 className="text-[40px] font-bold mt-2">
        15<span className="text-xl font-normal ml-1">th</span> Years
      </h1>
      <h2 className="font-semibold text-lg mb-2">
        This Year Winner to Tomatus.{" "}
        <span className="text-brand-primary">Congratulation!</span>
      </h2>
      <p className="w-full max-w-xl">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country.
      </p>
    </div>
  );
};

export default Congratulation;
