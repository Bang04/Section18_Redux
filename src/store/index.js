import { createSlice , configureStore } from '@reduxjs/toolkit';

const initalState = {counter : 0, showCounter : true };

const counterSlice =  createSlice({
    name : 'counter',
    initalState ,
    reducers :{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter=  state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

counterSlice.actions.toggleCounter

const stroe = configureStore({
    counter : counterSlice.reducer
});

export default stroe;