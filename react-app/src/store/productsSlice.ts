import { FormInfo } from './../components/Form';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const emptyArr: FormInfo[] =[];

const initialState = {
    products: emptyArr
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
      create: (state, action: PayloadAction<FormInfo>) => {
        state.products.push(action.payload)
      }  
  },
});

export const {create} = productsSlice.actions;

export default productsSlice.reducer;