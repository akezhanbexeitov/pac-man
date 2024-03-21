import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './reducers/authUserSlice'

export const rootReducer = combineReducers({
  auth
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
