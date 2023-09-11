import React from "react";
const TableBodyData = [
  {
    id: 1,
    customerName: "Inverness McKenzie",
    productId: "746815",
    product: "Plain Pizza",
    quantity: "06",
    price: "44.75",
    status: "Paid",
    btnColor: "bg-success",
  },
  {
    id: 2,
    customerName: "Inverness McKenzie",
    productId: "746815",
    product: "Plain Pizza",
    quantity: "06",
    price: "44.75",
    status: "Paid",
    btnColor: "bg-success",
  },
  {
    id: 3,
    customerName: "Inverness McKenzie",
    productId: "746815",
    product: "Plain Pizza",
    quantity: "06",
    price: "44.75",
    status: "Cancel",
    btnColor: "bg-brand-primary",
  },
  {
    id: 4,
    customerName: "Inverness McKenzie",
    productId: "746815",
    product: "Plain Pizza",
    quantity: "06",
    price: "44.75",
    status: "Pending",
    btnColor: "bg-brand-tertiary",
  },
  {
    id: 5,
    customerName: "Inverness McKenzie",
    productId: "746815",
    product: "Plain Pizza",
    quantity: "06",
    price: "44.75",
    status: "Pending",
    btnColor: "bg-brand-tertiary",
  },
];

const OrderList = () => {
  return (
    <div className="col-span-2">
      <div className="flex justify-between items-center">
        <p className="mb-2">Receive Order Lists</p>
        <button type="button" className="kebab_menu flex gap-2">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="w-full overflow-x-auto scrollbar mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Customer</th>
              <th className="px-6 py-3 text-left font-semibold">Order ID</th>
              <th className="px-6 py-3 text-left font-semibold">Product</th>
              <th className="px-6 py-3 text-left font-semibold">Quantity</th>
              <th className="px-6 py-3 text-left font-semibold">Price</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="mb-12">
            {TableBodyData.map((items, i) => {
              const {
                customerName,
                productId,
                product,
                quantity,
                price,
                status,
                btnColor,
              } = items;
              return (
                <tr
                  key={i}
                  className="bg-dark-primary border-b-[8px] border-dark-tertiary"
                >
                  <td className="p-6">{customerName}</td>
                  <td className="p-6">#{productId}</td>
                  <td className="p-6">{product}</td>
                  <td className="p-6">{quantity}</td>
                  <td className="p-6 text-success">${price}</td>
                  <td className="p-6 text-center">
                    <div className={`px-3 py-1 rounded-full ${btnColor}`}>
                      {status}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
