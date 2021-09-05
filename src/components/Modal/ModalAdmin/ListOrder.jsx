import React from 'react'

const ListOrder = () => {
    return (
        <div className="order p-2">
            <div className="namaMakanan flex">
                <p className="w-1/2">Nama Makanan</p>
                <p className="w-1/2 text-right">Nasi Goreng Bang Wildan</p>
            </div>
            <div className="jumlahMakanan flex">
                <p className="w-1/2">Jumlah Porsi</p>
                <p className="w-1/2 text-right">2</p>
            </div>
            <div className="hargaMakanan flex">
                <p className="w-1/2">Harga Makanan</p>
                <p className="w-1/2 text-right">Rp.15.000</p>
            </div>
            <div className="totalHarga flex">
                <p className="w-1/2">Total</p>
                <p className="w-1/2 text-right">Rp.30.000</p>
            </div>
        </div>
    )
}

export default ListOrder
