"use client";

import ListShoes from "../components/ShoesComponents/ListShoes";
import ItemCartShoe from "../components/ShoesComponents/ItemCartShoe";
import { shoesData } from "@/app/assets/data/shoesData";
import { useState } from "react";
import { cartShoeType } from "../types/cartShoeType";

export default function ShoesPage() {
  const [shoesArr, setShoesArr] = useState<cartShoeType[]>([]);
  const addToCart = (id: number) => {
    const cloneShoesArr = shoesArr;
    const index = cloneShoesArr.findIndex(item => {
      return item.id === id;
    });
    if (index === -1) {
      const newCartShoeItem = shoesData.find(item => item.id === id);
      if (newCartShoeItem) {
        setShoesArr([...cloneShoesArr, { ...newCartShoeItem, cartQuantity: 1 }]);
      }
    } else {
      cloneShoesArr[index].cartQuantity++;
      setShoesArr([...cloneShoesArr]);
    }
  };
  const addQuantity = (id: number) => {
    const cloneShoesArr = shoesArr;
    const index = cloneShoesArr.findIndex(item => item.id === id);
    cloneShoesArr[index].cartQuantity++;
    setShoesArr([...cloneShoesArr]);
  };
  const reduceQuantity = (id: number) => {
    const cloneShoesArr = shoesArr;
    const index = cloneShoesArr.findIndex(item => item.id === id);
    cloneShoesArr[index].cartQuantity--;
    if (cloneShoesArr[index].cartQuantity === 0) {
      removeFromCart(id);
    }
    setShoesArr([...cloneShoesArr]);
  };
  const removeFromCart = (id: number) => {
    const removeCartShoeItem = shoesArr.find(item => item.id === id);
    if (removeCartShoeItem) {
      shoesArr.splice(
        shoesArr.findIndex(item => item.id === id),
        1,
      );
      setShoesArr([...shoesArr]);
    }
  };
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-3 gap-3'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Image
                </th>
                <th scope='col' className='px-6 py-3'>
                  Quantity
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {shoesArr.map((item: cartShoeType, index: number) => (
                <ItemCartShoe
                  key={index}
                  itemCartShoe={item}
                  addQuantity={addQuantity}
                  reduceQuantity={reduceQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </tbody>
          </table>
        </div>
        <ListShoes shoesData={shoesData} addToCart={addToCart} />
      </div>
    </>
  );
}
