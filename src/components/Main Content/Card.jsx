import React from "react";
import { useState } from "react";
import ModalDetail from "../Modal/ModalDetail/ModalDetail";

const Cardcontent = (props) => {
  const [openModal, setOpenModal] = useState(false)


  return (
    <div className="card-container w-full flex justify-center flex-col gap-y-8">
      <div className="title w-full text-center">
      </div>
      <div className="cards flex flex-wrap justify-center gap-x-24 gap-y-16">
        <div className="foodCard w-1/5 bg-gray-100 shadow-lg rounded-md">
          <div className="foto p-4">
            <img src={props.strMealThumb} alt="Menu" className="w-full"/>
          </div>
          <div className="Title p-4">
            <p>{props.strMeal}</p>
          </div>
          <div className="p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOpenModal(true)}
            >Detail</button>
          </div>
        </div>
      </div>

      {openModal && <ModalDetail {...props} closeModal={setOpenModal}/>}
    </div>
  );
}

export default Cardcontent;