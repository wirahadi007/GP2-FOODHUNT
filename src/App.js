// import './App.css';
import axios from 'axios';
import React from 'react';
import AdminPage from './pages/Admin Pages/AdminPage';
import MainPage from './pages/MainPages/MainPage';
import OrderPage from './pages/OrderPages/OrderPage';

function App() {

  React.useEffect(() => {
    async function getApiCategory() {
      try {
        let data = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        data = await data.data;
        let {meals} = data;
        console.log(meals)
      } catch(err) {
        console.log(err)
      }
    }
    getApiCategory();
  }, [])

  return (
    <div className="App">
      <MainPage />
      <OrderPage />
      <AdminPage />
    </div>
  );
}

export default App;
