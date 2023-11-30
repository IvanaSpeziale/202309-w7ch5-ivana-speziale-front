import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/users.hook';
import { registerForm } from './register.module.scss';

type Props = {
  closeModal: () => void;
};
export function Register({ closeModal }: Props) {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData);
    setHasRegister(true);
    setTimeout(() => {
      handleCloseOk();
    }, 4000);
  };

  const handleCloseOk = () => {
    setHasRegister(false);
    closeModal();
  };

  return (
    <>
      <h2>Register</h2>
      {!hasRegister && (
        <form onSubmit={handleSubmit} className={registerForm}>
          <input type="text" name="name" placeholder="Nombre" />
          <input type="text" name="surname" placeholder="Apellido" />
          <input type="email" name="email" placeholder="email" required />
          <input
            type="password"
            name="passwd"
            placeholder="password"
            required
          />
          <input type="number" name="age" placeholder="edad" />
          <label htmlFor="avatar">Avatar</label>
          <input type="file" name="avatar" placeholder="avatar" />
          <button type="submit">Registrar</button>
          <button type="button">Cancelar</button>
        </form>
      )}
      {hasRegister && (
        <div>
          <p>Registrado correctamente</p>
          <button type="button" onClick={handleCloseOk}>
            Continuar
          </button>
        </div>
      )}
    </>
  );
}
