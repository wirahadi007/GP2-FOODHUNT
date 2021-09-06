import React from "react";
import { useState } from "react";
import ModalDetail from "../Modal/ModalDetail/ModalDetail";

const Cardcontent = (props) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <div className="foodCard w-1/5 bg-gray-100 shadow-lg rounded-md flex flex-col">
          <div className="foto p-4 h-3/5">
            <img src={props.strMealThumb} alt="Menu" className="w-full rounded-md h-full"/>
          </div>
          <div className="Title p-4 h-1/5 flex flex-col">
            <p >{props.strMeal}</p>
          </div>
          <div className="p-2 h-1/5 flex items-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOpenModal(true)}
            >Detail</button>
          </div>
        </div>

        {openModal && <ModalDetail {...props} closeModal={setOpenModal}/>}
    </>

  );
}

export default Cardcontent;