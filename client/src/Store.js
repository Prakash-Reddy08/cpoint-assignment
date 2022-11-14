import { configureStore } from "@reduxjs/toolkit"
import studentReducer from './features/StudentsSlice'
const Store = configureStore({
    reducer: {
        students: studentReducer
    }
})

export default Store