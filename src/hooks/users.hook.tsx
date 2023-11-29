import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ac } from '../slice/users.slice';
import { loginThunk, loginTokenThunk } from '../slice/users.thunk';
import { ApirepoUsers } from '../services/api.repo.users';
import { LoginUser, User } from '../entities/user';

export function useUsers() {
  const { token } = useSelector((state: RootState) => state.usersState);
  console.log(token);

  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApirepoUsers();

  const register = (newUser: Partial<User>) => {
    repo.register(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo }));
  };

  const loginWithToken = (token: string) => {
    dispatch(loginTokenThunk({ token, repo }));
  };

  const logout = () => {
    dispatch(ac.logout());
  };

  return {
    register,
    login,
    loginWithToken,
    logout,
  };
}
