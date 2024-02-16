import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: 'userBankAccount',
    initialState: [],
    reducers: {
        addAccount: (state, action) => {
            state.push(action.payload);
        },
        loadAccounts: (state, action) => {
            return action.payload;
        },
        resetAccounts: () => {
            return [];
        }
    }
})

export const { addAccount, loadAccounts, resetAccounts } = accountSlice.actions;

export default accountSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
//
// const accountSlice = createSlice({
//     name: 'userBankAccount',
//     initialState: [
//         {
//             name: 'Argent Bank Checking',
//             total: '$2,082.79',
//             type: 'Available Balance',
//             transactions: 5
//         },
//         {
//             name: 'Argent Bank Savings',
//             total: '$10,928.42',
//             type: 'Available Balance',
//             transactions: 10
//         },
//         {
//             name: 'Argent Credit Card',
//             total: '$184.30',
//             type: 'Current Balance',
//             transactions: 3
//         }
//     ],
//     reducers: {
//     }
// })
//
// export default accountSlice.reducer;