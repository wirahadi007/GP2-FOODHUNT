import React from 'react'
import { useState } from 'react'
import ModalCheckout from '../../components/Modal/ModalCheckout/ModalCheckout'
import OrderCard from '../../components/Order Card/OrderCard'

const OrderPage = props => {

    const [openModal,setOpenModal] = useState(false)

    return (
        <>
            <div className="p-8">
                <h1 className="text-3xl mb-6">Daftar Order</h1>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <h1 className="text-3xl mb-6 font-bold">Total Rp. 45.000</h1>
                <div className="flex justify-end">
                    <button className="p-4 rounded-lg bg-gray-300 font-bold"
                    onClick={() => setOpenModal(true)} 
                    >Checkout</button>
                </div>
            </div>
            {openModal && <ModalCheckout closeModal={setOpenModal}/>}
        </>
    )
}

export default OrderPage;