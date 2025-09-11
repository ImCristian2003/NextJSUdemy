"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={count}
        subtitle="Cantidad de registros"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
