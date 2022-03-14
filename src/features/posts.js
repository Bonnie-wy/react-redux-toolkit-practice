import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";

const initialState = {
  value: {},
};

const dispatch = useDispatch();

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    async fetchPosts(state) {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      state.value = res;

      if (res.status == 200) {
        dispatch({ type: RETRIEVE_ARTICLES, payload: data });
      }
    },
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});
