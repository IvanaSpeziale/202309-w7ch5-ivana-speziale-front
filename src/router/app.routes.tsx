import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { UsersPage } from '../pages/users/users.page';

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/users" element={<UsersPage></UsersPage>}></Route>
      </Routes>
    </Suspense>
  );
};
