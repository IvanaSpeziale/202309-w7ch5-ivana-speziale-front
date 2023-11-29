import { useEffect } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { User } from '../../entities/user';
import { UserCard } from '../usercard/usercard';

export function AllUsers() {
  const { loadUsers, usersState } = useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div>
      <ul>
        {usersState.users.map((item: User, index: number) => (
          <UserCard key={index} user={item}></UserCard>
        ))}
      </ul>
    </div>
  );
}
