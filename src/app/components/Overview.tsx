import React from "react";
import { CarType } from "../utils/types";

type Props = {
  car: CarType;
};

const Overview = ({ car }: Props) => {
  //nesneyi diziye çevir
  const arr = Object.entries(car).filter(
    (i) => i[0] !== "_id" && i[0] !== "imageUrl"
  );


  return (
    <div className="bg-white">
      <div className="grid  md:grid-cols-2 mt-5 gap-5">
        {arr.map(([key, value]) => (
          <p className="flex justify-between capitalize" key={key}>
            <span>{key}</span>
            <span className="font-semibold">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Overview;
