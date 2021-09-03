import Header from "../../components/Navbar/Header"
import Navbar from "../../components/Navbar/NavBar";
import SearchBar from './../../components/Search Bar/SearchBar'

const MainPage = () => {
    return (
        <div className="Mainpage">
            <Navbar/>
            <Header/>
            <SearchBar />
        </div>
    )
}

export default MainPage