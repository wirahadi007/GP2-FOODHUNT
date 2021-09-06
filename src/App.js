// import './App.css';
import axios from 'axios';
import React from 'react';

import {getApi} from './redux/action'
import {useDispatch, useSelector} from 'react-redux'


import AdminPage from './pages/Admin Pages/AdminPage';
import MainPage from './pages/MainPages/MainPage';
import OrderPage from './pages/OrderPages/OrderPage';

function App() {
  const state = useSelector(state => state.data);
  const dispatch = useDispatch();  
  // Memasukkan barang ke state
  React.useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(res => {
      let data = res.data;
      let meals = data.meals;
      meals.forEach(el => dispatch(getApi(el.strCategory)))
    })
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
