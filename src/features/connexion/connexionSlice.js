import { createSlice } from '@reduxjs/toolkit';

export const connexionSlice = createSlice({
  name: 'connexionData',
  initialState: {
    uid: '',
    displayName: '',
    photoURL: '',
    email: '',
    connected: false
  },
  reducers: {
    connexionGetter: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.email = action.payload.email;
      state.connected = action.payload.connected;
    },
    disconnexion: (state) => {
      state.uid = '';
      state.displayName = '';
      state.photoURL = '';
      state.email = '';
      state.connected = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { connexionGetter, disconnexion } = connexionSlice.actions;

export default connexionSlice.reducer;
