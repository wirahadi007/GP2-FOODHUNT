import React, { useState } from 'react';
import ModalAdmin from '../Modal/ModalAdmin/ModalAdmin';

const AdminCard = props => {
    const [openModal,setOpenModal] = useState(false)

    return (
        <>
            <div className="flex w-12/12 h-48 mb-4 justify-between bg-gray-300 rounded-lg">
                <div className="info w-6/12 my-5 ml-6">
                    <h1 className="text-2xl font-bold">I Made Wirahadi Putra</h1>
                    <h1 className="my-4 text-xl font-bold">REK. 302-2003-3991</h1>
                    <h1 className="font-bold text-xl">Phone. 0812-3823-223</h1>
                    <h1 className="font-lg mt-3">Jalan Cilebut Raya</h1>
                </div>
                <div className="self-end mr-8 mb-4">
                    <button className="bg-white px-4 py-2 rounded-lg"
                    onClick={() => setOpenModal(true)}
                    >MORE</button>
                </div>
            </div>

            {openModal && <ModalAdmin closeModal={setOpenModal}/>}
        </>
    )
}

export default AdminCard;