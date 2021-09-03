import Cardcontent from "../../components/Main Content/Card";
import Header from "../../components/Navbar/Header"
import Navbar from "../../components/Navbar/NavBar";
import SearchBar from './../../components/Search Bar/SearchBar'

const MainPage = () => {
    return (
        <div className="Mainpage">
            <Navbar/>
            <Header/>
            <SearchBar />
            <br />
            <br />
            <Cardcontent />
        </div>
    )
}

export default MainPage