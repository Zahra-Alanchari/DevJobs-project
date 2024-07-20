import { configureStore, createSlice } from "@reduxjs/toolkit";

// export const store = configureStore({
//     reducer: {
//       mode,
//       filter,
//       setId,
//     },
//   })

// const initialState = {
//   mode: "light",
//   id: null,
// }

// const reducer = () =>{}

  const idSlice = createSlice({
    name: 'setid',
    initialState: {
      id: null
    },
    reducers: {
      jobId: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        id
      },
    }
  })

  export const { jobId } = idSlice.actions

  const store = configureStore({
    reducer: idSlice.reducer
  })