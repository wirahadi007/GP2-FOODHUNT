import React from "react";
import { useState } from "react";
import ModalDetail from "../Modal/ModalDetail/ModalDetail";

const Cardcontent = () => {
  const [openModal, setOpenModal] = useState(false)


  return (
    <div className="card-container w-full flex justify-center flex-col gap-y-8">
      <div className="title w-full text-center">
        <h3 className="text-3xl">REKOMENDASI MENU</h3>
      </div>
      <div className="cards flex flex-wrap justify-center gap-x-24 gap-y-16">

        <div className="foodCard w-1/5 bg-gray-100 shadow-lg rounded-md">
          <div className="foto p-4">
            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Menu" className="w-full"/>
          </div>
          <div className="Title p-2">
            <p>Nasi Goreng</p>
          </div>
          <div className="p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOpenModal(true)}
            >Detail</button>
          </div>
        </div>

        <div className="foodCard w-1/5 bg-gray-100 shadow-lg rounded-md">
          <div className="foto p-4">
            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Menu" className="w-full"/>
          </div>
          <div className="Title p-2">
            <p>Nasi Goreng</p>
          </div>
          <div className="p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</button>
          </div>
        </div>

        <div className="foodCard w-1/5 bg-gray-100 shadow-lg rounded-md">
          <div className="foto p-4">
            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Menu" className="w-full"/>
          </div>
          <div className="Title p-2">
            <p>Nasi Goreng</p>
          </div>
          <div className="p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</button>
          </div>
        </div>

      </div>

      {openModal && <ModalDetail closeModal={setOpenModal}/>}
    </div>
  );
}

export default Cardcontent;