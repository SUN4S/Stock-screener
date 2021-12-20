import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ActiveState {
  value: number
}

const initialState: ActiveState = {
  value: 6,
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { select } = activeSlice.actions;

export default activeSlice.reducer;