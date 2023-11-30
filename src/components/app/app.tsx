import { Header } from '../header/header';
/* Import { useEffect } from 'react';
import { useUsers } from '../../hooks/users.hook'; */

/* Export function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
  }, []);

  return <Header></Header>;
} */

export function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}
