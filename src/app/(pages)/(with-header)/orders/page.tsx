import OrderCard from "@/app/components/OrderCard";
import { getOrders } from "@/app/utils/service";

import React from "react";

const Orders = async () => {
  const { orders } = await getOrders();
  console.log(orders)

  return (
    <div className="min-h-screen bg-white">
      <div className=' h-[70px] md:h-[110px] bg-black "'></div>

      <div className="container text-black">
        <h1 className="text-3xl">Siparişlerim</h1>

        <div className="grid gap-10 mt-10">
          {orders.map((order, key) => (
            <OrderCard order={order} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
