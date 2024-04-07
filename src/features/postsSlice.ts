import { createSlice } from '@reduxjs/toolkit';
import { Publication } from '../consts/enum';

interface PostSliceState {
    posts: Publication[],
    loading: Boolean,
}

const initialState: PostSliceState = {
    posts: [],
    loading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer