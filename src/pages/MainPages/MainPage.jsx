import {useSelector} from 'react-redux';

import Cardcontent from "../../components/Main Content/Card";
import Header from "../../components/Navbar/Header"
import Navbar from "../../components/Navbar/NavBar";
import SearchBar from './../../components/Search Bar/SearchBar'

const MainPage = () => {
    const state = useSelector(state => state.data);

    return (
        <div className="Mainpage">
            <Navbar/>
            <Header/>
            <SearchBar />
            <br />
            <br />
            <h3 className="text-3xl text-center">REKOMENDASI MENU</h3>
            {state.map((el, i) => <Cardcontent key={i} {...el} />)}
        </div>
    )
}

export default MainPage