import { User } from '../../entities/user';

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  return (
    <li>
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
      </div>
    </li>
  );
}
