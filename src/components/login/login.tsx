import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { UserLoginData } from '../../model/user';

export function Login() {
  const { loginUser } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;
    const userLogin: UserLoginData = {
      userName: (formElement.elements.namedItem('userName') as HTMLFormElement)
        .value,
      password: (formElement.elements.namedItem('password') as HTMLFormElement)
        .value,
    };
    console.log(userLogin);
    loginUser(userLogin);
  };

  return (
    <div>
      <h2>Welcome back, please log in!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">User Name</label>
          <input name="userName" type="text" required />
          <label htmlFor="">Password</label>
          <input name="password" type="password" required />
        </div>

        <button type="submit">Login</button>
      </form>
      <Link to={'/'}>Back</Link>
    </div>
  );
}
