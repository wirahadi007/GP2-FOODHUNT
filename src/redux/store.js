import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    data: [],
    order: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'GET_API') {
        return {
            ...state,
            data: [...state.data, ...action.payload]
        }
    }

    return state
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;