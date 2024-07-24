import { configureStore } from "@reduxjs/toolkit";
import modeReducer from '../redux/Slice'

const store = configureStore({
    reducer:{
        mode:modeReducer
    }
})

export default store;