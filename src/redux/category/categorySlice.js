import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let API = "https://dummyjson.com/products/category-list"

export const categoryFetch = createAsyncThunk(
    "category/products",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(categoryFetch.pending, (state) =>{
                state.loading = true;
                state.error = null
            })
            .addCase(categoryFetch.fulfilled, (state, action) => {
                console.log(action);
                
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(categoryFetch.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            })
    }
})

export default categorySlice.reducer