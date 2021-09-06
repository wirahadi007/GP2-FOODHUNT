import {useSelector} from 'react-redux';

import Cardcontent from "../../components/Main Content/Card";
import Header from "../../components/Navbar/Header"
import Navbar from "../../components/Navbar/NavBar";
import SearchBar from './../../components/Search Bar/SearchBar'

const MainPage = () => {
    const state = useSelector(state => state.data);
    console.log(state);

    return (
        <div className="Mainpage">
            <Navbar/>
            <Header/>
            <SearchBar />
            <br />
            <br />
            <h3 className="text-3xl text-center">REKOMENDASI MENU</h3>
            {state.map(el => <Cardcontent />)}
        </div>
    )
}

export default MainPage