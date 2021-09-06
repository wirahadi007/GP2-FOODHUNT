import React from 'react'
import {useSelector} from 'react-redux';

import Cardcontent from "../../components/Main Content/Card";
import Header from "../../components/Navbar/Header"
import Navbar from "../../components/Navbar/NavBar";
import SearchBar from './../../components/Search Bar/SearchBar'

const MainPage = () => {
    const state = useSelector(state => state.data);
    const order = useSelector(state => state.order)
    const [category, setCategory] = React.useState('Beef');
    const [filter, setFilter] = React.useState([]);
    
    React.useEffect(() => {
        setFilter(state.filter(el => el.category === category));
    }, [state, category]);

    return (
        <div className="Mainpage">
            <Navbar/>
            <Header/>
            <SearchBar category={category} setCategory={setCategory}/>
            <br />
            <br />
            <h3 className="text-3xl text-center">REKOMENDASI MENU</h3>
            {filter.map((el, i) => <Cardcontent key={i} {...el} />)}
        </div>
    )
}

export default MainPage