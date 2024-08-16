import { combineReducers, configureStore } from '@reduxjs/toolkit';
import product from './slices/product';
import cart from './slices/cart';
import user from './slices/user';

// combineReducers should be rarely needed - Redux Toolkit's configureStore method 
// will automatically call combineReducers for you if you pass in an object 
// of slice reducers.
// so, we don't actually need the line of code below.
const reducer = combineReducers({
    product,
    cart,
    user,
});

export default configureStore({ reducer });


