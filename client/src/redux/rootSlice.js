import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        myapiData: null,
        reloadData: false,
    },
    reducers: {
        Showloading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        SetMyapiData: (state, action) => {
            state.myapiData = action.payload;
        },
        ReloadData: (state, action) => {
            state.reloadData = action.payload;
        },
        
    },
});


export default rootSlice.reducer;
export const { Showloading, HideLoading, SetMyapiData, ReloadData } = rootSlice.actions;