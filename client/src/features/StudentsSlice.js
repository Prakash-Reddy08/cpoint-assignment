import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    students: [],
    totalStudents: 0,
    currentPage: 1,
    studentsPerPage: 5
}

export const getStudentsDetails = createAsyncThunk('student/getStudentsDetails', async (_, thunkAPI) => {
    const page = thunkAPI.getState().students.currentPage;
    const res = await axios.get(`http://localhost:5000/api/allstudents?page=${page}`)
    return res.data;
})
export const getPaidStudents = createAsyncThunk('student/getPaidStudents', async (_, thunkAPI) => {
    const page = thunkAPI.getState().students.currentPage;
    const res = await axios.get(`http://localhost:5000/api/paidstudents?page=${page}`)
    return res.data;
})
export const changePaymentStatus = createAsyncThunk('student/getPaidStudents', async (id) => {
    await axios.patch(`http://localhost:5000/api/students/${id}/updatepaymentstatus`)
})

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload
        },
        setPaymentStatus: (state, action) => {
            const student = state.students.find((student) => student._id === action.payload)
            student.is_paid = true;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        searchStudents: (state, action) => {
            const foundStudents = state.students.filter((item) => {
                const name = item.first_name + " " + item.last_name;
                console.log(name);
                return name?.toLowerCase().includes(action.payload.toLowerCase()) || item.email_id.toLowerCase().includes(action.payload.toLowerCase())
            })
            state.students = foundStudents;
        }
    },
    extraReducers: {
        [getStudentsDetails.fulfilled]: (state, action) => {
            state.students = action.payload.students;
            state.totalStudents = action.payload.total
        },
        [getPaidStudents.fulfilled]: (state, action) => {
            state.students = action.payload.paidStudents;
            state.totalStudents = action.payload.totalPages
        }
    }
});

export const { setStudents, setPaymentStatus, searchStudents, setCurrentPage } = studentSlice.actions;

export default studentSlice.reducer;