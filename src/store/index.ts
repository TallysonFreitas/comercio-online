import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/user'

const store = configureStore({
  reducer: { user: userSlice }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
