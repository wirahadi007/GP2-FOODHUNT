import React from 'react'

const ModalCheckout = (props) => {
    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalCont w-1/2 h-4/5 items-center bg-gray-200 shadow-lg flex flex-col p-4 gap-y-4 rounded-md">
                <form className="w-4/5 m-4 p-4 bg-white rounded shadow-xl gap-y-2 h-full flex flex-col gap-y-2">
                    <div className="header flex">
                        <p class="text-gray-800 font-medium w-1/2">Informasi Pembelian</p>
                        <p className="text-right font-semibold text-2xl cursor-pointer w-1/2" onClick={() => props.closeModal(false)}> X </p>
                    </div>  

                    <div class="mt-2 flex flex-col gap-y-2">
                        <label class="block text-sm text-gray-00">Nama Lengkap</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"placeholder="Nama Lengkap" />
                    </div>

                    <div class="mt-2 flex flex-col gap-y-2">
                        <label class="block text-sm text-gray-00">Alamat</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"placeholder="Alamat" />
                    </div>

                    <div class="mt-2 flex flex-col gap-y-2">
                        <label class="block text-sm text-gray-00">No Rekening</label>
                        <input class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"placeholder="No Rekening" />
                    </div>

                    <div class="mt-2 flex flex-col gap-y-2">
                            <label class="block text-sm text-gray-00">Metode Pengiriman</label>
                            <select className="w-full p-2 py-1 text-gray-700 bg-gray-200 rounded">
                                <option placeholder="Pilih Metode Pembayaran"></option>
                                <option>Ambil Sendiri</option>
                                <option>Delivery</option>
                            </select>
                    </div>

                    <div className="btn self-end mt-8">
                        <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCheckout
