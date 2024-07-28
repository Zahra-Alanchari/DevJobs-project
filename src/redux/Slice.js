import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getJob from "../jobsApi";
import { fetchgetAllJobs } from "./action";

const initialState = {
  lightMode: true,
  job: [],
  input: "",
  id: null,
  location:"",
  fullTime: false
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateInput(state, action) {
      state.input = action.payload;
    },
    updateMode(state, action) {
      state.lightMode = !state.lightMode;
    },
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
    updateSelectedJob(state, action) {
      state.job = state.job.filter((item) => item.id === action.payload);
    },
    setLocationFilter(state,action){
      state.location = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllJobs.fulfilled, (state, action) => {
      state.job = action.payload;
    });
  },
});

export const { updateInput, updateMode, updateSelectedId, updateSelectedJob,setTitleFilter,setLocationFilter } =
  jobSlice.actions;
export default jobSlice.reducer;
