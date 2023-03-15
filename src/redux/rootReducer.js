// import todoReducer from './todos/reducer'
// import filterReducer from './filtera/reducer'
import productsReducer from './products/reducer'
import { combineReducers } from 'redux' 

const rootReducer = combineReducers({
    // todos: todoReducer,
    // filters: filterReducer,
    products: productsReducer,
});

export default rootReducer;