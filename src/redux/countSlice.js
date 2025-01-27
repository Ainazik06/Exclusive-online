import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "counter",
    initialState: {timer: 0},
    reducers: {
        addTimer: (state) => {
          state.timer +=1;
          
        }
    }
})

export const {addTimer} = countSlice.actions;
export default countSlice.reducer;