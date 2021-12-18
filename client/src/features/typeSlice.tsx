import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface TypeState {
  type: String | undefined
}

const initialState: TypeState = {
  type: "/"
}

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    typeSet: (state, action: PayloadAction<String | undefined>) => {
      state.type = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { typeSet } = typeSlice.actions;

export default typeSlice.reducer;