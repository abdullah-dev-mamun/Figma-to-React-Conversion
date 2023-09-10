import React from "react";
const CustomerFeedData = [
  {
    id: 1,
    img: "/images/user.png",
    name: "Inverness McKenzie",
    des: "New Food Menu wes Awesome",
    time: "5 Min ago",
  },
  {
    id: 2,
    img: "/images/user.png",
    name: "Rodney Artichoke",
    des: "Great support, like it veru much",
    time: "10 Min ago",
  },
  {
    id: 3,
    img: "/images/user.png",
    name: "Indigo Violet",
    des: "We like your birthday ckae",
    time: "5 Min ago",
  },
  {
    id: 4,
    img: "/images/user.png",
    name: "Hermann P. Schnitzel",
    des: "Awesome Food Menu",
    time: "25 Min ago",
  },
];

const CustomerFeed = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <p className="mb-2">Statistic</p>
        <button type="button" className="mb-2">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {CustomerFeedData.map((items, index) => {
          const { name, des, img, time } = items;

          return (
            <div
              key={index}
              className="bg-dark-primary flex items-center justify-between py-4 px-8"
            >
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={img} alt="" />
                <div className="ml-4">
                  <h2 className="text-base font-bold">{name}</h2>
                  <p className="">{des}</p>
                </div>
              </div>
              <p className="bg-dark-tertiary text-sm px-6 py-3 rounded-full">
                {time}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerFeed;
