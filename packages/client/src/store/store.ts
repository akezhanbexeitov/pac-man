import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './slices/authUser'

export const rootReducer = combineReducers({
  auth
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
