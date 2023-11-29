import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser } from '../entities/user';
import { ApirepoUsers } from '../services/api.repo.users';

// Thunk del login
export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: ApirepoUsers;
  }
>('login', async ({ loginUser, repo }) => await repo.login(loginUser));

// Thunk del login with token
export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: ApirepoUsers;
  }
>(
  'loginWithToken',
  async ({ token, repo }) => await repo.loginWithToken(token)
);
