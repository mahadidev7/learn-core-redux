// import todoReducer from './todos/reducer'
// import filterReducer from './filtera/reducer'
import cartsReducer from './carts/reducer'
import { combineReducers } from 'redux' 

const rootReducer = combineReducers({
    // todos: todoReducer,
    // filters: filterReducer,
    carts: cartsReducer,
});

export default rootReducer;