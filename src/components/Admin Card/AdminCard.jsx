import axios from 'axios';
import React, { useState } from 'react';
import ModalAdmin from '../Modal/ModalAdmin/ModalAdmin';

const AdminCard = props => {
    const [openModal,setOpenModal] = useState(false)


    const approve = async (id) => {
        await axios.put(`https://6131f19fab7b1e001799b262.mockapi.io/orders/${id}`, {
            ...props,
            approved: true
        });

        window.location.reload();
    }

    return (
        <>
            <div className="flex w-12/12 h-48 mb-4 justify-between bg-gray-300 rounded-lg" style={{
                backgroundColor: props.approved ? 'green' : null,
                color: props.approved ? 'white' : null
            }}>
                <div className="info w-6/12 my-5 ml-6">
                    <h1 className="text-2xl font-bold">{props.name}</h1>
                    <h1 className="my-4 text-xl font-bold">REK. {props.account}</h1>
                    <h1 className="font-bold text-xl">Phone. {props.phone}</h1>
                    <h1 className="font-lg mt-3">{props.address}</h1>
                </div>
                <div className="self-end mr-8 mb-4">
                    <button className="bg-white px-4 py-2 rounded-lg"
                    style={{
                        color: props.approved ? 'black' : null
                    }}
                    onClick={() => setOpenModal(true)}
                    >{props.approved ? 'DONE' : 'MORE'}</button>
                </div>
            </div>

            {openModal && <ModalAdmin approve={approve} {...props} closeModal={setOpenModal}/>}
        </>
    )
}

export default AdminCard;