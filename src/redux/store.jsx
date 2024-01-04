
import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './features/counter/counterSlice';


const store = configureStore({
    reducer: {
        counter: CounterSlice,
    },
})


export default store;