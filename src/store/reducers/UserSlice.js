import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredentials) => {
        const request = await axios.post('http://localhost:3001/api/v1/user/login', userCredentials);
        const response = await request.data;
        localStorage.setItem('user', JSON.stringify(response));
        console.log(response);
        localStorage.setItem('token', JSON.stringify(response.token));
        console.log(response.token);
        return response;
    }
)

export const getUserProfile = createAsyncThunk(
    'user/getUserProfile',
    async(token) => {
        const request = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const responseAuth = await request.data;
        return responseAuth;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    extraReducers:(builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if(action.error.message === 'Request failed with status code 401'){
                    state.error = 'Invalid email or password';
                }
                else {
                    state.error = action.error.message;
                }
            })
            .addCase(getUserProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = {
                    ...state.user,
                    body: {
                        ...state.user.body,
                        ...action.payload.body
                    }
                };
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;