import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ModalOrder from '../Modal/ModalOrder/ModalOrder';
import cart from './cart.png';
import './SearchBar.css'

const SearchBar = props => {
    const [openModal,setOpenModal] = useState(false)
    const [option, setOption] = useState([]);

    const changeCategory = e => {
        props.setCategory(e.target.value);
    }

    React.useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(res => {
            let {meals} = res.data;
            setOption(meals)
        })
    }, [])

    return (
        <>
            <div className="flex justify-center gap-x-4">
                <div className="flex w-6/12">
                    <input onChange={changeCategory} list="category" type="search" className="searchBox border-2 bg-gray-300 rounded-lg w-full px-4" placeholder="Masukan Kategori" value={props.category}/>
                    <datalist id="category">
                        {option.map(el => <option value={el.strCategory} />)}
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