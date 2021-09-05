import React from 'react'

const ModalOrder = (props) => {
    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalCont w-1/3 h-4/5 bg-gray-200 shadow-lg flex flex-col rounded-lg">
                <div className="closeBtn flex justify-end p-4">
                    <button onClick={() => props.closeModal(false)} > X </button>
                </div>

                <div className="title p-2">
                    <h3 className="text-center text-2xl">Daftar Keranjang</h3>
                </div>

                <div className="lists flex flex-col bg-gray-300 m-2 h-4/5 overflow-auto rounded-md">
                    <div className="flex felx-col p-2 bg-gray-400 m-8 rounded-md">
                        <div className="tumb h-full w-1/3">
                            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Image" className="h-full w-full"/>
                        </div>

                        <div className="info flex flex-col w-2/3 justify-center p-2">
                            <p className="text-right">Nasi Goreng Pakdhe</p>
                            <p className="text-right">Rp. 15.000</p>
                        </div>
                    </div>

                    <div className="flex felx-col p-2 bg-gray-400 m-8 rounded-md">
                        <div className="tumb h-full w-1/3">
                            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Image" className="h-full w-full"/>
                        </div>

                        <div className="info flex flex-col w-2/3 justify-center p-2">
                            <p className="text-right">Nasi Goreng Pakdhe</p>
                            <p className="text-right">Rp. 15.000</p>
                        </div>
                    </div>

                    <div className="flex felx-col p-2 bg-gray-400 m-8 rounded-md">
                        <div className="tumb h-full w-1/3">
                            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Image" className="h-full w-full"/>
                        </div>

                        <div className="info flex flex-col w-2/3 justify-center p-2">
                            <p className="text-right">Nasi Goreng Pakdhe</p>
                            <p className="text-right">Rp. 15.000</p>
                        </div>
                    </div>

                    <div className="flex felx-col p-2 bg-gray-400 m-8">
                        <div className="tumb h-full w-1/3">
                            <img src="https://image.freepik.com/free-photo/fried-rice-with-shrimp-prawn-top-white-plate_1203-7537.jpg" alt="Image" className="h-full w-full"/>
                        </div>

                        <div className="info flex flex-col w-2/3 justify-center p-2">
                            <p className="text-right">Nasi Goreng Pakdhe</p>
                            <p className="text-right">Rp. 15.000</p>
                        </div>
                    </div>
                    
                </div>

                <div className="orderBtn flex justify-end p-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Order
                </button>
                </div>
            </div>
        </div>
    )
}

export default ModalOrder
