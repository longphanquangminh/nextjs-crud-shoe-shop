import { shoeType } from "@/app/types/shoeType";
import Image from "next/image";

type Props = {
  shoesData: shoeType[];
  addToCart: Function;
  viewDetail: Function;
};

export default function ListShoes(props: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {props.shoesData.map((item: shoeType, index: number) => (
        <div key={index} className='border-2'>
          <Image priority className='mx-auto' alt={`img-${index}`} src={item.image} width={300} height={300} />
          <p className='text-xs text-center h-10'>{item.name}</p>
          <p className='text-xs text-center h-10'>${item.price}</p>
          <div className='flex justify-center mb-3'>
            <button
              onClick={() => props.addToCart(item.id)}
              className='px-3 py-1 rounded-lg bg-black text-white text-center w-[90%] cursor-pointer hover:bg-gray-600 duration-300'
            >
              Add cart
            </button>
          </div>
          <div className='flex justify-center mb-3'>
            <button
              onClick={() => props.viewDetail(item.id)}
              className='px-3 py-1 rounded-lg bg-black text-white text-center w-[90%] cursor-pointer hover:bg-gray-600 duration-300'
            >
              See detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
