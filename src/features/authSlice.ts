import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UserCredentials {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: UserCredentials, { dispatch }) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      dispatch(setAuthData({ token: data.token, email, name: data.name }));

      return { ...data, email }; 
    } catch (error) {
      throw new Error('Login failed: ' + error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }: UserCredentials, { dispatch }) => {
    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();

      dispatch(setAuthData({ token: data.token, email, name: data.name }));

      return { ...data, email }; 
    } catch (error) {
      throw new Error('Registration failed: ' + error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  try {
    dispatch(setAuthData({ token: '', email: '', name: '' }));
    return { success: true };
  } catch (error) {
    throw new Error('Logout failed: ' + error.message);
  }
});

export const fetchUsersPage1 = createAsyncThunk('auth/fetchUsersPage1', async () => {
  try {
    const response = await fetch('https://reqres.in/api/users?page=1');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch users: ' + error.message);
  }
});

export const fetchUsersPage2 = createAsyncThunk('auth/fetchUsersPage2', async () => {
  try {
    const response = await fetch('https://reqres.in/api/users?page=2');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Failed to fetch users: ' + error.message);
  }
});

interface AuthState {
  isAuthenticated: boolean;
  authToken: string;
  user: {
    email: string;
    name: string;
  };
  users: Array<any>; 
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false, authToken: '', user: { email: '', name: '' }, users: [] } as AuthState,
  reducers: {
    setAuthData: (state, action) => {
      state.isAuthenticated = true;
      state.authToken = action.payload.token;
      state.user = { email: action.payload.email, name: action.payload.name };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.authToken = action.payload.token;
        state.user = { email: action.payload.email, name: action.payload.name };
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.authToken = action.payload.token;
        state.user = { email: action.payload.email, name: action.payload.name };
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.authToken = '';
        state.user = { email: '', name: '' };
      })
      .addCase(fetchUsersPage1.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsersPage2.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
