import React from 'react'
import ListOrder from './ListOrder'

const ModalAdmin = (props) => {
    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalCont w-1/2 h-4/5 items-center bg-gray-200 shadow-lg flex flex-col p-4 gap-y-4 rounded-md">
                <div className="closeBtn self-end">
                    <p className="text-right font-semibold text-2xl cursor-pointer w-auto"
                    onClick={() => props.closeModal(false)}
                    > X </p>
                </div>
                <div className="orders flex flex-col h-3/5 bg-gray-300 w-11/12 overflow-auto">
                    <ListOrder/>
                    <ListOrder/>
                    <ListOrder/>
                    <ListOrder/>
                </div>
                <div className="totalAllOrder flex w-11/12 mt-8">
                    <p className="w-1/2">Total Semua Pesanan</p>
                    <p className="w-1/2 text-right">Rp.150.000</p>
                </div>
                <div className="approveBtn w-11/12 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Approve</button>
                </div>
            </div>
        </div>
    )
}

export default ModalAdmin
