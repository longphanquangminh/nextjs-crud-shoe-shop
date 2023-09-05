import { shoeType } from "@/app/types/shoeType";
import Modal from "./Modal";
import Image from "next/image";

type Props = {
  isShown: boolean;
  data: shoeType;
  closeModal: Function;
};

export default function ModalShoes(props: Props) {
  return (
    <Modal
      className={`flex items-center justify-center overflow-y-auto duration-300 ${props.isShown ? `visible opacity-100` : `collapse opacity-0`}`}
      onClose={() => props.closeModal()}
    >
      <div className='px-3 text-center'>
        <p>ID: #{props.data.id}</p>
        <p>Name: {props.data.name}</p>
        <p>Price: {props.data.price}</p>
        <p>Description: {props.data.description}</p>
        <Image className='mx-auto' alt='' src={props.data.image} width={300} height={300} />
      </div>
    </Modal>
  );
}
