import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/users.hook';
/* Import { useState } from 'react'; */
import { dialog } from './user.buttons.module.scss';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { useRef } from 'react';

export function UserButtons() {
  /*   Const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false); */

  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const { logout } = useUsers();

  const loginDialogRef = useRef(null);
  const registerDialogRef = useRef(null);

  const dialogs = [
    ...document.querySelectorAll('dialog'),
  ] as HTMLDialogElement[];

  return (
    <section>
      {!loggedUser && (
        <>
          <button onClick={() => dialogs[0].showModal()}>Register</button>
          <button onClick={() => dialogs[1].showModal()}>Login</button>
        </>
      )}
      {loggedUser && (
        <>
          <button onClick={logout}>Logout</button>
          <p>Hola {loggedUser.name}</p>
        </>
      )}
      <dialog className={dialog} ref={registerDialogRef}>
        <Register closeModal={() => dialogs[0].close()}></Register>
      </dialog>
      <dialog className={dialog} ref={loginDialogRef}>
        <Login closeModal={() => dialogs[1].close()}></Login>
      </dialog>
    </section>
  );
}
