import axios from 'axios'

export const getApi = category => {
    return (dispatch) => {
        async function getApiCategory() {
            try {
              let data = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=${category}`);
              data = await data.data;
              let {meals} = data;
              meals = meals.map(el => {
                  return {
                    ...el,
                    price: 20000,
                    category,
                    carted: false
                  }
              });

              meals = meals.slice(0,5);

              dispatch({type: 'GET_API', payload: meals});
            } catch(err) {
              console.log(err)
            }
          }
        getApiCategory();
    }
}