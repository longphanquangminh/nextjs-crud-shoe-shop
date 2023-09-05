import { cartShoeType } from "@/app/types/cartShoeType";
import Image from "next/image";

type Props = {
  itemCartShoe: cartShoeType;
  removeFromCart: Function;
  addQuantity: Function;
  reduceQuantity: Function;
};

export default function ItemCartShoe(props: Props) {
  const { id, name, price, image, cartQuantity } = props.itemCartShoe;
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {name}
      </th>
      <td className='px-6 py-4'>${price}</td>
      <td className='px-6 py-4'>
        <Image priority alt='' src={image} width={100} height={100} />
      </td>
      <td className='px-6 py-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <button className='px-3 py-1 bg-black text-white' onClick={() => props.reduceQuantity(id)}>
            -
          </button>
          <div className='text-center flex justify-center items-center'>{cartQuantity}</div>
          <button className='px-3 py-1 bg-black text-white' onClick={() => props.addQuantity(id)}>
            +
          </button>
        </div>
      </td>
      <td className='px-6 py-4'>
        <a onClick={() => props.removeFromCart(id)} className='font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline'>
          Delete
        </a>
      </td>
    </tr>
  );
}
