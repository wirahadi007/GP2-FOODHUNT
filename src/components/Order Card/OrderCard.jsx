import React from 'react'

const OrderCard = props => {

    return(
        <div className="flex w-12/12 h-48 my-4 justify-around bg-gray-300 rounded-lg">
            <div className="info w-8/12 my-5">
                <h1 className="text-2xl font-bold">Nasi Goreng Bang Wildan</h1>
                <h1 className="my-4 text-xl font-bold">Rp. 15.000</h1>
                <span className="font-bold text-xl">Quantity</span>
                <input className="text-center ml-2 w-12 h-8" type="number"/>
            </div>
            <div className="images w-64 self-center">
                <img className="rounded-lg" src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="" />
            </div>
        </div>
    )
}

export default OrderCard;
