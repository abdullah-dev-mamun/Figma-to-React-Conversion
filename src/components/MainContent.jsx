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
      <div className="w-full h-8 bg-dark-primary py-8 px-6 flex justify-between items-center">
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
    </>
  );
};

export default MainContent;
