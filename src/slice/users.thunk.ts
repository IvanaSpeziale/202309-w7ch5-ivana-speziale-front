import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser } from '../entities/user';
import { ApirepoUsers } from '../services/api.repo.users';
import { Storage } from '../services/storage';

// Thunk del login
export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: ApirepoUsers;
    userStore: Storage<{ token: string }>;
  }
>('login', async ({ loginUser, repo, userStore }) => {
  const loginResponse = await repo.login(loginUser);
  userStore.set({ token: loginResponse.token });
  return loginResponse;
});

// Thunk del login with token
export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: ApirepoUsers;
    userStore: Storage<{ token: string }>;
  }
>('loginWithToken', async ({ token, repo, userStore }) => {
  const loginResponse = await repo.loginWithToken(token);
  userStore.set({ token: loginResponse.token });
  return loginResponse;
});
