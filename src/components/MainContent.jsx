import React from "react";
import Breadcrumb from "./Breadcrumb";
import Statistic from "./Home/Statistic";
import CustomerFeed from "./Home/CustomerFeed";
import Congratulation from "./Home/Congratulation";
import OrderList from "./Home/OrderList";
import HotFoodMenu from "./Home/HotFoodMenu";
import EarningGraph from "./Home/EarningGraph";

const MainContent = () => {
  return (
    <>
      <div className="w-[85%] md:w-[70%] lg:w-[80%] px-3 text-white h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto">
        <div className="w-full h-8 bg-dark-primary p-4 flex justify-between items-center">
          <p className="text-brand-primary">Food</p>
          <Breadcrumb />
        </div>
        <section className="p-6 grid grid-cols-2 gap-8">
          <div>
            <Congratulation />
            <Statistic />
          </div>
          <div>
            <EarningGraph />
            <CustomerFeed />
          </div>
        </section>
        <section className="p-6 grid grid-cols-3 gap-8">
          <OrderList />
          <HotFoodMenu />
        </section>
      </div>
    </>
  );
};

export default MainContent;
