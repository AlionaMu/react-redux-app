import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../components/CardItem';
import FetchService from '../API/FetchService';

// Thunk

const search = createAsyncThunk(
  'cardsList',
  async (obj: any) => {
    const response = FetchService.getPosts(obj.search, obj.sort, obj.token);
    return response;
  }
)  

// Slice

const emptyArr: any = [];
const ObjItem: any = {}

const initialState = {
    cardsList: emptyArr,
    search: '',
    nextPageToken: '',
    detailedInfo: ObjItem,
    sort: 'relevance',
    error: ''
}

const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setDetailedInfo: (state, action: PayloadAction<Item>) => {
      state.detailedInfo = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.error = '';
      })
      .addCase(search.fulfilled, (state, action) => {
        state.cardsList = action.payload;
      })
 
  },
});

export const { setSearch, setDetailedInfo, setSort} = cardsListSlice.actions;

export { search };

export default cardsListSlice.reducer;
