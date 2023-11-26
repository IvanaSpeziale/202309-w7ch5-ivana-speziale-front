import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { UserNoId } from '../../model/user';

export function Register() {
  const { addUser } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;
    const newUser: UserNoId = {
      userName: (formElement.elements.namedItem('userName') as HTMLFormElement)
        .value,
      password: (formElement.elements.namedItem('password') as HTMLFormElement)
        .value,
      firstName: (
        formElement.elements.namedItem('firstName') as HTMLFormElement
      ).value,
      lastName: (formElement.elements.namedItem('lastName') as HTMLFormElement)
        .value,
      email: (formElement.elements.namedItem('email') as HTMLFormElement).value,
      friends: [],
      enemies: [],
    };
    console.log(newUser);
    addUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">username</label>
        <input
          type="text"
          name="userName"
          placeholder="please enter your username"
          required
        />
        <label htmlFor="">password</label>
        <input
          type="text"
          name="password"
          placeholder="please enter your password"
          required
        />
        <label htmlFor="">First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="please enter your first name"
          required
        />
        <label htmlFor="">Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="please enter your last name"
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          placeholder="please enter your email"
          required
        />
      </div>
      <button type="submit">Register</button>
      <Link role="button" id="backbutton" to={'/'}>
        Back
      </Link>
    </form>
  );
}
