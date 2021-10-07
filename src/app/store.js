import { configureStore } from '@reduxjs/toolkit';

import connexionReducer from '../features/connexion/connexionSlice';

export default configureStore({
  reducer: { connexionData: connexionReducer }
});
