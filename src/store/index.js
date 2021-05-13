import {createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const INITIAL_STATE = {
    weather: "São Carlos",
    historic: [],
}

function weather(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_WEATHER':
            return {...state, weather: action.payload}
        case 'ADD_HISTORY':
            return {...state, historic: [...state.data, action.payload]}
        default:
            return state;
    }
}

const store = createStore(weather, composeWithDevTools());

export default store;