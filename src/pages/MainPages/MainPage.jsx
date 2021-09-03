import Cardcontent from "../../components/Main Content/Card"
import Card from "../../components/Main Content/Card"
import Navbar from "../../components/Navbar/NavBar"
import SearchBar from "../../components/Search Bar/SearchBar"

const MainPage = () => {
    return (
        <div className="Mainpage">
            <Navbar/>
            <SearchBar />
            <Cardcontent/>
        </div>
    )
}

export default MainPage