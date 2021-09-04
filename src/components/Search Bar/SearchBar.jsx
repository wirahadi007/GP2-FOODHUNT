import React from 'react';
import { useState } from 'react';
import ModalOrder from '../Modal/ModalOrder/ModalOrder';
import cart from './cart.png';
import './SearchBar.css'

const SearchBar = props => {
    const [openModal,setOpenModal] = useState(false)



    return (
        <>
            <div className="flex justify-center gap-x-4">
                <div className="flex w-6/12">
                    <input list="category" type="search" className="searchBox border-2 bg-gray-300 rounded-lg w-full px-4" placeholder="Masukan Kategori"/>
                    <datalist id="category">
                        <option value="Beef"/>
                        <option value="Vegan"/>
                        <option value="Chicken"/>
                    </datalist>
                </div>
                <div className="relative">
                    <a onClick={() => setOpenModal(true)} className="cursor-pointer">
                        <div className="absolute w-6 bg-gray-400 rounded-full text-center">
                            1
                        </div>
                        <img className="w-6/12 yellow-300" src={cart} alt="no"/>
                    </a>
                </div>
            </div>
            {openModal && <ModalOrder closeModal={setOpenModal}/>}
        </>
    )
}

export default SearchBar;