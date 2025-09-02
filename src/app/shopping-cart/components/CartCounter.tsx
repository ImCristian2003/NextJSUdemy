"use client";

import { useState } from "react";

interface Props {
  initialValue?: number;
}

export const CartCounter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue || 0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter === 0) return;
    else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex gap-4 mt-4">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 cursor-pointer transition-all w-[100px] mr-2"
          onClick={decrement}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 cursor-pointer transition-all w-[100px] mr-2"
          onClick={increment}
        >
          +1
        </button>
      </div>
    </>
  );
};
