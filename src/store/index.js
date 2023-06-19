import {  configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const stroe = configureStore({
    reducer : { counter : counterReducer , auth : authReducer },
    
});

export default stroe;