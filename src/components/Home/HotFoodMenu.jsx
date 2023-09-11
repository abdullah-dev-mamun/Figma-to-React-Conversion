import React from "react";
const HopMenutableData = [
  {
    id: 1,
    data: "Chicken Burger",
    price: 44.75,
    color: "#78d25b",
  },
  {
    id: 2,
    data: "Hot Dog",
    price: 28.55,
    color: "#f75757",
  },
  {
    id: 3,
    data: "Soft Drinks",
    price: 68.75,
    color: "#f75757",
  },
  {
    id: 4,
    data: "Jumbo Burger",
    price: 28.55,
    color: "#78d25b",
  },
  {
    id: 5,
    data: "Thai Soup",
    price: 68.75,
    color: "#f75757",
  },
];

const HotFoodMenu = () => {
  return (
    <div className="col-span-1">
      <div className="flex justify-between items-center">
        <p className="mb-2">Hot Food Menu</p>
        <button type="button" className="kebab_menu flex gap-2">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <table className="bg-dark-primary w-full mt-4 text-sm">
        <tbody>
          {HopMenutableData.map((items, index) => {
            const { data, price, color } = items;
            return (
              <tr key={index} className="border-b-[1px] border-dark-secondary">
                <td className="p-6">{data}</td>
                <td className="p-6 text-center mx-auto  flex justify-center">
                  <div
                    style={{ backgroundColor: color }}
                    className="bg-success  min-w-[100px] max-w-[150px] p-2 rounded-full"
                  >
                    ${price}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HotFoodMenu;
