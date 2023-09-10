import React from "react";

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
        <table className="w-full">
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
            <tr className="bg-dark-primary">
              <td className="p-6">Inverness McKenzie</td>
              <td className="p-6">#746815</td>
              <td className="p-6">Plain Pizza</td>
              <td className="p-6">06</td>
              <td className="p-6 text-success">$44.75</td>
              <td className="p-6 text-center">
                <div className="bg-success px-3 py-1 rounded-full">Paid</div>
              </td>
            </tr>
            <tr className="bg-dark-primary">
              <td className="p-6">Inverness McKenzie</td>
              <td className="p-6">#746815</td>
              <td className="p-6">Plain Pizza</td>
              <td className="p-6">06</td>
              <td className="p-6 text-success">$44.75</td>
              <td className="p-6 text-center">
                <div className="bg-success px-3 py-1 rounded-full">Paid</div>
              </td>
            </tr>
            <tr className="bg-dark-primary">
              <td className="p-6">Inverness McKenzie</td>
              <td className="p-6">#746815</td>
              <td className="p-6">Plain Pizza</td>
              <td className="p-6">06</td>
              <td className="p-6 text-brand-primary">$44.75</td>
              <td className="p-6 text-center">
                <div className="bg-brand-primary px-3 py-1 rounded-full">
                  Cancle
                </div>
              </td>
            </tr>
            <tr className="bg-dark-primary">
              <td className="p-6">Inverness McKenzie</td>
              <td className="p-6">#746815</td>
              <td className="p-6">Plain Pizza</td>
              <td className="p-6">06</td>
              <td className="p-6 text-brand-primary">$44.75</td>
              <td className="p-6 text-center">
                <div className="bg-brand-primary px-3 py-1 rounded-full">
                  Cancle
                </div>
              </td>
            </tr>
            <tr className="bg-dark-primary">
              <td className="p-6">Inverness McKenzie</td>
              <td className="p-6">#746815</td>
              <td className="p-6">Plain Pizza</td>
              <td className="p-6">06</td>
              <td className="p-6 text-brand-tertiary">$44.75</td>
              <td className="p-6 text-center">
                <div className="bg-brand-tertiary px-3 py-1 rounded-full">
                  Pending
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
