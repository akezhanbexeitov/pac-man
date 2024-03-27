import { createSlice } from '@reduxjs/toolkit';

interface AuthState { 
  user: User | null;
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
};

const { getMe } = AuthService()

const addUserInfo = createAsyncThunk(
  "auth/addUserInfo",
  async () => {
    const user = await getMe()
    return user
  }
)

export const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => { 
    builder.addCase(addUserInfo.fulfilled, (state, action) => {
      state.user = action.payload as User
      state.isAuth = true
    })
  }
});

export default authUserSlice.reducer;
