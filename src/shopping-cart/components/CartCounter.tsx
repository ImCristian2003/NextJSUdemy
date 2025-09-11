"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  initialValue?: number;
}

export const CartCounter = ({ initialValue = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(initialValue));
  }, [dispatch, initialValue]);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-4 mt-4">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 cursor-pointer transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-500 cursor-pointer transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  );
};
