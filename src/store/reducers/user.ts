import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  usuarios: [
    { username: 'rodrigo', password: '9823' },
    { username: 'rafael', password: '3289' }
  ]
}

type userType = (typeof initialState.usuarios)[0]

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    adicionarUser: (state, action: PayloadAction<userType>) => {
      if (state.usuarios.length > 0) {
        state.usuarios = [...state.usuarios, action.payload]
      } else {
        state.usuarios = [action.payload]
      }
    }
  }
})

export default userSlice.reducer
export const { adicionarUser } = userSlice.actions
