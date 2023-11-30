import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ac } from '../slice/users.slice';
import { loginThunk, loginTokenThunk } from '../slice/users.thunk';
import { ApirepoUsers } from '../services/api.repo.users';
import { LoginUser } from '../entities/user';
import { Storage } from '../services/storage';

export function useUsers() {
  const { token } = useSelector((state: RootState) => state.usersState);
  console.log(token);

  const dispatch = useDispatch<AppDispatch>();
  const repo = new ApirepoUsers();
  const userStore = new Storage<{ token: string }>('userStore');

  const register = (newUser: FormData) => {
    repo.register(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo, userStore }));
  };

  /* Const loginWithToken = () => {
    const userStoreData = userStore.get();
    if (userStoreData) {
      const { token } = userStoreData;
      dispatch(loginTokenThunk({ token, repo, userStore }));
    }
  }; */
  const loginWithToken = (token: string) => {
    dispatch(loginTokenThunk({ token, repo, userStore }));
  };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  return {
    register,
    login,
    loginWithToken,
    logout,
  };
}
