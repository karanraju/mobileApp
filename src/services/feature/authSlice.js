import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userData: {},
  userid: '',
};
export const sliceKey = 'userData';

export const userDataSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setuserData: async (state, payload) => {
      try {
        // state.userData = payload;
        // console.log('karanabc', payload);
        await AsyncStorage.setItem('userid', payload);
        // console.log('helloW orld', a wait AsyncStorage.getItem('userid'));
      } catch (e) {
        console.log(e);
      }
    },

    getUser: async (state, action) => {
      try {
        state.userid = await AsyncStorage.getItem('userData');
      } catch (e) {
        console.log(e);
      }
    },

    logOut: (state, action) => {
      state.userData = null;
      localStorage.clear();
    },
  },
  // extraReducers:  {
  //   [signUpUser.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [signUpUser.fulfilled]: (state, {payload: {error, msg}}) => {
  //     state.loading = false;
  //     if (error) {
  //       state.error = error;
  //     } else {
  //       state.msg = msg;
  //     }
  //   },
  //   [signUpUser.rejected]: (state, action) => {
  //     state.loading = true;
  //   },
  // },
});

export const {setuserData, getUser, logOut} = userDataSlice.actions;

export default userDataSlice.reducer;

// import {createSlice} from '@reduxjs/toolkit';
// // const initialState = {
// //   name: null,
// //   token: null,
// // };

// const initialState = {

// };
// export const sliceKey = 'auth';

// export const authSlice = createSlice({
//   name: sliceKey,
//   initialState,
//   reducers: {
//     setAgentId: (state, {payload}) => {
//       try {
//         localStorage.setItem(
//           'user',
//           JSON.stringify({
//             name: action.payload.name,
//             token: action.payload.token,
//           }),
//         );
//         (state.name = action.payload.name),
//           (state.token = action.payload.token);
//       } catch (e) {
//         console.log(e);
//       }
//     },
//   },
// });
// export const selectAuth = state => state.auth;
// export const {setUser} = authSlice.actions;
// export default authSlice.reducer;
