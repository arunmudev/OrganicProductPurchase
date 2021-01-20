import { combineReducers } from  'redux';

import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer
})