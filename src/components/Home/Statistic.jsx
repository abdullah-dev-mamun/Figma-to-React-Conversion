import React from "react";
const StatisticCardData = [
  {
    id: 1,
    img: "/images/order-received.svg",
    title: "7540",
    des: "Order Received",
    color: "#F75757",
  },
  {
    id: 2,
    img: "/images/deliverd.svg",
    title: "7540",
    des: "Today Delivered",
    color: "#78D25B",
  },
  {
    id: 3,
    img: "/images/customer.svg",
    title: "9846",
    des: "New Customer",
    color: "#6257F7",
  },
  {
    id: 4,
    img: "/images/earning.svg",
    title: "42750",
    des: "Net Earning",
    color: "#FA9441",
  },
  {
    id: 5,
    img: "/images/daily-sales.svg",
    title: "Total: 9765",
    des: "Daily sales",
    color: "#78D25B",
  },
  {
    id: 6,
    img: "/images/daily-sales.svg",
    title: "Total: 6765",
    des: "daily-expense",
    color: "#F75757",
  },
];

const Statistic = () => {
  return (
    <div className="mt-10">
      <p className="mb-2">Statistic</p>
      <div className="grid grid-cols-2 gap-3">
        {StatisticCardData.map((items, index) => {
          const { title, des, img, color } = items;

          return (
            <div key={index} className="bg-dark-primary flex  items-center p-8">
              <img src={img} alt="" />
              <div className="ml-4">
                <h2 style={{ color: color }} className="text-3xl font-bold">
                  {title}
                </h2>
                <p className="">{des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistic;
