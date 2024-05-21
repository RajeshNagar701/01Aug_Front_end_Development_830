import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../feature/UserSlice'

export default configureStore({
    reducer: {
        user:UserSlice,
    },
  })

/*
export const store = configureStore({
  reducer: {},
})
*/