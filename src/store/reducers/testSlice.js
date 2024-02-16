import {createSlice} from "@reduxjs/toolkit";

const testSlice = createSlice({
     name: 'test',
    initialState: {
        id: '',
        email: '',
        firstName:'',
         lastName: '',
         token: null,
    },
    reducers: {
         updateToken: (state, action) => {
             state.token = action.payload;
         },
         updateUser: (state, action) => {
                state.id = action.payload.id;
                state.email = action.payload.email;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
         }
    }
})

export const {updateToken, updateUser} = testSlice.actions;

export default testSlice.reducer;